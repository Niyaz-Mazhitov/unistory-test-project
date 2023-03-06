import React, {MouseEvent, useEffect, useState} from 'react';
import * as S from './styles';
import planet from './planet.png';
import {PlanetInners} from './styles';

export default function Preview() {
    const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({x: 110, y: 110});

    let timer: NodeJS.Timeout;

    const onMove = (event: MouseEvent<HTMLDivElement>) => {
        timer && clearTimeout(timer);

        timer = setTimeout(() => {
            setCoordinates({x: event.nativeEvent.offsetX - 160, y: event.nativeEvent.offsetY - 160});
        }, 300);
    };

    const onLeave = () => {
        timer && clearTimeout(timer);

        setCoordinates({x: 110, y: 110});
    };

    return (
        <S.Container>
            <S.PlanetContainer x={coordinates.x} y={coordinates.y} onMouseMove={onMove} onMouseLeave={onLeave}>
                <ProgressBar/>
                <PlanetInners>
                    <S.InnerRing size={446}/>
                    <S.InnerRing isLine size={370}/>
                    <S.InnerRing isLine size={384}/>
                </PlanetInners>
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

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setProgress(47);
        }, 800);
    }, []);

    return (
        <S.ProgressBarContainer>
            <S.Dots>
                <S.TopDots>
                    <S.Dot delay={9} backDelay={2} isShown={72 <= progress}/>
                    <S.Dot delay={3} backDelay={3} isShown={22 <= progress}/>
                </S.TopDots>
                <S.BottomDot>
                    <S.Dot delay={6} backDelay={1} isShown={47 <= progress}/>
                </S.BottomDot>
            </S.Dots>
            <S.ProgressBarCircle viewBox='0 0 100 100'>
                <S.ProgressBarForeground cx='50' cy='50' r='45' progress={progress}/>
            </S.ProgressBarCircle>
            <S.ProgressBarTitle>
                <span>Q1 2022</span>
                <div><S.Dot isShown/></div>
            </S.ProgressBarTitle>
        </S.ProgressBarContainer>
    );
}