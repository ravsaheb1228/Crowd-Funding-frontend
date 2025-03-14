import React from 'react';
import { logo } from '../assets';
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useAuth0 } from "@auth0/auth0-react";


const Nav = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

    return (
        <nav className='w-full fixed bg-black top-0 left-0 flex justify-between items-center py-4 px-5 md:px-10 lg:px-15 text-white z-10'>
            {/* Logo Section */}
            <div className='flex gap-x-2 cursor-pointer md:-left-0 '>
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

            {/* Login / Sign Up Button */}
            <div className='flex items-center gap-x-4'>
                {isAuthenticated ? (
                    <button
                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        className='bg-stone-900 text-white font-epilogue rounded-lg px-6 py-2 hover:bg-neutral-700'
                    >
                        Log Out
                    </button>
                ) : (
                    <button
                        onClick={() => loginWithRedirect()}
                        className='bg-stone-900 text-white font-epilogue rounded-lg px-6 py-2 hover:bg-neutral-700'
                    >
                        Log In
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Nav;