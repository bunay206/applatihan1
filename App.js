/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={{width: 100, height: 100, backgroundColor: '#6ab04c'}}>
      <Text>Skidipapak</Text>
      <Text>Skidipapak</Text>
      <Text>Skidipapak</Text>
      <Text>Skidipapak</Text>
      <Text>Skidipapak</Text>

      <Bagaga />
    </View>
  );
};

const Bagaga = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/1000/800/nature'}}
      style={{width: 300, height: 300}}
    />
  );
};

//const styles = StyleSheet.create({
//  },
/*
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },*/
//});

export default App;
