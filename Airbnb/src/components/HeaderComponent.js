import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles/HeaderComponentStyle';

const HIT_SLOP = {top: 15, left: 15, bottom: 15, right: 15};

const HeaderComponent = (props) => {
  const {onGoBack, icon} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        hitSlop={HIT_SLOP}
        onPress={() => (onGoBack ? onGoBack() : props.navigation.goBack())}>
        <Icon name={icon} size={22} color="#999999" />
      </TouchableOpacity>
      <Text style={styles.textHeader}>{props.title}</Text>
    </View>
  );
};

export default HeaderComponent;
