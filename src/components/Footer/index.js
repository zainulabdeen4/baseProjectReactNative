import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Metrics } from '../../theme';
import { Star, Logo } from '../../theme/Images';
import utils from '../../utils';
import { connect } from 'react-redux';
import { StackActions } from 'react-navigation';
const footer = ({ style, source, onPress, title, dispatch }) => (
  <View style={[styles.footer, style]}>
    <TouchableOpacity onPress={() => dispatch(StackActions.popToTop())}>
      <Image source={Logo} style={styles.footerLogo} resizeMode="contain" />
    </TouchableOpacity>
  </View>
);
// const mapStateToProps = ({})
export default connect()(footer);
const styles = StyleSheet.create({
  footerLogo: {
    marginVertical: Metrics.baseMargin,
    // alignSelf: 'center',
    height: Metrics.ratio(80),
    width: Metrics.ratio(80),
  },
  footer: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: 'row', //
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 5,
    borderTopColor: '#E4E5E9',
    borderTopWidth: Metrics.ratio(1),
    backgroundColor: 'white',
    height: Metrics.screenHeight * 0.16,
    position: 'absolute',
    bottom: 0,
    minWidth: Metrics.screenWidth,
    width: '100%',
  },
});
