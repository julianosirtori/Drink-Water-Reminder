import React from 'react';

import Modal from 'react-native-modal';

import {
  Container,
  Header,
  TextHeader,
  SubmitButton,
  TextSubmitButton,
  Form,
  InputAmount,
} from './styles';

export default function ModalDrinkWater({ ...rest }) {
  return (
    <Modal {...rest}>
      <Container>
        <Header>
          <TextHeader>BEBA AGUA</TextHeader>
        </Header>
        <Form>
          <InputAmount keyboardType="numeric" placeholder="Quantidade" />
          <SubmitButton>
            <TextSubmitButton>BEBER</TextSubmitButton>
          </SubmitButton>
        </Form>
      </Container>
    </Modal>
  );
}
