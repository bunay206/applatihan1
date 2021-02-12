import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import ChizuruHishiro from './assets/images/ChizuruHishiro.png';
class Flexing extends Component {
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
          }}>
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
        </View>
        <View
          style={{
            backgroundColor: '#00d8d6',
            flex: 1,
            height: 1280,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
        </View>
        <View
          style={{
            backgroundColor: '#ffdd59',
            flex: 1,
            height: 1280,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
        </View>
        <View
          style={{
            backgroundColor: '#ef5777',
            flex: 1,
            height: 1280,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
          <Flexprofile />
        </View>
      </View>
    );
  }
}

class Flexprofile extends Component {
  render() {
    return (
      <Image
        source={ChizuruHishiro}
        style={{
          width: 80,
          height: 80,
          borderWidth: 3,
          borderRadius: 100,
          borderColor: '#9c88ff',
          marginTop: 5,
          marginBottom: 5,
        }}
      />
    );
  }
}

export default Flexing;
