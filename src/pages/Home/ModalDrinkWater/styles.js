import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  max-height: 190px;
  height: 100%;
  max-width: 320px;
  width: 100%;
  border-radius: 4px;
  background: #ffffff;
`;

export const Header = styled.View`
  background: #20a8fe;
  height: 45px;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;

export const Form = styled.View`
  background: #e6e6e6;
  flex: 1;
  padding: 16px;
`;

export const InputAmount = styled.TextInput`
  border-radius: 4px;
  background: #ffffff;
  margin-bottom: 8px;
  text-align: center;
`;

export const SubmitButton = styled(RectButton)`
  width: 100%;
  height: 45px;
  background: #0f8ffa;
  border-radius: 4px;
  margin-top: 8px;
`;

export const TextSubmitButton = styled.Text`
  color: #ffffff;
  margin: auto;
  font-size: 16px;
  font-weight: bold;
`;
