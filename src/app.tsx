import React from 'react';
import Pages from './pages';
import ThemesProvider from './common/styles';
import styled from 'styled-components';

const SApp = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 14px 64px;
  background-color: ${props => props.theme.background.default};
`;

export default function App() {
    return (
        <ThemesProvider>
            <SApp>
                <Pages/>
            </SApp>
        </ThemesProvider>
    );
}