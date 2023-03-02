import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/main.css';
import App from './app';
import {Provider} from 'react-redux';
import {store} from './common/store';
import {BrowserRouter} from 'react-router-dom';
// import {Mainnet, DAppProvider, Config, Goerli} from '@usedapp/core';
// import {getDefaultProvider} from 'ethers';
//
// const config: Config = {
//     readOnlyChainId: Mainnet.chainId,
//     readOnlyUrls: {
//         [Mainnet.chainId]: getDefaultProvider('mainnet'),
//         [Goerli.chainId]: getDefaultProvider('goerli')
//     }
// };

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            {/*<DAppProvider config={config}>*/}
            <App/>
            {/*</DAppProvider>*/}
        </BrowserRouter>
    </Provider>
);