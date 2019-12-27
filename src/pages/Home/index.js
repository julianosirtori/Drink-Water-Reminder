import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Water from '~/assets/images/water.png';

import {
  Container,
  Header,
  Info,
  DateText,
  GoalText,
  Image,
  ButtonDrinkWater,
  TextButtonDrinkWater,
} from './styles';

export default function Home() {
  return (
    <Background>
      <Container>
        <Header>
          <TouchableOpacity>
            <Icon name="info" size={32} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="settings-applications" size={32} color="#ffffff" />
          </TouchableOpacity>
        </Header>
        <Info>
          <DateText>Hoje</DateText>
          <GoalText>1L de 2L</GoalText>
        </Info>
        <Image source={Water} />
        <ButtonDrinkWater>
          <TextButtonDrinkWater>Beber Agua</TextButtonDrinkWater>
        </ButtonDrinkWater>
      </Container>
    </Background>
  );
}

Home.navigationOptions = {
  header: null,
};
