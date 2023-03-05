import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 199px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5A5A5A;
  border: 1px dashed #C7C7C7;
  font-size: 18px;
  color: ${props => props.theme.color.default};
  font-family: ${props => props.theme.fontFamily.primary};
`