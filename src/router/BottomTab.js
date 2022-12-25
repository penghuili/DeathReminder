import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '../components/Icon';
import { useColors } from '../hooks/useColors';
import { useIsDark } from '../hooks/useIsDark';
import { bottomTabbarHeight } from '../lib/constants';
import Home from '../views/Home';
import Settings from '../views/Settings';
import { routeNames } from './routeNames';

const Tab = createBottomTabNavigator();

function BottomTab() {
  const { textDark, textLight, bgLight, bgDark, primary } = useColors();
  const isDark = useIsDark();
  const { bottom } = useSafeAreaInsets();

  function getIconName(routeName, focused) {
    if (routeName === routeNames.home) {
      return focused ? 'home' : 'home-outline';
    } else if (routeName === routeNames.settings) {
      return focused ? 'cog' : 'cog-outline';
    } else {
      return null;
    }
  }

  function getIcon(focused, color, routeName) {
    return <Icon name={getIconName(routeName, focused)} color={color} />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => getIcon(focused, color, route.name),
        tabBarLabel: () => null,
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: isDark ? textDark : textLight,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingBottom: bottom,
          height: bottomTabbarHeight + bottom,
          backgroundColor: isDark ? bgDark : bgLight,
        },
      })}
    >
      <Tab.Screen name={routeNames.home} component={Home} />
      <Tab.Screen name={routeNames.settings} component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomTab;
