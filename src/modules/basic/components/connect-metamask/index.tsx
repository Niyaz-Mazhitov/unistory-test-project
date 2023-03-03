import React, {useEffect} from 'react';
import {useEthers} from '@usedapp/core';
import Button from '../../../../common/components/button';
import styled from 'styled-components';
import {useAppDispatch} from '../../../../common/store';
import {basicActions} from '../../store';

export default function ConnectMetamask() {
    const dispatch = useAppDispatch();
    const {account, deactivate, activateBrowserWallet} = useEthers();

    useEffect(() => {
        account && dispatch(basicActions.setMetamaskAccount(account));
    }, [account]);

    const connect = () => activateBrowserWallet();

    const disconnect = () => {
        deactivate();
        dispatch(basicActions.setMetamaskAccount(null));
    };

    if (account) return <SAccount>{account}</SAccount>;

    return <Button onClick={connect}>Connect metamask</Button>;
}

const SAccount = styled.div`
  font-size: 18px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.fontFamily.primary};
`;