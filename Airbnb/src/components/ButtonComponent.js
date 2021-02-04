import * as React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isIos} from '../utils/index';
// import LottieView from 'lottie-react-native';
// import posed from 'react-native-pose';

//const loaderJson = require('../assets/lottie/loader.json');

export default function ButtonComponent(props) {
  // grab the props
  const {
    text,
    style,
    onPress,
    disabled,
    customTextStyle,
    isButtonWithIcon,
    icon,
    color,
    ...rest
  } = props;

  const buttonStyle = {
    borderRadius: 8,
    alignItems: 'center',
    height: 46,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: isButtonWithIcon ? 'flex-start' : 'center',
    ...style,
  };

  const buttonDisabledStyle = {
    backgroundColor: 'grey',
  };

  const textStyle = {
    alignSelf: 'center',
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    ...customTextStyle,
  };

  //   const loaderWrapperStyle = {
  //     height: 50,
  //     width: 50,
  //     alignSelf: 'center',
  //   };

  const disabledTextStyle = {
    color: 'white',
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
        {isButtonWithIcon && <Icon name={icon} size={24} color={color} />}
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
        {isButtonWithIcon && (
          <Icon
            name={icon}
            size={24}
            style={{paddingVertical: 12}}
            color={color}
          />
        )}
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
