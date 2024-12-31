/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button(props: {
  onPress: (timestamp: number) => void;
  title: string;
}): JSX.Element {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={event => {
        console.log(event.nativeEvent);
        props.onPress(event.nativeEvent.timestamp);
      }}>
      <Text numberOfLines={2} style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
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
});
