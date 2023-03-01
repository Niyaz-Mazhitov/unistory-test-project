import React from 'react';
import {useEthers} from '@usedapp/core';
import Button from '../../../../common/components/button';
import styled from 'styled-components';

export default function ConnectMetamask() {
    const {account, deactivate, activateBrowserWallet} = useEthers();

    const connect = () => activateBrowserWallet();

    if (account) return <SAccount onClick={deactivate}>{account}</SAccount>;

    return <Button onClick={connect}>Connect</Button>;
}

const SAccount = styled.div`
  font-size: 18px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.fontFamily.primary};
`;