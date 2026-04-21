// LoginPage.jsx
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
    
    return (
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
    )
}

export default LoginPage
