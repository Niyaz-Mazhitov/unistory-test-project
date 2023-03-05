import React, {useEffect} from 'react';
import {useEthers} from '@usedapp/core';
import Button from '../../../../common/components/button';
import styled from 'styled-components';
import {useAppDispatch} from '../../../../common/store';
import {basicActions} from '../../store';

export default function ConnectMetamask() {
    const dispatch = useAppDispatch();
    const {active, account, deactivate, activateBrowserWallet} = useEthers();

    useEffect(() => {
        active && account && dispatch(basicActions.setMetamaskAccount({active, account}));
    }, [active, account]);

    const connect = () => activateBrowserWallet();

    // Reset metamask account data and disconnect from metamask
    const disconnect = () => {
        deactivate();
        dispatch(basicActions.resetMetamaskAccount());
    };

    if (account) return <SAccount>{account}</SAccount>;

    return <Button onClick={connect}>Connect metamask</Button>;
}

const SAccount = styled.div`
  font-size: 18px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.fontFamily.primary};
`;