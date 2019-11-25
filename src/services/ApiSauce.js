// import base64 from "base-64";
import { Alert } from 'react-native';
import { create } from 'apisauce';
import React, { Component } from 'react';

import Utils from '../utils';
import {
  API_LOG,
  BASE_URL,
  API_TIMEOUT,
  API_PASSWORD,
  API_USER_NAME,
  ERROR_CLIENT,
  ERROR_REQUEST_CANCEL,
  ERROR_REQUEST_TIMEOUT,
  ERROR_SERVER_CONNECTION,
  ERROR_SOMETHING_WENT_WRONG,
  ERROR_NETWORK_NOT_AVAILABLE,
  ERROR_401,
} from '@config/WebService';
import { logout } from '../actions/login';
import { connect } from 'react-redux';
import { StackActions } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

const api = create({
  baseURL: BASE_URL,
  headers: {
    // Authorization: `Basic ${base64.encode(`${API_USER_NAME}:${API_PASSWORD}`)}`
  },
  timeout: API_TIMEOUT,
});

class ApiSauce extends Component {
  post = async (url, data, headers) => {
    const mobileJson = { mobile_json: 1, ...data };
    console.log(data, '4');
    const response = await api.post(url, mobileJson, {
      headers,
    });
    console.log('5');
    if (__DEV__ && API_LOG) {
      console.log(response);
    }
    return new Promise((resolve, reject) => {
      if (response.ok && response.data && !response.data.error) {
        resolve(response.data);
      } else {
        let error = ERROR_SOMETHING_WENT_WRONG;

        switch (response.problem) {
          case 'CLIENT_ERROR':
            error = ERROR_CLIENT;
            break;
          case 'TIMEOUT_ERROR':
            error = ERROR_REQUEST_TIMEOUT;
            break;
          case 'CONNECTION_ERROR':
            error = ERROR_SERVER_CONNECTION;
            break;
          case 'NETWORK_ERROR':
            error = ERROR_NETWORK_NOT_AVAILABLE;

            // Utils.noInternetMessage();

            break;
          case 'CANCEL_ERROR':
            error = ERROR_REQUEST_CANCEL;
            break;
          default:
            // "SERVER_ERROR":
            error = { status: response.status, ...ERROR_SOMETHING_WENT_WRONG };
        }

        // if (response.status !== 200) {
        //   Alert.alert(error.title, error.message, [{ text: "OK" }]);
        // }
        if (response.status === 401) {
          reject(ERROR_401);
          // Alert.alert('401', '401', [{ text: 'OK' }]);
          // this.props.navigation.dispatch(StackActions.popToTop());
          // logout();
          // NavigationActions.back();
        }
        if (response.status === 500) {
          reject(ERROR_SOMETHING_WENT_WRONG);
        }
        reject(response.data || error);
      }
    });
  };

  async get(url, data, headers) {
    const mobileJson = { mobile_json: 1, ...data };
    const response = await api.get(url, mobileJson, { headers });

    if (__DEV__ && API_LOG) {
      console.log(response);
    }
    return new Promise((resolve, reject) => {
      if (response.ok && response.data && !response.data.error) {
        resolve(response.data);
      } else {
        if (response.status === 500) {
          reject(ERROR_SOMETHING_WENT_WRONG);
        }
        if (response.status === 401) {
          // reject(ERROR_SOMETHING_WENT_WRONG);
          reject(ERROR_401);
          // Alert.alert('401', '401', [{ text: 'OK' }]);
          // this.props.navigation.dispatch(StackActions.popToTop());
        }
        reject(response.data || ERROR_SOMETHING_WENT_WRONG);
      }
    });
  }
  async postImage(url, data) {
    const response = await api.post(url, data);

    if (__DEV__ && API_LOG) {
      console.log(response);
    }
    return new Promise((resolve, reject) => {
      if (response.ok && response.data && !response.data.error) {
        resolve(response.data);
      } else {
        if (response.status === 500) {
          reject(ERROR_SOMETHING_WENT_WRONG);
        }
        reject(response.data || ERROR_SOMETHING_WENT_WRONG);
      }
    });
  }
}

const action = { logout };
const mapStateToProps = ({ profile, login }) => ({ profile, login });
export default new ApiSauce();

// export default connect(
//   mapStateToProps,
//   action,
// )(ApiSauce);
