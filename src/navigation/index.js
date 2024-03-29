import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// import UserProfile from '../Containers/UserProfile/index'

import {
  
} from '../Containers';
import { Metrics } from '../theme';
import { VideoModal } from '../components';
import util from '../utils';
// SplashScreen.hide();

SplashScreen.hide();

const other = createStackNavigator(
  {
    VideoModal: { screen: VideoModal },
  },
  {
    headerMode: util.isPlatformAndroid() ? 'none' : 'screen',
    headerBackTitleVisible: false,
  },
);
const DrawerStackNavigator = createStackNavigator(
  {
    // nutritionStep: NutritionStep,
    home: { screen: Home },
    fitnessType: FitnessType,
    fitnessItem: FitnessItem,
    fitnessItemDetails: FitnessItemDetails,
    nutritionType: NutritionType,
    nutritionsDashboard: NutritionsDashboard,
    nutritionItem: Nutrition_Individual_Item,
    nutritionStep: NutritionStep,
    notification: Notification,
    planner: PlannerAgenda,
    userProfile: UserProfile,
    goalndividual: Goalndividual,
    result_Individual: ResultIndividual,
    AddPlannerEventType: AddPlannerEventType,

    // VideoModal: {
    //   screen: VideoModal,
    //   navigationOptions: ({ navigation }) => ({
    //     // drawerLockMode:''
    //   }),
    // },

    PlannerEvent,
    Goals: {
      screen: Goals,
    },
    AddGoal: AddGoal,
    Results: Results,
    GoalDetail: GoalDetail,
    Notifications: Notifications,
    Terms: Terms,
    Privacy: Privacy,
    Settings: Settings,
  },
  { headerMode: 'screen' },
);
const DrawerStack = createDrawerNavigator(
  {
    home: DrawerStackNavigator,
  },
  {
    drawerWidth: Metrics.screenWidth * 0.8,
    contentComponent: DrawerComponent,
  },
);
const AuthStack = createStackNavigator({
  dashboard: Dashboard,
  signup: SignUp,
  login: Login,
  Subscription,
});
const ApplicationStack = createSwitchNavigator({
  auth: AuthStack,
  drawerStack: DrawerStack,
  other,
});
export default createAppContainer(ApplicationStack);
