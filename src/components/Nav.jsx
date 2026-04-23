import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useAuth } from '../context/AuthContext';

const Nav = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className='w-full fixed bg-black top-0 left-0 flex justify-between items-center py-4 px-5 md:px-10 lg:px-15 text-white z-10'>

            {/* Logo */}
            <div className='flex gap-x-2 cursor-pointer' onClick={() => navigate('/landing')}>
                <img src={logo} alt="Company logo" className='h-8' />
                <h4 className='font-epilogue text-lg'>CrowdFund</h4>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu.Root className='hidden lg:flex space-x-8'>
                <NavigationMenu.List className='flex space-x-8'>

                    <NavigationMenu.Item className='relative'>
                        <NavigationMenu.Trigger className='hover:text-gray-400'>Explore</NavigationMenu.Trigger>
                        <NavigationMenu.Content className='absolute flex flex-col top-full mt-2 w-64 left-1/2 transform -translate-x-1/2 bg-zinc-900 border border-neutral-700 rounded-lg shadow-lg p-4'>
                            <NavigationMenu.Link href="#services" className='hover:text-gray-400 hover:bg-zinc-700 p-2 rounded-lg'>Services</NavigationMenu.Link>
                            <NavigationMenu.Link href="#services" className='hover:text-gray-400 hover:bg-zinc-700 p-2 rounded-lg'>Features</NavigationMenu.Link>
                            <NavigationMenu.Link href="#services" className='hover:text-gray-400 hover:bg-zinc-700 p-2 rounded-lg'>Categories</NavigationMenu.Link>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className='relative'>
                        <NavigationMenu.Trigger className='hover:text-gray-400'>Support</NavigationMenu.Trigger>
                        <NavigationMenu.Content className='absolute flex flex-col top-full mt-2 w-64 left-1/2 transform -translate-x-1/2 bg-zinc-900 border border-neutral-700 rounded-lg shadow-lg p-4'>
                            <NavigationMenu.Link href="#about" className='hover:text-gray-400 hover:bg-zinc-700 p-2 rounded-lg'>About us</NavigationMenu.Link>
                            <NavigationMenu.Link href="#contact" className='hover:text-gray-400 hover:bg-zinc-700 p-2 rounded-lg'>Contact Us</NavigationMenu.Link>
                            <NavigationMenu.Link href="#contact" className='hover:text-gray-400 hover:bg-zinc-700 p-2 rounded-lg'>FAQ</NavigationMenu.Link>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="#" className='hover:text-gray-400'>How it Works</NavigationMenu.Link>
                    </NavigationMenu.Item>

                </NavigationMenu.List>
            </NavigationMenu.Root>

            {/* Auth Buttons */}
            <div className='flex items-center gap-x-3'>
                {isAuthenticated ? (
                    <>
                        <button
                            onClick={() => navigate('/home')}
                            className='text-sm text-gray-300 hover:text-white transition'
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => { logout(); navigate('/landing'); }}
                            className='bg-stone-800 hover:bg-stone-700 text-white text-sm rounded-lg px-5 py-2 transition'
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className='bg-[#8c6dfd] hover:bg-[#7b5de0] text-white text-sm font-semibold rounded-lg px-5 py-2 transition'
                    >
                        Login
                    </button>
                )}
            </div>

        </nav>
    );
};

export default Nav;
