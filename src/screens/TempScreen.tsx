import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Screen from './Screen';

const TempScreen: React.FC = () => {
  return (
    <Screen style={styles.container}>
      <Text>TempScreen</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default TempScreen;