/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import sanmol from './assets/images/sanmol.jpg';

const App = () => {
  return (
    <ScrollView>
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
        }}>
        <Image
          source={sanmol}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Sanmol 50mg</Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 12,
          }}>
          Rp. 10.000
        </Text>
      </View>
    </ScrollView>
  );
};

const Contohcontoh = () => {
  return (
    <View style={{width: 450, height: 1280, backgroundColor: '#6ab04c'}}>
      <Text>Skidipapak1</Text>
      <TextInput />
      <Text>Skidipapak5</Text>
      <Text>Skidipapak8</Text>
      <Bagaga />
      <TextInput
        style={{
          width: 200,
          borderWidth: 5,
          marginTop: 50,
          marginBottom: 50,
          marginLeft: 25,
          marginRight: 25,
          borderColor: '#7ed6df',
        }}>
        auw
      </TextInput>
      <KomKlas />
      <PotoKlas1 />
      <PotoKlas2 />
      <PotoKlas3 />
    </View>
  );
};
const Bagaga = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/1000/800/nature'}}
      style={{width: 150, height: 150}}
    />
  );
};

class KomKlas extends Component {
  render() {
    return <Text style={styles.Text}>Class Component</Text>;
  }
}

class PotoKlas1 extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/500/500/arch'}}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: '#ffcccc',
          }}
        />
      </View>
    );
  }
}

class PotoKlas2 extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/640/480/arch'}}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: '#57606f',
            marginLeft: 150,
          }}
        />
      </View>
    );
  }
}

class PotoKlas3 extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/500/500/nature'}}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: '#7bed9f',
            marginLeft: 75,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff3838',
  },
});
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
