import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { styles } from './RegisterStyle';
import Header from '../../Components/Header/Header';
import CustomButton from '../../Components/CustomButton/CustomButton';
import ProfileCUstomInput from '../profile/ProfileCUstomInput';
import User from '../../Assets/svg/user.svg';
import Mail from '../../Assets/svg/mail.svg';
import CallCalling from '../../Assets/svg/call-calling.svg';

export default function Register({ navigation }) {
  return (
    <View style={styles.mainView}>
      <Header isBack={true} title={'Enter details to Register'} />
      <ScrollView>
        <View style={styles.footerView}>
          <ProfileCUstomInput
            title="Please enter full name"
            placeholder="Please enter full name"
            onChange={val => { }}
            icon={User}
          />
          <Text />
          <ProfileCUstomInput
            title="Mobile No."
            placeholder="Please enter mobile no."
            onChange={val => { }}
            icon={CallCalling}
          />
          <Text />
          <ProfileCUstomInput
            title="Email ID"
            placeholder="Please enter email ID"
            onChange={val => { }}
            icon={Mail}
          />

          <View style={styles.btn}>
            <CustomButton
              buttonText={'Send OTP'}
              onPress={() => {
                navigation.navigate('VerifyOTP');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
