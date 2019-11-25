import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Metrics } from '../../theme';

export default ({ style, round, loading, disabled, title, onPress }) => (
  <TouchableOpacity
    style={{
      width: Metrics.screenWidth * 0.9,
      height: Metrics.ratio(50),
      backgroundColor: disabled ? '#E8E8E8' : '#F7B9A2',
      borderRadius: round ? Metrics.ratio(23) : Metrics.ratio(5),
      // flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
    disabled={loading || disabled}
    onPress={onPress}>
    {loading ? (
      <ActivityIndicator size="large" color="white" />
    ) : (
      <Text
        style={{
          color: 'white',
          fontSize: Metrics.ratio(18),
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    )}
  </TouchableOpacity>
);
