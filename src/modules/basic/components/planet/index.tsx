import React from 'react';
import * as S from './styles';
import planet from './planet.png';

export default function Planet() {
    return (
        <S.PlanetContainer>
            <ProgressBar/>
            <S.InnerRing size={446}/>
            <S.InnerRing isLine size={370}/>
            <S.InnerRing isLine size={384}/>
            <img src={planet} alt=''/>
        </S.PlanetContainer>
    );
}

function ProgressBar() {
    const progress2 = 100 - 3;

    return (
        <S.ProgressBarContainer>
            <S.Dots>
                <S.TopDots>
                    <S.Dot isShown={72 <= progress2}/>
                    <S.Dot isShown={22 <= progress2}/>
                </S.TopDots>
                <S.BottomDot>
                    <S.Dot isShown={47 <= progress2}/>
                </S.BottomDot>
            </S.Dots>
            <S.ProgressBarCircle viewBox='0 0 100 100'>
                <S.ProgressBarForeground cx='50' cy='50' r='45' progress={progress2}/>
            </S.ProgressBarCircle>
            <S.Title>
                <span>Q1 2022</span>
                <div><S.Dot/></div>
            </S.Title>
        </S.ProgressBarContainer>
    );
}