import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './styles';
import MediaPicker from '../../services/MediaPicker';
import { connect } from 'react-redux';
import { Metrics } from '../../theme';
import { Plus } from '../../theme/Images';

const AttachIMG = ({
  style,
  placeholder,
  onFocus,
  login,
  on_press,
  loading,
  ...props
}) => (
  <Fragment>
    <View style={[styles.aiHeaderCon, style]}>
      {/* <Text style={styles.headerText}>Attach Image</Text> */}
      <TouchableOpacity
        style={styles.circle}
        onPress={() =>
          MediaPicker.showImagePicker(on_press, login.data.token, loading)
        }>
        <Image source={Plus} resizeMode="contain" style={styles.plus} />
      </TouchableOpacity>
    </View>
  </Fragment>
);
const mapStateToProps = ({ login }) => ({ login });
export default connect(mapStateToProps)(AttachIMG);
