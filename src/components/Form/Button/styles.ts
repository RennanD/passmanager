import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  background-color: #FECBB2;

  padding: 15px 0;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;
export const ButtonText = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: ${RFValue(14)}px;

  color: #4E3975;
`;