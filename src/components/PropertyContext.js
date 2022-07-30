import React, { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';


export const PropertyContext = createContext();


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
        const allAddresses = houses.map((house) => {
            return house.address;
        });

        const uniqueCountries = ['Location (any)', ...new Set(allAddresses)];

        setAddresses(uniqueCountries);
    }, []);

    useEffect(() => {
         const allSurfaces = houses.map((house) => {
            return house.surface;
        });

        const uniqueSurfaces = ['Surface (any)', ...new Set(allSurfaces)];
        setSurfaces(uniqueSurfaces);
    }, []);

    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        });

        const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
        setProperties(uniqueProperties);
    }, []);

    const handleClick = () => {
        setLoading(true);
        const isDefault = (str) => {
            return str.split(' ').includes('(any)');
        };

        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);
        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);
            if (
                house.address === address &&
                house.surface === surface &&
                house.type === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {
                return house;
            }

            if (isDefault(address) && isDefault(property) && isDefault(surface) && isDefault(price)) {
                return house;
            }

            if (!isDefault(address) && isDefault(property) && isDefault(surface) && isDefault(price)) {
                return house.address === address;
            }

            if (!isDefault(property) && isDefault(address) && isDefault(surface) && isDefault(price)) {
                return house.type === property;
            }

            if (!isDefault(surface) && isDefault(address) && isDefault(property) && isDefault(price)) {
                return house.surface === surface;
            }

            if (!isDefault(price) && isDefault(address) && isDefault(surface) && isDefault(property)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house;
                }
            }

            if (!isDefault(address) && !isDefault(property) && !isDefault(surface) && isDefault(price)) {
                return house.address === 4 && house.type === property;
            }

            if (!isDefault(address) && isDefault(property) && !isDefault(surface) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.address === address;
                }
            }

            if (!isDefault(address) && !isDefault(property) && isDefault(surface) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property;
                }
            }

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