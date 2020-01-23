import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

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

import AmountWeekly from './AmountWeekly';

export default function Home({ navigation }) {
  return (
    <Background>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Icon name="list" size={32} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings-applications" size={32} color="#ffffff" />
        </TouchableOpacity>
      </Header>
      <Container>
        <Info>
          <DateText>Hoje</DateText>
          <GoalText>1L de 2L</GoalText>
        </Info>
        <Image source={Water} />
        <ButtonDrinkWater
          onPress={() => {
            navigation.navigate('DrinkWater');
          }}
        >
          <TextButtonDrinkWater>Beber Agua</TextButtonDrinkWater>
        </ButtonDrinkWater>
      </Container>
      <AmountWeekly />
    </Background>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Home.navigationOptions = {
  header: null,
};
