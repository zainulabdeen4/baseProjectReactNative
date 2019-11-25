import React, { Component } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Metrics } from '../../theme';
export default ({
  children,
  isVisible,
  hideModal,
  style,
  animationIn,
  animationOut,
  ...rest
}) => (
  <Modal
    animationIn={animationIn}
    animationOut={animationOut}
    style={{
      width: Metrics.screenWidth * 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Metrics.ratio(5),
      ...style,
    }}
    isVisible={isVisible}
    onBackButtonPress={hideModal}
    onBackdropPress={hideModal}
    hideModalContentWhileAnimating={true}
    animationOutTiming={500}
    animationInTiming={500}
    backdropTransitionOutTiming={500}
    {...rest}>
    {children}
  </Modal>
);
