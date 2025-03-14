// Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context'
import { CustomButton } from './';
import { logo, menu, search } from '../assets';
import { navlinks } from '../constants';

import { metamaskWallet } from '@thirdweb-dev/react'
import { useAuth0 } from "@auth0/auth0-react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import ProfilePicture from '../components/ProfilePicture';
import { TbLogout } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";


const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  const { user, isAuthenticated, logout } = useAuth0();

  const handleClick = () => {
    navigate('/Profile')
  }

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
        <input type="text" placeholder='Search for campaigns' className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none' />
        <div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
          <img src={search} alt="search" className='w-[15px] h-[15px] object-contain' />
        </div>
      </div>

      <div className='sm:flex hidden flex-row justify-end gap-4'>
        <CustomButton
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={async () => {
            try {
              if (address) {
                navigate('/create-campaign');
              } else {
                await connect(metamaskWallet()); // Ensure connect works smoothly
              }
            } catch (error) {
              console.error('Error:', error.message || error);
            }
          }}
        />

        {isAuthenticated && user && (
          <NavigationMenu.Root className="hidden lg:flex items-center space-x-8">
            <NavigationMenu.List className="flex space-x-8">

              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger>
                  <ProfilePicture />
                </NavigationMenu.Trigger>

                <NavigationMenu.Content className="absolute top-full right-0 mt-2 w-64 bg-zinc-900 rounded-lg shadow-lg p-4 space-y-2 z-50 ">
                  <div className="flex items-center space-x-3 mb-4">
                    <div>
                      <p className="text-white font-bold text-lg">{user.name}</p>
                      <p className="text-neutral-400 text-sm">{user.email}</p>
                    </div>
                  </div>

                  <hr />

                  <div className="flex items-center space-x-3 mb-4 p-2 hover:bg-zinc-700 rounded-lg transition-colors">
                    <FaUserTie className='text-white size-5' />
                    <button
                      onClick={handleClick}
                      className="w-full text-left text-white "
                    >
                      Your Profile
                    </button>
                  </div>

                  <hr />

                  <div className="flex items-center space-x-3 mb-4 p-2 hover:bg-zinc-700 rounded-lg transition-colors">
                    <TbLogout className='text-white size-5' />
                    <button
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      className="w-full text-left text-white "
                    >
                      Log Out
                    </button>
                  </div>

                </NavigationMenu.Content>
              </NavigationMenu.Item>

            </NavigationMenu.List>
          </NavigationMenu.Root>
        )}
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                />
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              handleClick={async () => {
                try {
                  if (address) {
                    navigate('/create-campaign');
                  } else {
                    await connect(metamaskWallet()); // Ensure connect works smoothly
                  }
                } catch (error) {
                  console.error('Error:', error.message || error);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
