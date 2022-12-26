import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AppLoading from '../components/AppLoading';
import AddNotification from '../views/AddNotification';
import ChangeTheme from '../views/ChangeTheme';
import SetupProfile from '../views/SetupProfile';
import UpdateNotification from '../views/UpdateNotification';
import BottomTab from './BottomTab';
import Intros from './Intros';
import { routeNames } from './routeNames';

const NavStack = createNativeStackNavigator();

function Router({ isLoadingProfile, hasFinishedSetup }) {
  if (isLoadingProfile) {
    return <AppLoading />;
  }

  if (!hasFinishedSetup) {
    return <Intros />;
  }

  return (
    <NavStack.Navigator screenOptions={{ headerShown: false }}>
      <NavStack.Screen name="BottomTab" component={BottomTab} />

      <NavStack.Group screenOptions={{ headerShown: false }}>
        <NavStack.Screen name={routeNames.updateProfile} component={SetupProfile} />
        <NavStack.Screen name={routeNames.addNotification} component={AddNotification} />
        <NavStack.Screen name={routeNames.updateNotification} component={UpdateNotification} />
        <NavStack.Screen name={routeNames.changeTheme} component={ChangeTheme} />
      </NavStack.Group>
    </NavStack.Navigator>
  );
}

export default Router;
