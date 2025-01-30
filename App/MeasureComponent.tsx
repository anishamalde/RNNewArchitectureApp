/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import RTNTimeToRender from 'rtn-timetorender/js/RTNTimeToRenderNativeComponent';
import {Text, View, StyleSheet} from 'react-native';

export default function MeasureComponent(props: {
  children: React.ReactNode;
  markerName: string;
  title: string;
}): JSX.Element {
  const [renderTime, setRenderTime] = useState<number | null>(null);
  return (
    <>
      {renderTime != null ? (
        <Text style={styles.renderText}>
          Took {renderTime}ms to render {props.title}
        </Text>
      ) : null}
      <View style={styles.renderTextContainer} />
      {props.children}
      <RTNTimeToRender
        markerName={props.markerName}
        onMarkerPainted={event => {
          setRenderTime(Math.round(event.nativeEvent.paintTime));
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  renderTextContainer: {
    margin: 10,
    height: 5,
    width: '100%',
    backgroundColor: 'black',
  },
  renderText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
