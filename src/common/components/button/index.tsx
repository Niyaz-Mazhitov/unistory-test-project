import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 8px 24px;
  background-color: ${props => props.theme.background.secondary};
  font-size: 18px;
  letter-spacing: 1.5px;
  color: ${props => props.theme.color.default};
  font-family: ${props => props.theme.fontFamily.primary};
  transition: .4s;

  &:hover {
    box-shadow: 0 0 10px ${props => props.theme.background.secondary};
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      box-shadow: none;
    }
  }
`;

export default Button;