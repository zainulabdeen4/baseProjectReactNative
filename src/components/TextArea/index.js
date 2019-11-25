import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Metrics } from '../../theme';
export default ({ style, placeholder, ...props }) => (
  <TextInput
    style={{
      backgroundColor: 'white',
      width: '100%',
      height: Metrics.ratio(120),
      borderWidth: Metrics.ratio(1),
      borderColor: 'black',
      marginTop: Metrics.smallMargin,
      marginBottom: Metrics.baseMargin,
      textAlignVertical: 'top',
      paddingHorizontal: Metrics.ratio(10),
      ...style,
    }}
    multiline={true}
    placeholder={placeholder}
    {...props}
  />
);
