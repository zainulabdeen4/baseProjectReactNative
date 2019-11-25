import React, { Component, PureComponent } from 'react';
import {
  View,
  Image,
  StatusBar,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import { Metrics } from '../../theme';
import { Close } from '../../theme/Images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationActions, SwitchActions } from 'react-navigation';
import styles from './styles';
import { connect } from 'react-redux';
import util from '../../utils';
class VideoComp extends PureComponent {
  constructor() {
    super();
  }
  state = {
    loading: true,
  };
  componentDidMount() {
    StatusBar.setHidden(true);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);

    // this.player.presentFullscreenPlayer();
  }
  componentWillUnmount() {
    StatusBar.setHidden(false);
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { nav } = this.props;
    if (nav.index === 2) {
      this.go_back();
      return true;
    }
    return true;
  };
  go_back = () => {
    const { navigation } = this.props;
    const { Workout_Id, Fitness_Id, titleName } = navigation.state.params;
    navigation.dismiss();
    navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'drawerStack',
        action: NavigationActions.navigate({
          routeName: 'fitnessItemDetails',
          params: { Workout_Id, Fitness_Id, titleName },
        }),
      })
    );
  };
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'black', height: Metrics.ratio(36) },
    title: null,
    headerBackTitle: null,
    drawerLockMode: 'locked-closed',
    onDrawerSlide: () => null,
    headerLeft: () => {
      const { Workout_Id, Fitness_Id, titleName } = navigation.state.params;
      if (util.isPlatformAndroid()) {
        return null;
      } else {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.dismiss();
              navigation.dispatch(
                NavigationActions.navigate({
                  routeName: 'drawerStack',
                  action: NavigationActions.navigate({
                    routeName: 'fitnessItemDetails',
                    params: { Workout_Id, Fitness_Id, titleName },
                  }),
                })
              );
            }}
            style={styles.closeContainer}>
            <Image source={Close} style={styles.close} resizeMode="contain" />
          </TouchableOpacity>
        );
      }
    },
  });
  render() {
    const { navigation } = this.props;
    const { uri } = navigation.state.params;
    return (
      <View style={styles.container}>
        <Video
          source={{ uri }}
          onError={error => alert('Could not play media')}
          onEnd={this.go_back}
          controls={true}
          ref={ref => {
            this.player = ref;
          }}
          fullscreen={true}
          fullscreenOrientation="landscape"
          resizeMode="contain"
          fullscreenAutorotate={true}
          style={styles.video}
        />
      </View>
    );
  }
}
const mapStateToProps = ({ nav }) => ({ nav });
const actions = {};
export default connect(
  mapStateToProps,
  actions
)(VideoComp);
