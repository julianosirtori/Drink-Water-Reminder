import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
`;
export const Info = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 22px;
  color: #ffffff;
`;

export const GoalText = styled.Text`
  font-size: 28px;
  font-style: italic;
  color: #ffffff;
  font-weight: bold;
`;

export const Image = styled.Image`
  height: 208px;
  width: 91px;
  margin: 34px auto;
`;

export const ButtonDrinkWater = styled(RectButton).attrs({
  elevation: 10,
})`
  width: 100%;
  height: 64px;
  background: #c7e8fc;
  border-radius: 32px;
  box-shadow: 10px 10px 10px #00000029;
`;

export const TextButtonDrinkWater = styled.Text`
  margin: auto;
  font-size: 24px;
  font-weight: bold;
  color: #3e4146;
`;
