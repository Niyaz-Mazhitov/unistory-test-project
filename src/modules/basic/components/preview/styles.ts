import styled, {css} from 'styled-components';

export const PlanetContainer = styled.div<{ x: number; y: number }>`
  left: 570px;
  width: 540px;
  height: 540px;
  position: absolute;
  border-radius: 100%;
  background: radial-gradient(circle, rgba(23, 23, 25, 1) 65%, rgba(255, 255, 255, 0.1) 100%);

  img {
    position: absolute;
    width: 320px;
    height: 320px;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    transition: 1.5s;
  }
`;

export const Container = styled.div`
  width: 1010px;
  height: 500px;
  position: absolute;
  display: flex;
  align-items: center;
`;

export const Title = styled.div<{ isMask?: boolean; x?: number; y?: number }>`
  position: absolute;
  font-size: 120px;
  text-transform: uppercase;
  transition: 1.5s;
  font-family: ${props => props.theme.fontFamily.primary};
  color: ${props => props.isMask && props.theme.color.primary};
  clip-path: ${props => props.isMask && css`circle(160px at ${props.x}px ${props.y}px)`};

  span {
    color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }
`;

export const Description = styled.div`
  width: 420px;
  font-size: 16px;
  font-family: ${props => props.theme.fontFamily.secondary};
  position: absolute;
  margin-top: 400px;
`;