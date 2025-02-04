/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Button(props: {
  onPress: (timestamp: number) => void;
  title: string;
  emoji?: string;
}): JSX.Element {

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <TouchableOpacity
      style={[styles.button, isFocused && styles.focusedButton]}
      onPress={event => {
        props.onPress(event.nativeEvent.timestamp);
      }}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => setIsFocused(false)}>
      <Text style={styles.text}>
        {props.emoji && <Text style={styles.emoji}>{props.emoji} </Text>}
        {props.title}
      </Text>
    </TouchableOpacity>
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
  focusedButton: {
    borderWidth: 5,
    borderColor: 'yellow',
  },
  emoji: {
    fontSize: 20,
    paddingBottom: 3,
  }
});
