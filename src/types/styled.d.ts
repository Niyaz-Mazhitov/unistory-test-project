import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fontFamily: { primary: string; secondary: string };
        color: { default: string; primary: string; };
        background: { default: string; primary: string; secondary: string };
    }
}