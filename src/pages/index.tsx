import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './home-page';
import Header from '../common/components/header';
import ConnectMetamask from '../modules/basic/components/connect-metamask';
import MemberInfoPage from './member-info-page';

interface IPage {
    path: string;
    Component: FC;
}

const pages: IPage[] = [
    {path: '/members/:memberId', Component: MemberInfoPage},

    {path: '/', Component: HomePage}
];

export default function Pages() {
    return (
        <>
            <Header><ConnectMetamask/></Header>
            <Routes>
                {pages.map(({path, Component}: IPage, index: number) =>
                    <Route key={index} path={path} element={<Component/>}/>)}
            </Routes>
        </>
    );
}