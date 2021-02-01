import {Platform, Dimensions} from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const loaderJson = require('../assets/lottie/loader.json');
