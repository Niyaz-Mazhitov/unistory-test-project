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

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 24px;
  }

  h1 {
    color: ${props => props.theme.color.primary};
  }
`;