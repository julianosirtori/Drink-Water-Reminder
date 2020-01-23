import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Routes />
    </>
  );
}
