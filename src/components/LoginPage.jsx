import React, { useEffect } from 'react';   // ✅ FIX
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'; // ✅ FIX

const LoginPage = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated, navigate]); // ✅ add navigate dependency

    return (
        <div className='flex items-center gap-x-4'>
            {isAuthenticated ? (
                <button
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                    className='bg-stone-900 text-white rounded-lg px-6 py-2'
                >
                    Log Out
                </button>
            ) : (
                <button
                    onClick={() => loginWithRedirect()}
                    className='bg-stone-900 text-white rounded-lg px-6 py-2'
                >
                    Log In
                </button>
            )}
        </div>
    );
};

export default LoginPage;