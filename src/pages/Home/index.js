import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { addDays } from 'date-fns';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import realm from '~/database';

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

function Home({ navigation, isFocused }) {
  const [dailytargetLiters, setDailyTargetLiters] = useState(0);
  const [dailyAmountLiters, setDailyAmountLiters] = useState(0);

  async function loadSettings() {
    const storage = await AsyncStorage.getItem('settings');

    const settingsSaved = JSON.parse(storage);
    if (settingsSaved !== null) {
      setDailyTargetLiters(settingsSaved.dailytargetLiters);
    }
  }

  async function loadAmountLiters() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    setDailyAmountLiters(
      realm
        .objects('Drink')
        .filtered('date >= $0 && date < $1', today, addDays(today, 1))
        .sum('amount') / 1000
    );
  }

  useEffect(() => {
    loadSettings();
    loadAmountLiters();
  }, []);

  useEffect(() => {
    if (isFocused) {
      loadSettings();
      loadAmountLiters();
    }
  }, [isFocused]);

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
          <GoalText>{`${dailyAmountLiters}L de ${dailytargetLiters}L`}</GoalText>
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
    </Background>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isFocused: PropTypes.bool,
};

Home.navigationOptions = {
  header: null,
};

export default withNavigationFocus(Home);
