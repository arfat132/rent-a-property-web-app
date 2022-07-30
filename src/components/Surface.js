import React, { useState, useContext } from 'react';
// import icons
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { PropertyContext } from './PropertyContext';
import { BiArea } from 'react-icons/bi';

const Surface = () => {
    const { surface, setSurface, surfaces } = useContext(PropertyContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full text-left flex'
            >
               <BiArea className='text-xl text-violet-700 mr-2'/>
                <div>
                    <div className='text-[15px] font-medium leading-tight'>{surface}</div>
                    <div className='text-[13px] flex'>
                        Choose surface size
                        {isOpen ? (
                            <RiArrowUpSLine className='ml-2 mt-1' />
                        ) : (
                            <RiArrowDownSLine className='ml-2 mt-1' />
                        )}
                    </div>
                </div>
            </Menu.Button>
            <Menu.Items className='dropdown-menu list-none'>
                {surfaces.map((surface, index) => {
                    return (
                        <Menu.Item
                            as='li'
                            onClick={() => setSurface(surface)}
                            key={index}
                            className='cursor-pointer hover:text-violet-700 transition'
                        >
                            {surface}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default Surface;