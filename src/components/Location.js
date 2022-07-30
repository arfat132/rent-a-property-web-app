import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { PropertyContext } from './PropertyContext';

const Location = () => {
    const { address, setAddress, addresses } = useContext(PropertyContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full text-left flex'
            >
                <RiMapPinLine className='dropdown-icon-primary text-xl text-violet-700 mr-2' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'>{address}</div>
                    <div className='text-[13px] flex'>
                        Select your place
                        {isOpen ? (
                            <RiArrowUpSLine className='ml-2 mt-1' />
                        ) : (
                            <RiArrowDownSLine className='ml-2 mt-1' />
                        )}
                    </div>
                </div>
            </Menu.Button>
            <Menu.Items className='dropdown-menu list-none'>
                {addresses.map((address, index) => {
                    return (
                        <Menu.Item
                            as='li'
                            onClick={() => setAddress(address)}
                            key={index}
                            className='cursor-pointer hover:text-violet-700 transition'
                        >
                            {address}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default Location;