import React from 'react';
import { Dimensions, GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

import AppText from './AppText';

const width = Dimensions.get('window').width * 0.4;

interface Props {
  name: string
  location: string
  price: number
  image: ImageSourcePropType
  widthChange?: number
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const AppCard: React.FC<Props> = ({ name, location, price, image, widthChange = 1, onPress }) => (
  <TouchableOpacity style={styles.conatiner} onPress={onPress}>
    <Image source={image} style={[styles.image, { width: width * widthChange}]} />
    <View style={styles.detailsContainer}>
      <View style={styles.details}>
        <AppText style={styles.text}>{name}</AppText>
        <AppText style={[styles.text, styles.price]}>${price}</AppText>
      </View>
      <AppText style={[styles.text, styles.location]}>{location}</AppText>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 3,
    margin: 10
  },
  details: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailsContainer: {
    padding: 10
  },
  image: {
    resizeMode: 'stretch',
    height: 160,
    width
  },
  location: {
    color: colors.primary,
    opacity: 0.3
  },
  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    opacity: 0.5
  },
  price: {
    color: colors.primary
  }
});

export default AppCard;