import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${props => props.theme.color.default};
    background-color: ${props => props.theme.background.default};

    &::-webkit-scrollbar {
      height: 5px;
      width: 5px;
      background-color: ${props => props.theme.background.default};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.background.secondary};
    }
  }
`;