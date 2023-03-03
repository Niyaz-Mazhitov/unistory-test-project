import React from 'react';
import * as S from './styles';

interface IRow {
    title: string;
    value: undefined | null | string;
}

interface IRowsProps {
    rows: IRow[];
    isLoading?: boolean;
}

export default function Rows(props: IRowsProps) {
    const {rows, isLoading} = props;

    return (
        <S.Rows>
            {rows.map((row: IRow, index: number) => <S.Row key={index}>
                <span>{row.title}</span>
                <h1>{isLoading ? 'Loading...' : row.value}</h1>
            </S.Row>)}
        </S.Rows>
    );
}