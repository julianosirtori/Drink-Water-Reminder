import React from 'react';
import Background from '~/components/Background';

import {
  Container,
  Card,
  Input,
  ContainerCheckBox,
  LabelCheckBox,
  InputCheckBox,
  SaveButton,
  TextSaveButton,
} from './styles';

export default function Settings() {
  return (
    <Background>
      <Container>
        <Card>
          <Input placeholder="Meta Diaria em Litros" keyboardType="numeric" />
          <ContainerCheckBox>
            <LabelCheckBox>Exibir Notificações</LabelCheckBox>
            <InputCheckBox />
          </ContainerCheckBox>

          <Input
            placeholder="Intervalo das Notificações em horas"
            keyboardType="numeric"
          />
          <SaveButton>
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
