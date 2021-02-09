import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import HeaderComponent from '../../components/HeaderComponent';
import Button from '../../components/ButtonComponent';
import {buttonDetails} from './utils';

import styles from './styles/LoginAndSignUpScreenStyle';
import {ICONS} from '../../assets/icons/icon';
import PhoneNumberModal from './components/PhoneNumberModal';

export default function LoginAndSignUpScreen({navigation}) {
  const goBackClicked = () => {
    navigation.goBack();
  };
  //checkinng to push
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('91');
  const [countryCodeText, setCountryCodeText] = useState('India (+91)');
  const [isModalOpen, setModalState] = useState(false);
  const [focus, setFocus] = useState('');

  const closeModal = () => {
    setModalState(false);
  };

  const onPhoneCountryCodeClicked = (
    countryPhoneCode = '',
    countryCodeText = '',
  ) => {
    setCountryCodeText(countryCodeText);
    setCountryCode(countryPhoneCode);

    closeModal();
  };

  const DISABLE_BUTTON = phoneNumber.length ? false : true;
  return (
    <View style={styles.root}>
      <HeaderComponent onGoBack={() => goBackClicked()} icon={ICONS.CROSS} />
      <View style={styles.main}>
        <Text style={styles.headerTextStyle}>Log in or sign up to Airbnb</Text>
        <View>
          <View style={{paddingVertical: 12}}>
            <TouchableOpacity
              onPress={() => setModalState(true)}
              style={styles.phoneCodeContainerStyle}>
              <Text style={[styles.topPlaceholderStyle, {top: 0}]}>
                Country/Region
              </Text>
              <Text style={styles.countryCodeTextStyle}>{countryCodeText}</Text>
            </TouchableOpacity>
            {focus ? (
              <Text style={styles.topPlaceholderStyle}>Phone Number</Text>
            ) : null}
            <TextInput
              blurOnSubmit
              keyboardType="numeric"
              onBlur={() => setFocus(false)}
              onChangeText={(text) => setPhoneNumber(text)}
              onFocus={() => setFocus(true)}
              placeholder={!focus ? 'Phone Number' : ''}
              style={styles.phoneNumberInputStyle}
              value={phoneNumber}
            />
          </View>
          <Button
            customTextStyle={styles.buttonTextStyle}
            disabled={DISABLE_BUTTON}
            style={styles.loginButtonStyle}
            text="Continue"
          />
        </View>
        <View style={styles.orLineStyle}>
          <View style={styles.orBorderLineStyle} />
          <Text style={styles.orTextStyle}>or</Text>
          <View style={styles.orBorderLineStyle} />
        </View>
        {buttonDetails.map(({text, icon, color}) => (
          <View style={styles.buttonContainerStyle}>
            <Button
              color={color}
              customTextStyle={styles.socialLoginButtonTextStyle}
              icon={icon}
              isButtonWithIcon
              // isLoading={isLoading}
              // onPress={onSignIn}
              style={styles.socialLoginButtonStyle}
              text={text}
            />
          </View>
        ))}
      </View>
      <PhoneNumberModal
        isVisible={isModalOpen}
        closeModal={closeModal}
        onPhoneCountryCodeClicked={onPhoneCountryCodeClicked}
      />
    </View>
  );
}
