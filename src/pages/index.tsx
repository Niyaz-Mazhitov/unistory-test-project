import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './home';
import Header from '../common/components/header';
import ConnectMetamask from '../modules/basic/components/connect-metamask';

export default function Pages() {
    return (
        <>
            <Header><ConnectMetamask/></Header>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </>
    );
}