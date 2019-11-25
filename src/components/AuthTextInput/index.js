import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Metrics } from '../../theme';
import styles from './styles';
export default ({
  style,
  placeholder,
  onChangeText,
  onFocus,
  keyboardType,
  secureTextEntry,
  defaultValue,
  returnKeyType,
  returnKeyLabel,
  inputRef,
  value,
  ...props
}) => (
  <TextInput
    onFocus={onFocus}
    style={[styles.input, style]}
    value={value}
    ref={inputRef}
    placeholder={placeholder}
    placeholderTextColor="grey"
    keyboardType={keyboardType}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    defaultValue={defaultValue}
    returnKeyLabel={returnKeyLabel || 'next'}
    returnKeyType={returnKeyType || 'next'}
    {...props}
  />
);
