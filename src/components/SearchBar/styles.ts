import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { TextInput } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;

  background-color: #FFFFFF;
  padding: 12px 16px;
  margin-top: ${RFValue(54)}px;
  border-radius: 10px;

  align-items: center;
  justify-content: space-between;
`;

export const Input = styled(TextInput)`
  font-size: ${(RFValue(12))}px;
  color: #4E3975;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
  color: '#9883BF'
})``;

