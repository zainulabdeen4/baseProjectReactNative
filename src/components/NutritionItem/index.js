import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Metrics } from '../../theme';
import { Star } from '../../theme/Images';
import ImageLoading from 'react-native-image-progress';

export default ({ style, source, type, name, onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <ImageLoading
      style={{
        width: Metrics.screenWidth * 0.9,
        height: Metrics.screenHeight * 0.38,
        // height: Metrics.ratio(150),
        alignSelf: 'center',
        marginVertical: Metrics.smallMargin,
        ...style,
      }}
      imageStyle={{ borderRadius: Metrics.ratio(12) }}
      source={source}
      // resizeMode="stretch"
    >
      <View
        style={{
          backgroundColor: 'rgba(44, 44, 48,0.4)',
          height: Metrics.ratio(50),
          width: Metrics.screenWidth * 0.9,
          position: 'absolute',
          bottom: 0,
          borderBottomRightRadius: Metrics.ratio(12),
          borderBottomLeftRadius: Metrics.ratio(12),
          paddingHorizontal: Metrics.baseMargin,
          justifyContent: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: Metrics.ratio(10) }}>
          {type}
        </Text>
        <Text
          style={{ color: 'white', fontSize: Metrics.ratio(19) }}
          numberOfLines={1}>
          {name}
        </Text>
      </View>
    </ImageLoading>
  </TouchableOpacity>
);
