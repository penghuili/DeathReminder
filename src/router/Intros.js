import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Intro from '../views/Intro';
import SetupProfile from '../views/SetupProfile';
import { routeNames } from './routeNames';

const NavStack = createNativeStackNavigator();

function Intros() {
  return (
    <NavStack.Navigator screenOptions={{ headerShown: false }}>
      <NavStack.Screen name={routeNames.intro} component={Intro} />
      <NavStack.Screen name={routeNames.setupProfile} component={SetupProfile} />
    </NavStack.Navigator>
  );
}

export default Intros;
