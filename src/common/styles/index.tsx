import React, {ReactNode} from 'react';
import {styles} from './styles';
import {ThemeProvider} from 'styled-components';

interface IThemesProviderProps {
    children: ReactNode;
}

export default function ThemesProvider(props: IThemesProviderProps) {
    const {children} = props;

    return (
        <ThemeProvider theme={styles}>
            {children}
        </ThemeProvider>
    );
}