import styled from 'styled-components';

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.primary};
  letter-spacing: 1px;
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