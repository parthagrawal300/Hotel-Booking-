let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const getTopLevelNavigator = () => {
  return _navigator || {};
};

let navigate = null;
let goBack = null;
let replace = () => {};
let popToTop = () => {};
let reset = () => {};
let resetLogin = () => {};
let handleDrawer = () => {};

const CommonActions = require('@react-navigation/native').CommonActions;
const StackActions = require('@react-navigation/native').StackActions;
const DrawerActions = require('@react-navigation/native').DrawerActions;

navigate = (routeName, params) => {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
};

replace = (routeName, params = {}) => {
  _navigator.dispatch(StackActions.replace(routeName, params));
};

handleDrawer = (value) => {
  const drawerAction = value
    ? DrawerActions.openDrawer()
    : DrawerActions.closeDrawer();
  _navigator.dispatch(drawerAction);
};

reset = (routes = [], index = 0) => {
  const resetAction = CommonActions.reset({
    index,
    routes,
  });
  _navigator.dispatch(resetAction);
};

goBack = () => {
  _navigator.dispatch(CommonActions.goBack());
};

popToTop = () => {
  _navigator.dispatch(StackActions.popToTop());
};

export default {
  navigate,
  goBack,
  popToTop,
  setTopLevelNavigator,
  replace,
  reset,
  resetLogin,
  handleDrawer,
  getTopLevelNavigator,
};
