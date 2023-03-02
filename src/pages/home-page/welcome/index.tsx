import React from 'react';
import * as S from './styles';
import planet from './planet.png';

export default function Welcome() {
    return (
        <S.Container>
            <S.PlanetContainer>
                <S.InnerRing size={446}/>
                <S.InnerRing isLine size={370}/>
                <S.InnerRing isLine size={384}/>
                <img src={planet} alt=''/>
            </S.PlanetContainer>
            <S.Title>
                Explore Your own planet
                <br/>
                In <span>our New</span> metaverse
            </S.Title>
            <S.Title isMask>
                Explore Your own planet
                <br/>
                In <span>our New</span> metaverse
            </S.Title>
            <S.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </S.Description>
        </S.Container>
    );
}