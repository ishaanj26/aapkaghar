import { MdLogin, MdDescription, MdMail } from 'react-icons/md';
import { HiMenu, HiPhone, HiX } from 'react-icons/hi';
import React, { useState, useEffect, useContext } from 'react';
import Button from '../Buttons/Button';
import LandingLink from './LandingLink';
import { LINKS } from '../../data';
import logo from '../../assests/logo/logo.png';
import { useNavigate } from 'react-router';
import axios from 'axios'
import { AppContent } from '../../context/AppContext';

import { getRandomColor } from '../.././data'

export default function Header() {
    const { backendURL, userData, setUserListings, setUserData, setIsLoggedIn } = useContext(AppContent)
    const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

    useEffect(() => {
        setBackgroundColor(getRandomColor());
    }, []);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubLink, setOpenSubLink] = useState(null);

    const toggleSubLink = (index) => {
        setOpenSubLink((prev) => (prev === index ? null : index));
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenSubLink(null); // Close all sublinks when the menu is closed
    };

    // Automatically close menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsMenuOpen(false);
                setOpenSubLink(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-white flex absolute top-0 h-[4rem] justify-between items-center px-5 xl:px-[6rem] border w-full">
            {/* Logo */}
            <img
                src={logo}
                onClick={() => {
                    navigate('/');
                }}
                alt=""
                className="hover:cursor-pointer w-[4rem]"
            />

            {/* Menu for larger screens */}
            <div className="hidden xl:flex">
                <ul className="flex">
                    {LINKS.map(({ name, url, subLinks }) => (
                        <li key={name} className="xl:pr-[4rem] pr-[1rem] relative group">
                            <LandingLink to={url}>{name}</LandingLink>

                            {subLinks && (
                                <div
                                    className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300
                                        flex flex-col items-start gap-4 bg-white py-5 pl-3 pr-12 rounded-md shadow-lg top-[1.875rem] min-w-[12.5rem]"
                                >
                                    {subLinks.map((sublink) => (
                                        <p className='hover:cursor-pointer relative inline-block text-gray-700 hover:text-blue-500 transition-colors duration-300' onClick={() => { navigate(`${sublink.url}`) }}>{sublink.name}</p>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action buttons */}
            <div className="hidden xl:flex gap-4">
                {!userData ? <Button
                    leftIcon={<MdLogin className="inline w-5 h-5" />}
                    text="Sign In"
                    onClick={() => navigate('/sign-in')}
                    transparent
                /> :
                    <div
                        onClick={() => {
                            navigate("/dashboard")
                        }}
                        style={{ backgroundColor }}
                        className="hover:cursor-pointer flex items-center justify-center w-10 h-10 rounded-full"
                    >
                        {userData.name.charAt(0).toUpperCase()}
                    </div>
                }
                <Button
                    onClick={() => {
                        navigate("/dashboard#add_property")
                    }}
                    rightIcon={<MdDescription className="inline w-5 h-5" />}
                    text="Submit Property"
                />
            </div>

            {/* Menu for smaller screens */}
            <div className="flex xl:hidden items-center">
                <button
                    className="text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Sidebar menu for small screens */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-[30%] bg-white shadow-lg p-4 z-50 overflow-y-auto  ">
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 text-xl z-50"
                        onClick={closeMenu}
                    >
                        <HiX />
                    </button>
                    {/* Navigation Links */}
                    <ul className="mt-10">
                        {!userData ? <p className='mb-2 text-sm hover:cursor-pointer relative inline-block text-gray-700  transition-colors duration-300'> <span className='hover:text-blue-500' onClick={() => navigate('/sign-in')}>Login</span> / <span onClick={() => navigate('/sign-up')} className='hover:text-blue-500'>SignUp</span> </p>
                            :
                            !userData.avatar ?
                                <div
                                    onClick={() => {
                                        navigate("/dashboard")
                                    }}
                                    style={{ backgroundColor }}
                                    className="hover:cursor-pointer flex items-center justify-center w-10 h-10 rounded-full"
                                >
                                    {userData.name.charAt(0).toUpperCase()}
                                </div> : <div
                                    onClick={() => {
                                        navigate("/dashboard")
                                    }}
                                >
                                    <img src={userData.avatar} alt="" className='w-10 h-10 rounded-full hover:cursor-pointer flex items-center justify-center' />
                                </div>}
                        <hr className='my-2 h-0.5 bg-gray-300 border-none' />
                        {LINKS.map(({ name, url, subLinks }, index) => (
                            <li key={name} className="mb-2">
                                <div
                                    className="flex justify-between items-center cursor-pointer px-2 py-1 rounded-md hover:bg-blue-100"
                                    onClick={() => toggleSubLink(index)}
                                >
                                    <LandingLink to={url}>{name}</LandingLink>
                                    {subLinks && (
                                        <span className="text-xl">
                                            {openSubLink === index ? '-' : '+'}
                                        </span>
                                    )}
                                </div>
                                {subLinks && openSubLink === index && (
                                    <ul className="pl-4 mt-2">
                                        {subLinks.map((sublink) => (
                                            <li key={sublink.name} className="mb-2 text-sm">
                                                <p onClick={() => navigate(sublink.url)} className='hover:cursor-pointer relative inline-block text-gray-700 hover:text-blue-500 transition-colors duration-300' >{sublink.name}</p>

                                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>

                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <hr className='h-0.5 bg-gray-300 border-none' />

                    {/* Action Buttons */}
                    <div className="my-5 flex justify-center">
                        <Button
                            onClick={() => {
                                navigate("/dashboard#add_property")
                            }}
                            rightIcon={<MdDescription className="inline w-5 h-5" />}
                            text="Submit Property"
                        />
                    </div>
                    <hr className='h-0.5 bg-gray-300 border-none' />
                    <div className=' my-3 flex gap-3 items-center'>
                        <HiPhone />
                        <span className='font-semibold sm:text-[13px] text-[10px]'>9811559966</span>
                    </div>
                    <hr className='h-0.5 bg-gray-300 border-none' />
                    <div className='my-3 flex gap-3 items-center'>
                        <MdMail />
                        <span className='font-semibold md:text-[13px] text-[10px]'>gluck510@gmail.com</span>
                    </div>
                </div >
            )
            }
        </div >
    );
}

