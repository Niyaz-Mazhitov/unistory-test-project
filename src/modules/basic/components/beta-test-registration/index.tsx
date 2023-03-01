import React from 'react';
import * as S from './styles';
import Form, {IBetaTestRegistrationFormData} from './form';

export default function BetaTestRegistration() {

    const onSubmit = (formData: IBetaTestRegistrationFormData) => console.log(formData);

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
            <Form onSubmit={onSubmit}/>
        </S.Container>
    );
}