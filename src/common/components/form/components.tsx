import React from 'react';
import {WrappedFieldProps} from 'redux-form';
import styled from 'styled-components';

interface IInputProps {
    placeholder?: string;
}

export function Input(props: WrappedFieldProps & IInputProps) {
    const {input, placeholder} = props;

    return <SInput placeholder={placeholder} {...input}/>;
}

const SInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.color.default};
  background-color: rgba(255, 255, 255, 0);
  padding: 8px 16px;
  border-radius: 30px;
  color: #ffffff;
  font-size: 14px;
  font-family: ${props => props.theme.fontFamily.secondary};

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.primary};
  }
`;