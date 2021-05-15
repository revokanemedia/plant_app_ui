import React from 'react';
import { Text, TextProps } from 'react-native';

import defaultStyles from '../config/Styles';

const AppText: React.FC<TextProps> = ({ children, style, ...otherProps }) => (
  <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
);

export default AppText;