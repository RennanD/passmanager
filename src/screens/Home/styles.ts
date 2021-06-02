import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

interface LoginListDataProps {
  id: string;
  title: string;
  email: string;
  password: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #4E3975;
  padding: 0 27px;
`;

export const LoginList = styled(
  FlatList as new () => FlatList<LoginListDataProps>
).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${RFValue(38)}px;
  margin-bottom: ${RFValue(22)}px;
`;

export const EmptyListContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const EmptyListMessage = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Poppins_500Medium';
  color: #9883BF;
`;
