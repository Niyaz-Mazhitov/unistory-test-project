import React from 'react';
import * as S from './styles';
import Rows from '../../../../common/components/rows';
import {useAppDispatch, useAppSelector} from '../../../../common/store';
import Button from '../../../../common/components/button';
import {basicActions} from '../../store';

export default function BetaTestRegistrationInfo() {
    const dispatch = useAppDispatch();
    const {name, email} = useAppSelector(state => state.basic.betaTestRegistrationData);

    const showData = () => dispatch(basicActions.changeShownRegistrationData(true));

    const rows = [{title: 'name', value: name}, {title: 'email', value: email}];

    return (
        <S.InfoContainer>
            <Rows rows={rows}/>
            <div onClick={showData}><Button>List me to the table</Button></div>
        </S.InfoContainer>
    );
}