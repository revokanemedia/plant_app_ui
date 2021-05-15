import { ImageSourcePropType } from 'react-native';

export type AppNavigatorProps = {
  Home: undefined,
  PlantDetail: { 
    item: {
      name: string
      location: string
      price: number
      image: ImageSourcePropType
    }
  }
}

export type HomeNavigatorProps = {
  Plants: undefined,
  Favourites: undefined
  Account: undefined
}