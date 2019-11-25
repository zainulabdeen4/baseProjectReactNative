import { NavigationActions, StackActions, DrawerActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function popToTop(routeName, params,method) {
  _navigator.dispatch(

    StackActions.popToTop())
  }
  // StackActions.reset())
function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}
function back(){
  _navigator.dispatch(NavigationActions.back())

}
function resetStack(){
  _navigator.dispatch(StackActions.reset())

}

// add other navigation functions that you need and export them

export default {
  resetStack,
  navigate,
  back,
  popToTop,
  setTopLevelNavigator,
};