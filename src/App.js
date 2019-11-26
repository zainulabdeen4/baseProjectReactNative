import React, {Fragment, Component} from 'react';
import {
  View,
  StatusBar,
  NativeModules,
  BackHandler,
  Platform,
} from 'react-native';
import configureStore, {AppWithNavigationState} from './store';
import {Provider} from 'react-redux';
import AppNavigator from './navigation';
import {NavigationActions} from 'react-navigation';
// import KeyboardManager from 'react-native-keyboard-manager';
class App extends Component {
  state = {
    isLoading: true,
    store: configureStore(() => {
      this.setState({isLoading: false});
      // if (Utils.isPlatformAndroid()) {
      //   NativeModules.SplashScreen.hide();
      // }
    }),
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    if (Platform.OS === 'ios') {
      KeyboardManager.setToolbarPreviousNextButtonEnable(true);
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, getState} = this.state.store;
    const {nav} = getState();
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    if (this.state.isLoading) return null;
    else
      return (
        <View style={{flex: 1}}>
          <StatusBar barStyle="light-content" backgroundColor="#F7B9A2" />
          <Provider store={this.state.store}>
            <AppWithNavigationState />
          </Provider>
        </View>
      );
  }
}

export default App;
