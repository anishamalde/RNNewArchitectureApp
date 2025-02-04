/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TVFocusGuideView,
} from 'react-native';
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
  MovieCard1500,
}

function App(): JSX.Element {
  const [scenario, setScenario] = useState<Scenarios | null>(null);
  const uiManager = global?.nativeFabricUIManager
    ? 'New Architecture'
    : 'Old Architecture';

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
      case Scenarios.MovieCard1500:
        perfTest = <MovieCards markerName="movies1500" count={1500} />;
        break;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
        {scenario === null ? (
          <>
            <Text style={styles.text}>{uiManager}</Text>
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
                RTNTimeToRender?.startMarker('movies1500', timestamp);
                setScenario(Scenarios.MovieCard1500);
              }}
              title="Render 1500 <MovieCard />"
              emoji="🍿"
            />
          </>
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
  container: {
    backgroundColor: '#3b3b3b',
    height: '100%'
  },
  text: {
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',
    color: 'white'
  }
});
