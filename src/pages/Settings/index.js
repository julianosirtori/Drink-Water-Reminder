import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';

import Background from '~/components/Background';

import {
  Container,
  Card,
  Input,
  ContainerCheckBox,
  Label,
  SaveButton,
  TextSaveButton,
} from './styles';

export default function Settings() {
  const [dailytargetLiters, setDailyTargetLiters] = useState(2);
  const [showNotification, setShowNotification] = useState(false);
  const [intervalNotification, setIntervalNotification] = useState(1);

  useEffect(() => {
    async function loadSettings() {
      const storage = await AsyncStorage.getItem('settings');

      const settingsSaved = JSON.parse(storage);
      if (settingsSaved !== null) {
        setIntervalNotification(settingsSaved.intervalNotification);
        setShowNotification(settingsSaved.showNotification);
        setDailyTargetLiters(settingsSaved.dailytargetLiters);
      }
    }
    loadSettings();
  }, []);

  async function saveSeetings() {
    await AsyncStorage.setItem(
      'settings',
      JSON.stringify({
        dailytargetLiters,
        showNotification,
        intervalNotification,
      })
    );
    Alert.alert('Atenção!', 'Nova Configuração Salva');
  }

  return (
    <Background>
      <Container>
        <Card>
          <Label>Meta Diaria de Litros:</Label>
          <Input
            placeholder="Meta Diaria em Litros"
            keyboardType="numeric"
            value={String(dailytargetLiters)}
            onChangeText={value => {
              setDailyTargetLiters(value);
            }}
          />
          <ContainerCheckBox>
            <Label>Exibir Notificações</Label>
            <CheckBox
              value={showNotification}
              onChange={() => setShowNotification(!showNotification)}
            />
          </ContainerCheckBox>

          <Label>Intervalo das Notificações em horas:</Label>
          <Input
            placeholder="Intervalo das Notificações em horas"
            keyboardType="numeric"
            value={String(intervalNotification)}
            onChangeText={value => {
              setIntervalNotification(value);
            }}
          />
          <SaveButton onPress={saveSeetings}>
            <TextSaveButton>SALVAR</TextSaveButton>
          </SaveButton>
        </Card>
      </Container>
    </Background>
  );
}

Settings.navigationOptions = {
  title: 'Configurações',
};
