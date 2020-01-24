import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

import realm from '~/database';

import BottleCircle from '~/assets/images/bottle_circle.png';
import Background from '~/components/Background';

import {
  Container,
  Item,
  Avatar,
  Righ,
  Amount,
  Date,
  TouchableDelete,
} from './styles';

export default function History() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    setDrinks(
      realm
        .objects('Drink')
        .sorted('date', true)
        .map(item => ({
          ...item,
          dateFormated: format(
            item.date,
            "'Dia' dd 'de' MMMM 'de' yyyy - kk':'mm",
            {
              locale: pt,
            }
          ),
        }))
    );
  }, []);

  function deleteDrink(rowData, rowMap) {
    rowMap[rowData.index].closeRow();
    const newDrinks = [...drinks];
    newDrinks.splice(rowData.index, 1);
    setDrinks(newDrinks);
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey('Drink', rowData.item.id));
    });
  }

  return (
    <Background>
      <Container>
        <SwipeListView
          useFlatList
          data={drinks}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => (
            <Item>
              <Avatar source={BottleCircle} />
              <Righ>
                <Amount>{`${item.amount}ml`}</Amount>
                <Date>{item.dateFormated}</Date>
              </Righ>
            </Item>
          )}
          renderHiddenItem={(rowData, rowMap) => (
            <TouchableDelete
              onPress={() => {
                deleteDrink(rowData, rowMap);
              }}
            >
              <Icon name="delete" size={24} color="#FFFFFF" />
            </TouchableDelete>
          )}
          leftOpenValue={75}
        />
      </Container>
    </Background>
  );
}

History.navigationOptions = {
  title: 'Historico',
};
