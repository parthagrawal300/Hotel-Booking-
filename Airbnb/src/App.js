import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator';
import NavigationService from './navigation/NavigationServicies';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer
      // ref={(navigatorRef) => {
      //   NavigationService.setTopLevelNavigator(navigatorRef);
      // }}
      >
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
