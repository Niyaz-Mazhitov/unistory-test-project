import styled from 'styled-components';

export const Container = styled.div`
  width: 1010px;
  height: 500px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div<{ isMask?: boolean }>`
  position: absolute;
  font-size: 120px;
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.primary};

  span {
    color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }

  ${props => props.isMask && ({color: props.theme.color.primary, clipPath: 'circle(160px at 855px)'})}
`;

export const Description = styled.div`
  width: 420px;
  font-size: 16px;
  font-family: ${props => props.theme.fontFamily.secondary};
  position: absolute;
  margin-top: 400px;
`;