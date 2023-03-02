import styled from 'styled-components';

export const Container = styled.div`
  //background-color: red;
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

  ${props => props.isMask && ({color: props.theme.color.primary, clipPath: 'circle(160px at 835px)'})}
`;

export const PlanetContainer = styled.div`
  width: 500px;
  height: 500px;
  left: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  img {
    position: absolute;
    width: 320px;
    height: 320px;
  }
`;

export const InnerRing = styled.div<{ size: number; isLine?: boolean }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  border-radius: 100%;
  ${props => props.isLine ? 'border: 1px solid #323232' : 'background-color: #1E1E20'}
`;

export const Description = styled.div`
  width: 420px;
  font-size: 16px;
  font-family: ${props => props.theme.fontFamily.secondary};
  position: absolute;
  margin-top: 400px;
`;