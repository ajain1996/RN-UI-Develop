import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './RegisterStyle';
import Header from '../../Components/Header/Header';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { IMAGE } from '../../Assets/Images/map';
import CustomButton from '../../Components/CustomButton/CustomButton';
import ProfileCUstomInput from '../profile/ProfileCUstomInput';

const Register = ({ navigation }) => {
  const [userName, setUserName] = useState('');

  return (
    <View style={styles.mainView}>
      <Header isBack={true} title={'Enter details to Register'} />
      <View style={styles.footerView}>
        <ProfileCUstomInput
          title="Profile Name"
          placeholder="Please enter full name"
          onChange={(val) => { }}
          icon={IMAGE.user}
        />
        <Text />
        <ProfileCUstomInput
          title="UserName"
          placeholder="Please enter mobile no."
          onChange={(val) => { }}
          icon={IMAGE.phone}
        />
        <Text />
        <ProfileCUstomInput
          title="Email ID"
          placeholder="Please enter email ID"
          onChange={(val) => { }}
          icon={IMAGE.email}
        />
        <View style={styles.btn}>
          <CustomButton buttonText={'Send OTP'} onPress={() => {
            navigation.navigate("VerifyOTP")
          }} />
        </View>
      </View>
    </View>
  );
};

export default Register;
