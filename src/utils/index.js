import _ from 'lodash';
// import moment from "moment";
import { Platform, Share, Linking, Alert, Keyboard } from 'react-native';
// import { MessageBarManager } from "react-native-message-bar";
// import { TIME_ZONE, DAY_DATE_FORMAT, DATE_FORMAT } from "../constants";
import { Metrics } from '../theme';
import * as firebase from 'react-native-firebase';
import { ERROR_SOMETHING_WENT_WRONG } from '../config/WebService';
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

let deviceToken;
let deviceUserId;
class Util {
  isEmpty = value => _.isEmpty(value);
  keyExtractor = (item, index) => index;
  getPlatform = () => Platform.OS;
  isPlatformAndroid = () => Platform.OS === 'android'; //812
  isiPhoneX = () => Metrics.screenHeight == 812;

  keyboardDismiss() {
    return Keyboard.dismiss();
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  setDeviceToken(token: String) {
    deviceToken = token;
  }
  getDeviceToken() {
    return deviceToken;
  }

  onShare = (title, message) => {
    Share.share({
      title,
      message,
    });
  };

  // noInternetMessage = () => {
  //   MessageBarManager.showAlert({
  //     title: "No Internet Connection Found",
  //     message: "Make sure wi-fi or celluar data is turned on",
  //     alertType: "error"
  //   });
  // };

  removeWhiteSpaces(value) {
    return value.replace(/^\s+|\s+$/gm, '');
  }
  lineCounter(value = '') {
    return value.split(/\r\n|\r|\n/).length;
  }
  // getCurrentDayDate() {
  //   return moment(Date.now()).format(DATE_FORMAT);
  // }

  // getCurrentDate() {
  //   return moment(Date.now()).format(DAY_DATE_FORMAT);
  // }

  // getDateFrom(givenDate) {
  //   return moment(givenDate)
  //     .add(TIME_ZONE, "hours")
  //     .fromNow();
  // }
  // displayMessage = (title, message, alertType) => {
  //   MessageBarManager.showAlert({
  //     title,
  //     message,
  //     alertType,
  //     viewTopInset: Metrics.is_iphoneX ? Metrics.ratio(30) : 0
  //   });
  // };

  getLinking(googleUrl) {
    return Linking.canOpenURL(googleUrl).then(supported => {
      if (supported) {
        Linking.openURL(googleUrl);
      }
    });
  }
}

export default new Util();
