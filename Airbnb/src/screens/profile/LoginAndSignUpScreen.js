import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import Button from '../../components/ButtonComponent';
import styles from './styles/LoginAndSignUpScreenStyle';

export default function LoginAndSignUpScreen({navigation}) {
  const goBackClicked = () => {
    navigation.goBack();
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [focus, setFocus] = useState('');

  const buttonDetails = [
    {
      text: 'Continue with Email',
      icon: 'envelope',
      color: 'black',
    },
    {
      text: 'Continue with Facebook',
      icon: 'facebook',
      color: 'blue',
    },
    {
      text: 'Continue with Google',
      icon: 'google',
      color: 'red',
    },
    {
      text: 'Continue with Apple',
      icon: 'apple',
      color: 'black',
    },
  ];

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: 68,
    marginHorizontal: 12,
    fontSize: 14,
    color: '#000',
  };

  const DISABLE_BUTTON = phoneNumber.length ? false : true;
  return (
    <View style={styles.root}>
      <HeaderComponent onGoBack={() => goBackClicked()} icon="times" />
      <View style={styles.main}>
        <Text style={{fontSize: 24, fontWeight: '500', marginBottom: 16}}>
          Log in or sign up to Airbnb
        </Text>
        <View>
          <View style={{paddingVertical: 12}}>
            <View
              style={{
                height: 56,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 8,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}></View>

            {focus ? <Text style={labelStyle}>Phone Number</Text> : null}
            <TextInput
              style={{
                height: 56,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 12,
                fontSize: 20,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
              onChangeText={(text) => setPhoneNumber(text)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              value={phoneNumber}
              placeholder={!focus ? 'Phone Number' : ''}
              blurOnSubmit
              keyboardType="numeric"
            />
          </View>

          <Button
            text="Continue"
            style={styles.loginButtonStyle}
            customTextStyle={styles.buttonTextStyle}
            disabled={DISABLE_BUTTON}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <View style={{height: 1, width: '42%', backgroundColor: 'gray'}} />
          <Text style={{paddingHorizontal: '5%', alignSelf: 'baseline'}}>
            or
          </Text>
          <View style={{height: 1, width: '42%', backgroundColor: 'gray'}} />
        </View>
        {buttonDetails.map(({text, icon, color}) => (
          <View style={{paddingVertical: 8}}>
            <Button
              text={text}
              isButtonWithIcon
              icon={icon}
              color={color}
              // onPress={onSignIn}
              // isLoading={isLoading}
              style={styles.socialLoginButtonStyle}
              customTextStyle={styles.socialLoginButtonTextStyle}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
