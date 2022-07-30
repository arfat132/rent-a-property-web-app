import React, { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

// create context
export const PropertyContext = createContext();

// provider
const PropertyContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [address, setAddress] = useState('Location (any)');
    const [addresses, setAddresses] = useState([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);
    const [surface, setSurface] = useState('Surface (any)');
    const [surfaces, setSurfaces] = useState([]);
    const [price, setPrice] = useState('Price range (any)');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // return all countries
        const allAddresses = houses.map((house) => {
            return house.address;
        });

        // remove duplicates
        const uniqueCountries = ['Location (any)', ...new Set(allAddresses)];

        // set countries state
        setAddresses(uniqueCountries);
    }, []);

    useEffect(() => {
        // return all countries
        const allSurfaces = houses.map((house) => {
            return house.surface;
        });

        // remove duplicates
        const uniqueSurfaces = ['Surface (any)', ...new Set(allSurfaces)];

        // set countries state
        setSurfaces(uniqueSurfaces);
    }, []);

    useEffect(() => {
        // return only countries
        const allProperties = houses.map((house) => {
            return house.type;
        });

        // remove duplicates
        const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

        // set countries state
        setProperties(uniqueProperties);
    }, []);

    const handleClick = () => {
        setLoading(true);
        // check the string if includes '(any)'
        const isDefault = (str) => {
            return str.split(' ').includes('(any)');
        };

        // get first string (price) and parse it to number
        const minPrice = parseInt(price.split(' ')[0]);
        // get last string (price) and parse it to number
        const maxPrice = parseInt(price.split(' ')[2]);

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);
            // all values are selected
            if (
                house.address === address &&
                house.surface === surface &&
                house.type === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {
                return house;
            }
            // all values are default
            if (isDefault(address) && isDefault(property) && isDefault(surface) && isDefault(price)) {
                return house;
            }
            // country is not default
            if (!isDefault(address) && isDefault(property) && isDefault(surface) && isDefault(price)) {
                return house.address === address;
            }
            // property is not default
            if (!isDefault(property) && isDefault(address) && isDefault(surface) && isDefault(price)) {
                return house.type === property;
            }
            // surface is not default
            if (!isDefault(surface) && isDefault(address) && isDefault(property) && isDefault(price)) {
                return house.surface === surface;
            }
            // price is not default
            if (!isDefault(price) && isDefault(address) && isDefault(surface) && isDefault(property)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house;
                }
            }
            // country, surface and property is not default
            if (!isDefault(address) && !isDefault(property) && !isDefault(surface) && isDefault(price)) {
                return house.address === 4 && house.type === property;
            }
            // country, surface and price is not default
            if (!isDefault(address) && isDefault(property) && !isDefault(surface) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.address === address;
                }
            }

            // country, property and price is not default
            if (!isDefault(address) && !isDefault(property) && isDefault(surface) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property;
                }
            }
            // property, surface and price is not default
            if (isDefault(address) && !isDefault(property) && !isDefault(surface) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property;
                }
            }
        });

        setTimeout(() => {
            return (
                newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
                setLoading(false)
            );
        }, 1000);
    };

    return (
        <PropertyContext.Provider
            value={{
                address,
                setAddress,
                surface,
                setSurface,
                surfaces,
                setSurfaces,
                addresses,
                property,
                setProperty,
                properties,
                price,
                setPrice,
                handleClick,
                houses,
                loading,
            }}
        >
            {children}
        </PropertyContext.Provider>
    );
};

export default PropertyContextProvider;