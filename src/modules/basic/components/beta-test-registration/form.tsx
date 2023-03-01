import React from 'react';
import * as S from './styles';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, required} from '../../../../common/form';
import Button from '../../../../common/components/button';

export interface IBetaTestRegistrationFormData {
    name: string;
    email: string;
}

function Form(props: InjectedFormProps<IBetaTestRegistrationFormData>) {
    const {handleSubmit, invalid} = props;

    const field = {validate: required, component: Input};

    const namePlaceholder = 'We will display your name in participation list';
    const emailPlaceholder = 'We will display your email in participation list ';

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Field>
                <span>name</span>
                <Field name='name' placeholder={namePlaceholder} {...field}/>
            </S.Field>
            <S.Field>
                <span>email</span>
                <Field name='email' placeholder={emailPlaceholder} {...field}/>
            </S.Field>
           <div>
               <Button disabled={invalid} type='submit'>Get early access</Button>
           </div>
        </S.Form>
    );
}

export default reduxForm<IBetaTestRegistrationFormData>({form: 'da'})(Form);