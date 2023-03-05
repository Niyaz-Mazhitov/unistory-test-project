import React, {ReactNode} from 'react';
import {theme} from './theme';
import {ThemeProvider as ThemeProviderStyledComponents} from 'styled-components';

interface IThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider(props: IThemeProviderProps) {
    const {children} = props;

    return (
        <ThemeProviderStyledComponents theme={theme}>
            {children}
        </ThemeProviderStyledComponents>
    );
}