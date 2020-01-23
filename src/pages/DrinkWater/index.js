import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import PropTypes from 'prop-types';

import realm from '~/database';

import BottleCircle from '~/assets/images/bottle_circle.png';
import Background from '~/components/Background';

import {
  Container,
  Header,
  TextHeader,
  ActionsHeader,
  ImageWaterBottle,
  ImageHeaderContainer,
  DottedLine,
  Form,
  AmountWater,
  ButtonSave,
  TextButtonSave,
} from './styles';

const radioProps = [
  { label: '100ml', value: 100 },
  { label: '200ml', value: 200 },
  { label: '300ml', value: 300 },
  { label: '400ml', value: 400 },
  { label: '500ml', value: 500 },
];

export default function DrinkWater({ navigation }) {
  const [amountWater, setAmountWater] = useState();

  function onPressRadio(value) {
    setAmountWater(value);
  }

  function toDrink() {
    try {
      realm.write(() => {
        realm.create('Drink', { amount: amountWater, date: new Date() });
      });
    } catch (e) {
      console.tron.log('Error on creation');
    }
  }

  return (
    <Background>
      <Container>
        <Header>
          <ActionsHeader>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={32} color="#ffffff" />
            </TouchableOpacity>
            <TextHeader>Quantidade</TextHeader>
          </ActionsHeader>
          <ImageHeaderContainer>
            <ImageWaterBottle source={BottleCircle} />
            <DottedLine />
          </ImageHeaderContainer>
        </Header>
        <Form>
          <RadioForm animation>
            {radioProps.map((obj, index) => (
              <RadioButton labelHorizontal key={String(index)}>
                <AmountWater>
                  <RadioButtonLabel
                    obj={obj}
                    index={index}
                    labelHorizontal
                    onPress={onPressRadio}
                    labelStyle={{
                      fontSize: 20,
                      color: '#707070',
                      fontWeight: 'bold',
                      width: '90%',
                    }}
                  />
                  <RadioButtonInput
                    obj={obj}
                    index={index}
                    isSelected={amountWater === obj.value}
                    onPress={onPressRadio}
                    borderWidth={1}
                    buttonInnerColor="#2196f3"
                    buttonOuterColor={
                      amountWater === obj.value ? '#ffffff' : '#000'
                    }
                    buttonSize={19}
                    buttonOuterSize={19}
                    buttonWrapStyle={{ marginLeft: 10 }}
                  />
                </AmountWater>
              </RadioButton>
            ))}
          </RadioForm>
          <ButtonSave onPress={toDrink}>
            <TextButtonSave>Beber</TextButtonSave>
          </ButtonSave>
        </Form>
      </Container>
    </Background>
  );
}

DrinkWater.navigationOptions = {
  header: null,
};

DrinkWater.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
