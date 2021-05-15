import React from 'react';
import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import colors from '../config/colors';

interface Props {
  style?: StyleProp<ViewStyle>
}

const Screen: React.FC<Props> = ({ children, style }) => (
  <SafeAreaView style={[styles.container, style]}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1
  }
}); 

export default Screen;