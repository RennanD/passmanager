import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import {
  Container,
  Label,
  Error,
  FormInput
} from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  title: string;
  error: string;
}

export function Input({
  name,
  control,
  title,
  error,
  ...rest
}: Props) {
  return (
    <Container>
      <Label>{title}</Label>
      {error && <Error>{error}</Error>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormInput
            {...rest}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
    </Container>
  )
}