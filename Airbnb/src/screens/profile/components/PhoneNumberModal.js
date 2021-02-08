import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

import {DEVICE_HEIGHT} from '../../../utils';
import styles from './styles/PhoneNumberModalStyle';
const countryCodes = require('country-codes-list');

export default function PhoneNumberModal({
  isVisible = false,
  closeModal,
  onPhoneCountryCodeClicked,
}) {
  const [phoneNumberCodes, setPhoneNumberCode] = useState([]);

  useEffect(() => {
    const myCountryCodesObject = countryCodes.customList(
      'countryCallingCode',
      '{countryNameEn}  (+{countryCallingCode})',
    );
    const myCountryCodesArray = Object.entries(myCountryCodesObject);
    setPhoneNumberCode(myCountryCodesArray);
  }, []);

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => closeModal(false)}>
      <View style={{backgroundColor: 'white', height: DEVICE_HEIGHT - 120}}>
        <ScrollView>
          {(phoneNumberCodes || []).map((item) => (
            <TouchableOpacity
              onPress={() => onPhoneCountryCodeClicked(item[0], item[1])}
              style={styles.phoneCodeCardContainerStyle}>
              <Text style={styles.phoneCodeTextStyle}>{item[1]}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}
