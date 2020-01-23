import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const TextHeader = styled.Text`
  font-size: 24px;
  color: #ffffff;
  margin-left: 32px;
`;

export const ActionsHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ImageHeaderContainer = styled.View`
  height: 124px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageWaterBottle = styled.Image`
  height: 124px;
  width: 132px;
  z-index: 1;
`;

export const DottedLine = styled.View`
  position: absolute;
  top: 62px;
  z-index: 0;
  border-radius: 1;
  border: 1px dashed #ffffff;
  width: 100%;
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding-left: 16px;
  padding-right: 16px;
  flex: 1px;
`;
export const AmountWater = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom-color: #707070;
  border-bottom-width: 1px;
`;

export const ButtonSave = styled(RectButton).attrs({
  elevation: 10,
})`
  width: 100%;
  height: 42px;
  background: #c7e8fc;
  border-radius: 32px;
  margin-top: 32px;
  box-shadow: 10px 10px 10px #00000029;
`;

export const TextButtonSave = styled.Text`
  margin: auto;
  font-size: 20px;
  font-weight: bold;
  color: #3e4146;
`;
