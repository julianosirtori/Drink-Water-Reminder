import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
`;

export const Item = styled.View`
  display: flex;
  height: 56px;
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1;
  border-bottom-color: #ffffff;
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
