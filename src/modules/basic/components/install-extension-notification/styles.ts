import styled from 'styled-components';

export const Container = styled.div`
  width: 422px;
  height: 295px;
  padding: 45px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;

  > h1 {
    text-transform: uppercase;
    color: ${props => props.theme.color.primary};
    font-family: ${props => props.theme.fontFamily.primary};
    font-size: 36px;
    letter-spacing: 1.5px;
  }

  p {
    font-size: 16px;
    color: ${props => props.theme.color.default};
    font-family: ${props => props.theme.fontFamily.secondary};

    a {
      // TODO...
      margin-left: 4px;
      text-decoration: none;
      color: ${props => props.theme.color.primary};
    }
  }
`;