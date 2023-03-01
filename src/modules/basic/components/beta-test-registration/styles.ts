import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.div`
  letter-spacing: 1.5px;
  font-size: 36px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.fontFamily.primary};
`;

export const Description = styled.div`
  font-family: ${props => props.theme.fontFamily.secondary};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    letter-spacing: 1.5px;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    font-family: ${props => props.theme.fontFamily.primary};
  }
`;