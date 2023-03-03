import React from 'react';
import * as S from './styles';
import {useFindOneMemberQuery} from '../../api';

interface IMemberInfoProps {
    memberId: number;
}

export default function MemberInfo(props: IMemberInfoProps) {
    const {memberId} = props;
    const {isLoading, data} = useFindOneMemberQuery(memberId);

    return (
        <S.Container>
            <h1>personal data</h1>
            <Rows isLoading={isLoading} name={data?.username} email={data?.email} wallet={data?.address}/>
        </S.Container>
    );
}

interface IRow {
    title: string;
    value: string;
}

interface IRowsProps {
    isLoading: boolean;
    name: string | undefined;
    email: string | undefined;
    wallet: string | undefined;
}

function Rows(props: IRowsProps) {
    const {isLoading, name = '', email = '', wallet = ''} = props;

    const rows: IRow[] = [
        {title: 'name', value: name},
        {title: 'email', value: email},
        {title: 'wallet', value: wallet}
    ];

    return (
        <S.Rows>
            {rows.map((row: IRow, index: number) => <S.Row key={index}>
                <span>{row.title}</span>
                <h1>{isLoading ? 'Loading...' : row.value}</h1>
            </S.Row>)}
        </S.Rows>
    );
}