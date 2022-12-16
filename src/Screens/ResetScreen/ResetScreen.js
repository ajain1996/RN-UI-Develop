import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './ResetScreenStyle';
import Header from '../../Components/Header/Header';
import CustomInput from '../../Components/CustomInput/CustomInput';
import {IMAGE} from '../../Assets/Images/map';
import CustomButton from '../../Components/CustomButton/CustomButton';

const ResetScreen = () => {
  const [userName, setUserName] = useState('');

  return (
    <>
      <Header isBack={true} title={'Reset Password'} />
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <CustomInput
            image={IMAGE.phone}
            title={'Mobile No./ Email ID'}
            imageStyle={styles.phone}
            placeholderStyle={styles.textInput}
            placeHolderTitle="Please enter mobile no. or email ID"
            onChangeText={value => setUserName(value)}
            containerStyle={styles.container}
            isImage={false}
          />
        </View>
        <CustomButton buttonText="Get OTP" />
      </View>
    </>
  );
};

export default ResetScreen;
