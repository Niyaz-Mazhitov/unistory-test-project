import styled, {css} from 'styled-components';

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

export const ProgressBarContainer = styled.div`
  position: absolute;
  width: 550px;
  height: 550px;
  transition: 1s;
  display: flex;
  justify-content: center;
`;

export const ProgressBarCircle = styled.svg`
  transform: rotate(-90deg);
  transition: 1s;
`;

export const ProgressBarForeground = styled.circle<{ progress: number }>`
  fill: none;
  stroke: #E75626;
  stroke-width: .1;
  stroke-dasharray: 300;
  stroke-dashoffset: 0;
  ${({progress}) => css`stroke-dashoffset: ${300 - (300 * progress) / 100};`}
  transition: 1s;
`;

export const Title = styled.div`
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

export const Dots = styled.div`
  width: 501px;
  height: 501px;
  position: absolute;
  top: 25px;
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

export const Dot = styled.div<{ isShown?: boolean }>`
  width: 6px;
  height: 6px;
  background-color: #E75626;
  border-radius: 100%;
  opacity: ${props => props.isShown ? 1 : 0};
  transition: 1.5s;
`;