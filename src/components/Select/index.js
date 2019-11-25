import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import styles from './styles';
import { Metrics } from '../../theme';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from '../../theme/Images';
export default ({
  items,
  onValueChange,
  style,
  placeholder,
  placeholderTextColor,
  disabled,
  value,
  ...props
}) => (
  <RNPickerSelect
    disabled={disabled}
    items={disabled ? [] : items}
    useNativeAndroidPickerStyle={false}
    style={{
      inputIOSContainer: [styles.slectCat, style],
      inputAndroidContainer: [styles.slectCat, style],
      modalViewBottom: { backgroundColor: 'white' },
      done: { color: 'white' },
      modalViewMiddle: { backgroundColor: '#F7B9A2' },
      chevronContainer: { opacity: 0, width: 0, overflow: 'hidden' },
    }}
    value={value}
    pickerProps={styles.pickerProps}
    // hideDoneBar
    placeholder={{
      label: placeholder,
      value: null,
      key: placeholder,
      color: 'grey',
    }}
    placeholderTextColor={placeholderTextColor || 'black'}
    onValueChange={onValueChange}
    Icon={() => (
      <Image source={Dropdown} style={styles.img} resizeMode="contain" />
    )}
  />
);

// <ModalFilterPicker
//   visible={true}
//   onSelect={picked =>null
//     // this.setState({
//     //   picked: picked,
//     //   // visible: false,
//     // })
//   }
//   onCancel={()=>null}
//   onCancel={this.onCancel}
//   options={[
//     {
//       key: 'kenya',
//       label: 'Kenya',
//     },
//     {
//       key: 'uganda',
//       label: 'Uganda',
//     },
//     {
//       key: 'libya',
//       label: 'Libya',
//     },
//     {
//       key: 'morocco',
//       label: 'Morocco',
//     },
//     {
//       key: 'estonia',
//       label: 'Estonia',
//     },
//   ]}
// />
