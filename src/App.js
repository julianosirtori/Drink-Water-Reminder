import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#20A8FE" barStyle="light-content" />
      <Routes />
    </>
  );
}
