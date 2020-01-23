import React from 'react';
import { FlatList } from 'react-native';

import BottleCircle from '~/assets/images/bottle_circle.png';
import Background from '~/components/Background';

import { Container, Item, Avatar, Righ, Line, Amount, Date } from './styles';

export default function History() {
  const dranks = [
    { amount: 100, date: 'Dia 12 de Janeiro de 2020 - 12:00' },
    { amount: 250, date: 'Dia 12 de Janeiro de 2020 - 12:00' },
    { amount: 500, date: 'Dia 12 de Janeiro de 2020 - 12:00' },
    { amount: 150, date: 'Dia 12 de Janeiro de 2020 - 12:00' },
    { amount: 100, date: 'Dia 12 de Janeiro de 2020 - 12:00' },
    { amount: 500, date: 'Dia 12 de Janeiro de 2020 - 12:00' },
    { amount: 120, date: 'Dia 12 de Janeiro de 2020 - 12:00' },
    { amount: 100, date: 'Dia 12 de Janeiro de 2020 - 12:00' },
    { amount: 500, date: 'Dia 12 de Janeiro de 2020 - 12:00' },
  ];

  return (
    <Background>
      <Container>
        <FlatList
          keyExtractor={(_, index) => String(index)}
          data={dranks}
          renderItem={({ item }) => (
            <Item>
              <Avatar source={BottleCircle} />
              <Righ>
                <Amount>{`${item.amount}ml`}</Amount>
                <Date>{item.date}</Date>
              </Righ>
            </Item>
          )}
        />
      </Container>
    </Background>
  );
}

History.navigationOptions = {
  title: 'Historico',
};
