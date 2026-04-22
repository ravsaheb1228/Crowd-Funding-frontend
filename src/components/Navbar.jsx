import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    navigate('/profile');
  }

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>

      {/* 🔍 Search */}
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
        <input
          type="text"
          placeholder='Search for campaigns'
          className='flex w-full text-white bg-transparent outline-none'
        />
        <div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
          <img src={search} alt="search" className='w-[15px] h-[15px]' />
        </div>
      </div>

      {/* 🔥 Right Section */}
      <div className='sm:flex hidden flex-row justify-end gap-4'>

        {/* ✅ LOGIN BUTTON (NEW FIX) */}
        {!isAuthenticated && (
          <CustomButton
            btnType="button"
            title="Login"
            styles="bg-[#8c6dfd]"
            handleClick={() => navigate('/LoginPage')}
          />
        )}

        {/* ✅ WALLET BUTTON (ONLY AFTER LOGIN - OPTIONAL BUT BETTER UX) */}
        {isAuthenticated && (
          <CustomButton
            btnType="button"
            title={address ? 'Create a campaign' : 'Connect'}
            styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
            handleClick={async () => {
              try {
                if (address) {
                  navigate('/create-campaign');
                } else {
                  await connect(metamaskWallet());
                }
              } catch (error) {
                console.error('Error:', error);
              }
            }}
          />
        )}

        {/* ✅ PROFILE MENU */}
        {isAuthenticated && user && (
          <NavigationMenu.Root className="hidden lg:flex items-center space-x-8">
            <NavigationMenu.List>

              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger>
                  <ProfilePicture />
                </NavigationMenu.Trigger>

                <NavigationMenu.Content className="absolute top-full right-0 mt-2 w-64 bg-zinc-900 rounded-lg shadow-lg p-4 z-50">

                  <p className="text-white font-bold">{user.name}</p>
                  <p className="text-gray-400 text-sm">{user.email}</p>

                  <hr className="my-2" />

                  <div className="flex items-center gap-2 p-2 hover:bg-zinc-700 rounded">
                    <FaUserTie className='text-white' />
                    <button onClick={handleClick} className="text-white">
                      Your Profile
                    </button>
                  </div>

                  <div className="flex items-center gap-2 p-2 hover:bg-zinc-700 rounded">
                    <TbLogout className='text-white' />
                    <button
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      className="text-white"
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

      {/* 📱 Mobile Menu */}
      <div className="sm:hidden flex justify-between items-center relative">

        <div className="w-[40px] h-[40px] bg-[#2c2f32] flex justify-center items-center">
          <img src={logo} alt="logo" className="w-[60%]" />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] cursor-pointer"
          onClick={() => setToggleDrawer(prev => !prev)}
        />

        <div className={`absolute top-[60px] left-0 right-0 bg-[#1c1c24] ${!toggleDrawer ? 'hidden' : 'block'}`}>

          <ul>
            {navlinks.map((link) => (
              <li
                key={link.name}
                className="p-4"
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* ✅ MOBILE LOGIN BUTTON */}
          {!isAuthenticated && (
            <div className="p-4">
              <CustomButton
                btnType="button"
                title="Login"
                styles="bg-[#8c6dfd]"
                handleClick={() => navigate('/LoginPage')}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Navbar;