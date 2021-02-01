import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import Button from '../../components/ButtonComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles/ProfileTabLandingScreenStyle';

export default function ProfileTabLandingScreen() {
  const onSignUpClick = () => {
    alert('Sign Up Clicked');
  };

  const flatListData = [
    {
      icon: null,
      onClick: onSignUpClick,
      secondaryText: 'Sign Up',
      secondaryTextStyle: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        letterSpacing: 0.7,
      },
      text: "Don't have an account?",
    },
    {
      text: 'Settings',
      icon: 'cog',
      secondaryText: '',
      secondaryTextStyle: null,
      onClick: onSignUpClick,
    },
    {
      text: 'Learn about hosting',
      icon: 'home',
      onClick: onSignUpClick,
      secondaryText: '',
      secondaryTextStyle: null,
    },
    {
      text: 'Get help',
      icon: 'question',
      onClick: onSignUpClick,
      secondaryText: '',
      secondaryTextStyle: null,
    },
    {
      text: 'Terms of Service',
      icon: 'file-invoice',
      onClick: onSignUpClick,
      secondaryText: '',
      secondaryTextStyle: null,
    },
  ];

  const [isLoading, setLoading] = useState(false);

  const onSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const HEADING = 'Your Profile';
  const SUB_HEADER = 'Log in to start planning your next trip';
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <Text style={styles.screenHeadingTextStyle}>{HEADING}</Text>
        <Text style={styles.screenSubHeaderTextStyle}>{SUB_HEADER}</Text>
        <View style={styles.loginButtonContainerStyle}>
          <Button
            text="Log-In"
            onPress={onSignIn}
            isLoading={isLoading}
            style={styles.loginButtonStyle}
            customTextStyle={styles.buttonTextStyle}
          />
        </View>
        {flatListData.map(
          ({text, icon, onClick, secondaryText, secondaryTextStyle}) => (
            <ListItem
              text={text}
              onClick={onClick}
              icon={icon}
              secondaryText={secondaryText}
              secondaryTextStyle={secondaryTextStyle}
            />
          ),
        )}
      </View>
    </View>
  );
}

const ListItem = ({
  text = '',
  onClick,
  icon = '',
  secondaryText = '',
  secondaryTextStyle = {},
}) => {
  return (
    <TouchableOpacity style={styles.cardItemContainerStyle} onPress={onClick}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.itemOptionTextStyle}>{text}</Text>
        <Text style={[styles.itemOptionTextStyle, secondaryTextStyle]}>
          {secondaryText}
        </Text>
      </View>
      <Icon name={icon} size={24} style={{paddingVertical: 12}} color="black" />
    </TouchableOpacity>
  );
};
