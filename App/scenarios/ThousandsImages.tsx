/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MeasureComponent from '../MeasureComponent';


interface ThousandsImagesProps {
  markerName: string;
  count: number;
}

export default function ThousandsImages({
  markerName,
  count,
}: ThousandsImagesProps): JSX.Element {
  const views = Array.from(Array(count).keys()).map((_, index) => {
    return (
      <Image
        key={index}
        style={styles.stretch}
        source={require('./movie.png')}
      />
    );
  });

  return (
    <MeasureComponent title={`${count} <Image />`} markerName={markerName}>
      <View style={styles.container}>{views}</View>
    </MeasureComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stretch: {
    width: 150,
    height: 150,
    margin: 5,
  },
});
