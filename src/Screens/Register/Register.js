import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './RegisterStyle';
import Header from '../../Components/Header/Header';
import CustomInput from '../../Components/CustomInput/CustomInput';
import {IMAGE} from '../../Assets/Images/map';
import CustomButton from '../../Components/CustomButton/CustomButton';

const Register = () => {
  const [userName, setUserName] = useState('');

  return (
    <View style={styles.mainView}>
      <Header isBack={true} title={'Enter details to Register'} />
      <View style={styles.footerView}>
        <CustomInput
          image={IMAGE.user}
          title={'Profile Name'}
          imageStyle={styles.user}
          placeholderStyle={styles.textInput}
          placeHolderTitle="Please enter full name"
          onChangeText={value => setUserName(value)}
          containerStyle={styles.container}
          isImage={false}
        />
        <CustomInput
          image={IMAGE.phone}
          title={'UserName'}
          imageStyle={styles.phone}
          placeholderStyle={styles.textInput}
          placeHolderTitle="Please enter mobile no."
          onChangeText={value => setUserName(value)}
          containerStyle={styles.container}
          isImage={false}
        />
        <CustomInput
          image={IMAGE.email}
          title={'Email ID'}
          imageStyle={styles.email}
          placeholderStyle={styles.textInput}
          placeHolderTitle="Please enter email ID"
          onChangeText={value => setUserName(value)}
          containerStyle={styles.container}
          isImage={false}
        />
        <View style={styles.btn}>
          <CustomButton buttonText={'Send OTP'} />
        </View>
      </View>
    </View>
  );
};

export default Register;
