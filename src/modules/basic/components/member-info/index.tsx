import React from 'react';
import * as S from './styles';
import {useFindOneMemberQuery} from '../../api';
import {useAppSelector} from '../../../../common/store';
import Rows from '../../../../common/components/rows';

interface IMemberInfoProps {
    memberId: number;
}

export default function MemberInfo(props: IMemberInfoProps) {
    const {memberId} = props;
    const metamaskWallet = useAppSelector(state => state.basic.metamaskAccount.wallet);
    const {isLoading, data} = useFindOneMemberQuery(memberId);

    const rows = [
        {title: 'name', value: data?.username},
        {title: 'email', value: data?.email},
        {title: 'wallet', value: metamaskWallet}
    ];

    return (
        <S.Container>
            <h1>personal data</h1>
            <Rows isLoading={isLoading} rows={rows}/>
        </S.Container>
    );
}