import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Metrics } from '../../theme';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';
import styles from './styles';
export default ({
  style,
  isVisible,
  hideCalendar,
  onDayPress,
  loading,
  ...props
}) => (
  <Modal
    isVisible={isVisible}
    onBackButtonPress={hideCalendar}
    onBackdropPress={hideCalendar}
    hideModalContentWhileAnimating={true}
    animationOutTiming={500}
    animationInTiming={500}
    backdropTransitionOutTiming={500}>
    <View style={{ height: 'auto' }}>
      {loading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator color="white" size="large" />
        </View>
      ) : (
        <Calendar
          onDayPress={onDayPress}
          style={styles.calendar}
          // minDate={new Date()}
        />
      )}
    </View>
  </Modal>
);
