import React from 'react';

import amountMedium from '~/assets/images/amount_medium.png';

import {
  Container,
  Title,
  Week,
  Weekday,
  WeekdayText,
  AmountWater,
} from './styles';

const weekday = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function AmountWeekly() {
  return (
    <Container>
      <Title>SUA SEMANA</Title>
      <Week>
        {weekday.map((item, index) => (
          <Weekday key={index.toString()}>
            <WeekdayText>{item}</WeekdayText>
            <AmountWater source={amountMedium} />
          </Weekday>
        ))}
      </Week>
    </Container>
  );
}
