import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { PropertyContext } from './PropertyContext';


const PropertyType = () => {
    const { property, setProperty, properties } = useContext(PropertyContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full text-left flex'
            >
                <RiHome5Line className='dropdown-icon-primary text-xl text-violet-700 mr-2' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'>
                        {property}
                    </div>
                    <div className='text-[13px] flex'>Choose property type
                        {isOpen ? (
                            <RiArrowUpSLine className='ml-2 mt-1' />
                        ) : (
                            <RiArrowDownSLine className='ml-2 mt-1' />
                        )}
                    </div>
                </div>

            </Menu.Button>

            <Menu.Items className='dropdown-menu list-none'>
                {properties.map((property, index) => {
                    return (
                        <Menu.Item
                            as='li'
                            onClick={() => setProperty(property)}
                            key={index}
                            className='cursor-pointer hover:text-violet-700 transition'
                        >
                            {property}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default PropertyType;