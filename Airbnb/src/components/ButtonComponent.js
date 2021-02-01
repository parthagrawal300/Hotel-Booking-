import * as React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import {isIos} from '../utils/index';
// import LottieView from 'lottie-react-native';
// import posed from 'react-native-pose';

//const loaderJson = require('../assets/lottie/loader.json');

export default function ButtonComponent(props) {
  // grab the props
  const {text, style, onPress, disabled, customTextStyle, ...rest} = props;

  const buttonStyle = {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    ...style,
  };

  const buttonDisabledStyle = {
    backgroundColor: 'grey',
  };

  const textStyle = {
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 14,
    paddingBottom: 12,
    paddingHorizontal: 16,
    ...customTextStyle,
  };

  //   const loaderWrapperStyle = {
  //     height: 50,
  //     width: 50,
  //     alignSelf: 'center',
  //   };

  const disabledTextStyle = {
    color: 'grey',
  };

  //   const LoadingSpinnerWrapper = posed.View({
  //     connecting: {opacity: 1, delay: 150, transition: {duration: 700}},
  //   });

  if (isIos) {
    return (
      <TouchableOpacity
        style={[
          buttonStyle,
          disabled && !props.isLoading && buttonDisabledStyle,
        ]}
        {...rest}
        onPress={onPress}
        disabled={disabled}>
        {props.isLoading ? (
          //   <LoadingSpinnerWrapper pose={'connecting'} style={loaderWrapperStyle}>
          //     <LottieView source={loaderJson} autoPlay loop resizeMode="cover" />
          //   </LoadingSpinnerWrapper>
          <ActivityIndicator />
        ) : (
          <Text style={[textStyle, disabled && disabledTextStyle]}>{text}</Text>
        )}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
      <View style={buttonStyle} {...rest}>
        {props.isLoading ? (
          //   <LoadingSpinnerWrapper pose={'connecting'} style={loaderWrapperStyle}>
          //     <LottieView source={loaderJson} autoPlay loop resizeMode="cover" />
          //   </LoadingSpinnerWrapper>
          <ActivityIndicator />
        ) : (
          <Text style={textStyle}>{text}</Text>
        )}
      </View>
    </TouchableNativeFeedback>
  );
}
