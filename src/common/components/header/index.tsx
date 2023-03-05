import React, {ReactNode} from 'react';
import * as S from './styles';

interface IHeaderProps {
    children: ReactNode;
}

export default function Header(props: IHeaderProps) {
    const {children} = props;

    return (
        <S.Header>
            <S.Logo>Logo</S.Logo>
            {children}
        </S.Header>
    );
}