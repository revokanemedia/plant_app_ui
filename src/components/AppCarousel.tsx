import React, { useState } from 'react'
import { View, ScrollView, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'

import colors from '../config/colors';
interface Props {
  bulletColor?: string
  itemsPerInterval?: number
  style?: StyleProp<ViewStyle>
}

export const AppCarousel: React.FC<Props> = ({ children, style, bulletColor = colors.dark, itemsPerInterval = 1 }) => {
  const totalItems = (children as []).length;
  const [interval, setInterval] = useState<number | undefined>(1);
  const [intervals, setIntervals] = useState<number>(1);
  const [width, setWidth] = useState<number>(0);

  const init = (width: number) => {
    setWidth(width);
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  }

  const getInterval = (offset: number) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset+1 < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  }

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          color: bulletColor,
          opacity: interval === i ? 0.5 : 0.1
        }}
      >
        &bull;
      </Text>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {children}
      </ScrollView>
      <View style={styles.bullets}>
        {bullets}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    top: 30,
    right: 15,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 30,
  }
});

export default AppCarousel;