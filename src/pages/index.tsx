import React from 'react';
import HomePage from './home-page';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/components/header';
import ConnectMetamask from '../modules/basic/components/connect-metamask';
import MemberInfoPage from './member-info-page';
import InstallExtensionNotification from '../modules/basic/components/install-extension-notification';

export default function Pages() {
    return (
        <SPages>
            <InstallExtensionNotification/>
            <Header><ConnectMetamask/></Header>
            <Routes>
                <Route path='/members/:memberId' element={<MemberInfoPage/>}/>

                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </SPages>
    );
}

const SPages = styled.div`
  width: 100%;
`;