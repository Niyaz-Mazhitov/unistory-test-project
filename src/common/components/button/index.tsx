import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 10px 24px;
  background-color: ${props => props.theme.background.secondary};
  font-size: 18px;
  letter-spacing: 1.5px;
  color: ${props => props.theme.color.default};
  font-family: ${props => props.theme.fontFamily.primary};
`;

export default Button;