import React from 'react';
import * as S from './styles';
import Form, {IBetaTestRegistrationFormData} from './form';
import {useAppDispatch, useAppSelector} from '../../../../common/store';
import {basicActions} from '../../store';
import BetaTestRegistrationInfo from './info';

export default function BetaTestRegistration() {
    const dispatch = useAppDispatch();
    const {name} = useAppSelector(state => state.basic.betaTestRegistrationData);

    const onSubmit = (formData: IBetaTestRegistrationFormData) => {
        dispatch(basicActions.setBetaTestRegistrationData(formData));
    };

    return (
        <S.Container>
            <S.Title>
                Beta test registration
            </S.Title>
            <S.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </S.Description>
            {name ? <BetaTestRegistrationInfo/> : <Form onSubmit={onSubmit}/>}
        </S.Container>
    );
}