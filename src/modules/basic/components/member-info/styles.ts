import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.primary};

  > h1 {
    font-size: 48px;
  }
`;