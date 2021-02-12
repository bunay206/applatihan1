import React from 'react';
import {View, Text, Image} from 'react-native';
import sanmol from './assets/images/sanmol.jpg';

const Jualansanmol = () => {
  return (
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
      <View
        style={{
          backgroundColor: '#6fcf97',
          paddingVertical: 6,
          borderRadius: 25,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
          }}>
          BELI
        </Text>
      </View>
    </View>
  );
};

export default Jualansanmol;
