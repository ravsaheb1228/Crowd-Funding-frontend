import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePicture = () => {
    const { user } = useAuth();
    const userName = user?.name || 'User';
    const initial = userName.charAt(0).toUpperCase();

    return (
        <div className='w-10 h-10 rounded-full bg-[#8c6dfd] flex items-center justify-center text-white font-bold text-lg cursor-pointer'>
            {initial}
        </div>
    );
};

export default ProfilePicture;
