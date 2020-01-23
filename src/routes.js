import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/pages/Home';
import History from '~/pages/History';
import Settings from '~/pages/Settings';
import DrinkWater from '~/pages/DrinkWater';

const routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      History,
      DrinkWater,
      Settings,
    },
    {
      initialRouteName: 'Home',
    }
  )
);

export default routes;
