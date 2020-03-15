import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import './config/ReactotronConfig';

import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init('06579a34-7fcc-4d82-88fc-1f7b3cd7b0c2');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = () => {};

  render() {
    return (
      <>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <Routes />
      </>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
