import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { PlantsScreen, TempScreen } from '../screens';
import colors from '../config/colors';
import { StyleSheet } from 'react-native';
import { HomeNavigatorProps } from './types';

const Tab = createBottomTabNavigator<HomeNavigatorProps>();

const HomeNavigator = () => (
  <Tab.Navigator initialRouteName='Plants' screenOptions={{ tabBarLabel: '' }} tabBarOptions={{
    activeTintColor: colors.primary,
    inactiveTintColor: colors.medium
  }}>
    <Tab.Screen name='Plants' component={PlantsScreen} options={{
      tabBarIcon: ({ size, color }) => <Ionicons 
        name='leaf' 
        color={color}
        size={size}
        style={styles.icon} 
      />,
    }} />
    <Tab.Screen name='Favourites' component={TempScreen} options={{
      tabBarIcon: ({ size, color }) => <Ionicons 
        name='heart' 
        color={color}
        size={size}
        style={styles.icon} 
      />,
    }} />
    <Tab.Screen name='Account' component={TempScreen} options={{
      tabBarIcon: ({ size, color }) => <Ionicons 
        name='person' 
        color={color}
        size={size}
        style={styles.icon} 
      />,
    }} />    
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  icon: {
    marginTop: 12
  }
});

export default HomeNavigator;