import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from '@thirdweb-dev/chains';
import { Auth0Provider } from '@auth0/auth0-react';


import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={Sepolia} clientId="37df90adf6f8a68ef1e9a8abd8adc608">
        <Router>
            <Auth0Provider
                domain="dev-3k50lxlei1mtpchj.us.auth0.com"
                clientId="VuhIn0ikha0MskyOBNhrd40Xu1FjmNHr"
                authorizationParams={{
                    redirect_uri: `${window.location.origin}/home`
                }}
            >
                <StateContextProvider>
                    <App />
                </StateContextProvider>
            </Auth0Provider>
        </Router>
    </ThirdwebProvider>
)
