import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style='light' />
    </NavigationContainer>    
  );
};

export default App;