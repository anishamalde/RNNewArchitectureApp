/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import RTNTimeToRender from 'rtn-timetorender/js/NativeTimeToRender';
import ThousandViews from './scenarios/ThousandsViews';
import ThousandsTexts from './scenarios/ThousandsTexts';
import Button from './Button';
import ThousandsImages from './scenarios/ThousandsImages';
import MovieCards from './scenarios/MovieCards';

enum Scenarios {
  Views5000,
  Text5000,
  Image5000,
  MovieCard1000,
}

function App(): JSX.Element {
  const [scenario, setScenario] = useState<Scenarios | null>(null);
  const uiManager = global?.nativeFabricUIManager
    ? 'Using Fabric'
    : 'Not using Fabric';

  console.log(`${uiManager}`);

  let perfTest = null;
  if (scenario != null) {
    switch (scenario) {
      case Scenarios.Views5000:
        perfTest = <ThousandViews markerName="views5000" count={5000} />;
        break;
      case Scenarios.Text5000:
        perfTest = <ThousandsTexts markerName="texts5000" count={5000} />;
        break;
      case Scenarios.Image5000:
        perfTest = <ThousandsImages markerName="images5000" count={5000} />;
        break;
      case Scenarios.MovieCard1000:
        perfTest = <MovieCards markerName="movies1000" count={1500} />;
        break;
    }
  }
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
        {scenario === null ? (
          <View style={styles.container}>
            <Button
              onPress={timestamp => {
                RTNTimeToRender?.startMarker('views5000', timestamp);
                setScenario(Scenarios.Views5000);
              }}
              title="Render 5000 <View />"
              emoji="👓"
            />
            <Button
              onPress={timestamp => {
                RTNTimeToRender?.startMarker('texts5000', timestamp);
                setScenario(Scenarios.Text5000);
              }}
              title="Render 5000 <Text />"
              emoji="🔤"
            />
            <Button
              onPress={timestamp => {
                RTNTimeToRender?.startMarker('images5000', timestamp);
                setScenario(Scenarios.Image5000);
              }}
              title="Render 5000 <Image />"
              emoji="🎨"
            />
            <Button
              onPress={timestamp => {
                RTNTimeToRender?.startMarker('movies1000', timestamp);
                setScenario(Scenarios.MovieCard1000);
              }}
              title="Render 5000 <MovieCard />"
              emoji="🍿"
            />
          </View>
        ) : null}
        {scenario != null ? (
          <>
            <Button
              onPress={() => {
                setScenario(null);
              }}
              title="Reset"
            />
            {perfTest}
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  scrollcontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
