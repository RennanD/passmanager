import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Input,
  Icon
} from './styles';

export function SearchBar(props: TextInputProps) {
  const theme = useTheme();

  return (
    <Container>
      <Input
        {...props}
        placeholderTextColor='#9883BF'
      />
      <Icon name="search" />
    </Container>
  )
}