import styled from 'styled-components/native';

export const Container = styled.View``;

export const Item = styled.View`
  display: flex;
  height: 68px;
  flex-direction: row;
  padding: 16px;
  align-items: center;
  border-bottom-width: 1;
  border-bottom-color: #ffffff;
  background: #20a8fe;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 22px;
`;

export const Righ = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Amount = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;

export const Date = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
`;

export const TouchableDelete = styled.TouchableOpacity`
  background: #ba000d;
  height: 68px;
  width: 72px;
  justify-content: center;
  align-items: center;
`;
