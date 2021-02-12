import React, {Component} from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import ChizuruHishiro from './assets/images/ChizuruHishiro.png';
class FlexAdv extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#808e9b',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#0be881',
            flex: 1,
            height: 1280,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <View
          style={{
            backgroundColor: '#00d8d6',
            flex: 1,
            height: 1280,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <View
          style={{
            backgroundColor: '#ffdd59',
            flex: 1,
            height: 1280,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <View
          style={{
            backgroundColor: '#ef5777',
            flex: 1,
            height: 1280,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
            <Flexprofile />
            <Flexprofile2 />
          </View>
        </View>
      </View>
    );
  }
}

class Flexprofile extends Component {
  render() {
    return <Image source={ChizuruHishiro} style={styles.chizuru1} />;
  }
}

class Flexprofile2 extends Component {
  render() {
    return (
      <Image
        source={ChizuruHishiro}
        style={{
          width: 40,
          height: 40,
          borderWidth: 3,
          borderRadius: 100,
          borderColor: '#9c88ff',
          left: 50,
          top: -50,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  chizuru1: {
    width: 150,
    height: 150,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#9c88ff',
    alignItems: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
});
export default FlexAdv;
