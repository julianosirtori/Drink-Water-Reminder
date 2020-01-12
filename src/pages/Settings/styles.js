import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Card = styled.View`
  border-radius: 4px;
  background: #ffffff;
  padding: 8px;
`;

export const Input = styled.TextInput`
  border: 1px solid #eeeeee;
  background: #ffffff;
  border-radius: 4px;
  padding: 4px 8px;
  margin-bottom: 8px;
`;

export const ContainerCheckBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  margin-top: 8px;
`;

export const SaveButton = styled(RectButton).attrs({
  elevation: 10,
})`
  width: 100%;
  height: 45px;
  background: #0f8ffa;
  border-radius: 4px;
  margin-top: 8px;
`;

export const TextSaveButton = styled.Text`
  color: #ffffff;
  margin: auto;
  font-size: 16px;
  font-weight: bold;
`;
