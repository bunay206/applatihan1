import React, {Component} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

const Contohcontoh = () => {
  return (
    <View
      style={{
        width: 450,
        height: 1280,
        backgroundColor: '#6ab04c',
        marginTop: 20,
      }}>
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

export default Contohcontoh;
