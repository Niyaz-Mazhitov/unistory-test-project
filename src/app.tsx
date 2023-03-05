import React from 'react';
import styled from 'styled-components';
import ThemesProvider, {GlobalStyles} from './common/styles';
import Pages from './pages';

export default function App() {
    return (
        <ThemesProvider>
            <GlobalStyles/>
            <SApp>
                <main>
                    <Pages/>
                </main>
            </SApp>
        </ThemesProvider>
    );
}

const SApp = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  main {
    min-width: 1440px;
    max-width: 1440px;
  }
`;