import React from 'react';
import { GestureResponderEvent, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

interface Props {
  title: string
  outline?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const AppButton: React.FC<Props> = ({ title, outline = false, style, onPress }) => {
  const outlineStyle = outline ? {
    color: colors.dark,
    opacity: 0.5
  } : undefined;

  return (
    <TouchableOpacity style={[styles.conatiner, style]} onPress={onPress}>
      <AppText style={[styles.text, outlineStyle]}>{title}</AppText>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  conatiner: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },
  text: {
    color: colors.light,
    fontSize: 20
  }
});

export default AppButton;