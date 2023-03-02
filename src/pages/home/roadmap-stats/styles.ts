import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  
  h1 {
    letter-spacing: 1px;
    font-family: ${props => props.theme.fontFamily.primary};
  }
`;

export const Items = styled.div`
  width: 100%;
  
  div:first-child {
    hr {
      display: none;
    }
  }
`;

export const Item = styled.div`
  width: 100%;
  padding: 8px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  hr {
    width: 100%;
    border: none;
    border-top: .5px solid #D2C4C4;
  }
  
  h1 {
    font-size: 24px;
    color: ${props => props.theme.color.primary};
  }

  span {
    font-size: 18px;
    font-family: ${props => props.theme.fontFamily.primary};
  }
`;