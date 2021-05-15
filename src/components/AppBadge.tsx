import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

interface Props {
  title: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const AppBadge: React.FC<Props> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.conatiner} onPress={onPress}>
    <AppText style={styles.text}>{title}</AppText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  text: {
    color: colors.light,
    fontSize: 12,
    fontWeight: 'bold'
  }
});

export default AppBadge;