/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import MeasureComponent from '../MeasureComponent';

interface MovieCardProps {
  markerName: string;
  count: number;
}

export default function MovieCards({
  markerName,
  count,
}: MovieCardProps): JSX.Element {
  const views = Array.from(Array(count).keys()).map((_, index) => {
    return (
      <View key={index} style={styles.card}>
        <Image style={styles.image} source={require('./movie.png')} />
        <Text style={styles.title}>Balloons Overboard</Text>
        <Text style={styles.description} numberOfLines={5}>
          When a cruise ship's entertainment goes hilariously wrong . . . 
        </Text>
      </View>
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
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
    paddingLeft: 5,
  },
  description: {
    color: '#666',
    paddingLeft: 5,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 5,
    margin: 5,
    width: 170,
    height: 250,
  },
});