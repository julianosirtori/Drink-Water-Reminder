import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/pages/Home';
import About from '~/pages/About';
import Settings from '~/pages/Settings';

const routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      About,
      Settings,
    },
    {
      initialRouteName: 'Home',
    }
  )
);

export default routes;
