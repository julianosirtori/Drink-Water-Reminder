import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffffff;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #3e4146;
`;

export const Week = styled.View`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Weekday = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;

export const WeekdayText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #3e4146;
  margin-bottom: 8px;
`;

export const AmountWater = styled.Image`
  width: 26px;
  height: 51px;
`;
