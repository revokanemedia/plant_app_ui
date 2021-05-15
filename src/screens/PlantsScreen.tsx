import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Screen from './Screen';
import AppBadge from '../components/AppBadge';
import AppCard from '../components/AppCard';
import AppText from '../components/AppText';
import colors from '../config/colors';
import data from '../config/data';
import { AppNavigatorProps } from '../navigation/types';

interface Props {
  navigation: StackNavigationProp<AppNavigatorProps>
}

const PlantsScreen: React.FC<Props> = ({ navigation }) => {
  const recomendedData = data.slice(0, 3);
  const featuredData = data.slice(3);

  return (
    <Screen>
      <View style={styles.header}>
        <Ionicons name='reorder-two-outline' size={30} color={colors.light} onPress={() => alert('Menu')} />
        <View style={styles.headerConntainer}>
          <AppText style={styles.headerTitle}>Hi Uishopy!</AppText>
          <Image source={require('../assets/icon.png')} style={styles.headerIcon} />
        </View>
        <View style={styles.headerSearchContainer}>
          <TextInput placeholder='Search' style={styles.headerSearch} />
          <Ionicons name='search-outline' size={20} color={colors.medium} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <AppText style={styles.contentTitle}>Recomended</AppText>
          <AppBadge title='More'/>
        </View>
        <FlatList 
          style={{ paddingHorizontal: 10 }}
          horizontal={true}
          data={recomendedData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const { name, location, price, image } = item;
            return (
              <AppCard 
                name={name} 
                location={location} 
                price={price} 
                image={image}
                onPress={() => navigation.navigate('PlantDetail', { item })} 
              />)
          }}
        />
        <View style={styles.content}>
          <AppText style={styles.contentTitle}>Featured Plants</AppText>
          <AppBadge title='More'/>
        </View>
        <FlatList 
          style={{ paddingHorizontal: 10 }}
          horizontal={true}
          data={featuredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const { name, location, price, image } = item;
            return (
              <AppCard 
                name={name} 
                location={location} 
                price={price} 
                image={image} 
                widthChange={1.75} 
                onPress={() => navigation.navigate('PlantDetail', { item })} 
              />
            )
          }}
        />
      </ScrollView>
    </Screen>
  );

};
const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -10,
    marginTop: 30,
    padding: 20
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.7
  },
  header: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 40,
    zIndex: 1
  },
  headerConntainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  headerIcon: {
    height: 60,
    width: 60
  },
  headerSearch: {
    flex: 1
  },
  headerSearchContainer: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    bottom: -25,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
    left: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    width: '100%',
  },
  headerTitle: {
    color: colors.light,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default PlantsScreen;