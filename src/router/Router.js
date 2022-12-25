import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Intro from '../views/Intro';
import BottomTab from './BottomTab';
import { routeNames } from './routeNames';

const NavStack = createNativeStackNavigator();

function Router() {
  return (
    <NavStack.Navigator screenOptions={{ headerShown: false }}>
      <NavStack.Screen name="BottomTab" component={BottomTab} />

      <NavStack.Group screenOptions={{ headerShown: false }}>
        <NavStack.Screen name={routeNames.intro} component={Intro} />
      </NavStack.Group>
    </NavStack.Navigator>
  );
}

export default Router;
