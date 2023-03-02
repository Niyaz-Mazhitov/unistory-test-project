import React from 'react';
import * as S from './styles';

export default function MemberInfo() {
    return (
        <S.Container>
            <h1>personal data</h1>
            <Rows/>
        </S.Container>
    );
}

interface IRow {
    title: string;
    value: string;
}

function Rows() {
    const rows: IRow[] = [
        {title: 'Name', value: 'My name'},
        {title: 'email', value: 'my email'},
        {title: 'wallet', value: '1222222222'}
    ];

    return (
        <S.Rows>
            {rows.map((row: IRow, index: number) => <S.Row key={index}>
                <span>{row.title}</span>
                <h1>{row.value}</h1>
            </S.Row>)}
        </S.Rows>
    );
}