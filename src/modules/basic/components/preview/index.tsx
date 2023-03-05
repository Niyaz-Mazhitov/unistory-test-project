import React, {MouseEvent, useState} from 'react';
import * as S from './styles';
import planet from './planet.png';

export default function Preview() {
    const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({x: 110, y: 110});

    const onMove = (event: MouseEvent<HTMLDivElement>) => {
        setCoordinates({x: event.nativeEvent.offsetX - 160, y: event.nativeEvent.offsetY - 160});
    };

    const onLeave = () => {
        setCoordinates({x: 110, y: 110});
    };

    return (
        <S.Container>
            <S.PlanetContainer x={coordinates.x} y={coordinates.y} onMouseMove={onMove} onMouseLeave={onLeave}>
                <img src={planet} alt=''/>
            </S.PlanetContainer>
            <S.Title>
                Explore Your own planet
                <br/>
                In <span>our New</span> metaverse
            </S.Title>
            <S.Title isMask x={coordinates.x + 730} y={coordinates.y + 25}>
                Explore Your own planet
                <br/>
                In <span>our New</span> metaverse
            </S.Title>
            <S.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
                ex ea commodo consequat.
            </S.Description>
        </S.Container>
    );
}