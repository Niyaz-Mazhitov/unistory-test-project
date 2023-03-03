import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/main.css';
import App from './app';
import {Provider} from 'react-redux';
import {persist, store} from './common/store';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {Mainnet, DAppProvider, Config, Goerli} from '@usedapp/core';
import {getDefaultProvider} from 'ethers';

const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: getDefaultProvider('mainnet'),
        [Goerli.chainId]: getDefaultProvider('goerli')
    }
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <PersistGate loading={<div>Loading..</div>} persistor={persist}>
        <Provider store={store}>
            <BrowserRouter>
                <DAppProvider config={config}>
                    <App/>
                </DAppProvider>
            </BrowserRouter>
        </Provider>
    </PersistGate>
);