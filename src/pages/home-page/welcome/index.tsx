import React from 'react';
import * as S from './styles';
import Planet from '../../../modules/basic/components/planet';

export default function Welcome() {
    return (
        <S.Container>
            <Planet/>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
                ex ea commodo consequat.
            </S.Description>
        </S.Container>
    );
}