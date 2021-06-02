import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: #FFFFFF;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: ${RFValue(90)}px;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 18px;
`;

export const LoginData = styled.View``;

export const Password = styled.Text`
  font-size: ${(RFValue(26))}px;
  font-family: 'Poppins_500Medium';
  color: #9883BF;

  margin: 0 auto;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-family: 'Poppins_500Medium';
  font-size: ${RFValue(12)}px;
  color: #4E3975;
`;

export const Email = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: ${RFValue(12)}px;
  color: #9883BF;
`;

export const ShowPasswordButton = styled.TouchableOpacity``;

export const Icon = styled(Feather).attrs({
  size: 24,
  color: '#4E3975'
})``;
