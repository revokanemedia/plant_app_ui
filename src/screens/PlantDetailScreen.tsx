import React from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import {Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

import Screen from './Screen';
import AppButton from '../components/AppButton';
import AppCarousel from '../components/AppCarousel';
import AppText from '../components/AppText';
import colors from '../config/colors';
import { AppNavigatorProps } from '../navigation/types';

interface Props {
  navigation: StackNavigationProp<AppNavigatorProps, 'PlantDetail'>
  route: RouteProp<AppNavigatorProps, 'PlantDetail'>
}

const PlantDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { name, location, price, image } = route.params.item;
  
  return (
    <Screen>
      <View style={styles.navigation}>
        <Ionicons name='arrow-back-outline' style={styles.navigationIcon} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.header}>
        <View>
          <Ionicons name='sunny-outline' size={25} color={colors.primary} style={styles.icon} />
          <FontAwesome5 name='temperature-high' size={25} color={colors.primary} style={styles.icon} />
          <Ionicons name='water-outline' size={25} color={colors.primary} style={styles.icon} />
          <Feather name='wind' size={25} color={colors.primary} style={styles.icon} />
        </View>
        <AppCarousel style={styles.carousel}>
          <Image source={image} style={styles.image} />
          <Image source={require('../assets/image_4.png')} style={styles.image} />
        </AppCarousel>
      </View>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.price}>${price}</AppText>
        </View>
        <AppText style={styles.location}>{location}</AppText>
      </View>
      <View style={styles.button}>
        <AppButton style={styles.buttonBuyNow} title='Buy Now' onPress={() => alert('Buy Now')} />
        <AppButton outline style={styles.buttonDescription} title='Description' onPress={() => alert('Description')} />
      </View>
      <StatusBar barStyle='dark-content' />
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    bottom: 0,
    flexDirection: 'row',
    marginTop: 20,
    position: 'absolute'
  },
  buttonBuyNow: {
    borderTopRightRadius: 30
  },
  buttonDescription: {
    backgroundColor: colors.light,
  },
  carousel: {
    borderBottomLeftRadius: 60,
    borderTopLeftRadius: 60,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    marginTop: 25,
  },
  contentTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  header: {
    alignItems: 'center',
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: colors.white,
    elevation: 3,
    margin: 30,
    padding: 10
  },
  image: {
    height: '100%',
    width: `${100 / 2}%`
  },
  location: {
    color: colors.primary,
    opacity: 0.3,
    paddingHorizontal: 20
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    position: 'absolute',
    top: 20,
    width: '100%',
    zIndex: 1
  },
  navigationIcon: {
    color: colors.dark,
    fontSize: 30,
    opacity: 0.4
  },
  name: {
    fontSize: 30,
  },
  price: {
    color: colors.primary,
    letterSpacing: 1.5
  }
});

export default PlantDetailScreen;