import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePicture = () => {
    const { user } = useAuth0();
    const userlogo = user?.picture;
    const userName = user?.name || "User";

    return (
        <div className='text-white flex items-start justify-center rounded-full font-bold text-2xl'>
            {
                userlogo ? (
                    <img
                        src={userlogo}
                        alt={user?.name}
                        className='rounded-full w-10 h-10' />
                ) : (
                    <span className='text-white bg-gray-50'>
                        {userName.charAt[0].toUpperCase()}
                    </span>
                )
            }
        </div>
    )
}

export default ProfilePicture
