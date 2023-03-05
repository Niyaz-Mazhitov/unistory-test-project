import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 1010px;
  height: 500px;
  position: absolute;
  display: flex;
  align-items: center;
`;

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

export const PlanetInners = styled.div`
  width: 540px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerRing = styled.div<{ size: number; isLine?: boolean }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  border-radius: 100%;
  ${props => props.isLine ? 'border: 1px solid #323232' : 'background-color: #1E1E20'}
`;

export const ProgressBarContainer = styled.div`
  top: -5px;
  position: absolute;
  width: 550px;
  height: 550px;
  display: flex;
  justify-content: center;
`;

export const ProgressBarTitle = styled.div`
  position: absolute;
  top: 15px;
  padding: 8px 12px;
  background: #FFFFFF;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  span {
    height: 14px;
    font-size: 14px;
    color: #171719;
    font-family: ${props => props.theme.fontFamily.primary};
  }
  div {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 100%;
  }
`;

export const ProgressBarCircle = styled.svg`
  transform: rotate(-90deg);
`;

export const ProgressBarForeground = styled.circle<{ progress: number }>`
  fill: none;
  stroke: #E75626;
  stroke-width: .1;
  stroke-dasharray: 300;
  stroke-dashoffset: 0;
  transition: 3s;
  ${({progress}) => css`stroke-dashoffset: ${300 - (300 * progress) / 100};`}
`;

export const Dots = styled.div`
  width: 501px;
  height: 501px;
  position: absolute;
  top: 25px;
`;

export const Dot = styled.div<{ delay?: number; backDelay?: number; isShown: boolean }>`
  width: 6px;
  height: 6px;
  max-width: 6px;
  max-height: 6px;
  background-color: #E75626;
  border-radius: 100%;
  opacity: ${props => props.isShown ? 1 : 0};
  transition: ${props => props.isShown ? props.delay : props.backDelay}s;
`;

export const TopDots = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomDot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Title = styled.div<{ isMask?: boolean; x?: number; y?: number }>`
  position: absolute;
  font-size: 120px;
  text-transform: uppercase;
  transition: 1.4s;
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