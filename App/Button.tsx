/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

export default function Button(props: {
  onPress: (timestamp: number) => void;
  title: string;
  emoji?: string;
}): JSX.Element {
  return (
    <Pressable
      style={styles.button}
      onPress={event => {
        props.onPress(event.nativeEvent.timestamp);
      }}>
      <Text style={styles.text}>
        {props.emoji && <Text style={styles.emoji}>{props.emoji} </Text>}
        {props.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: 'grey',
    flex: 1,
    margin: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  emoji:{
    fontSize: 20,
    paddingBottom: 3,
  }
});
