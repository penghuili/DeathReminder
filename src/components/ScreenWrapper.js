import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

function ScreenWrapper({ children }) {
  return <SafeAreaView>{children}</SafeAreaView>;
}

export default ScreenWrapper;
