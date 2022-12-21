import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { IMAGE } from '../../Assets/Images/map';
import { styles } from './NewPasswordStyle';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { COLORS } from '../../Constant/Color';

const NewPassword = () => {
  const [userName, setUserName] = useState('');

  return (
    <View style={{ backgroundColor: COLORS.bg }}>
      <Header isBack={true} title={'New Password'} />
      <View style={styles.mainView}>
        <CustomInput
          image={IMAGE.password}
          title={'New Password'}
          imageStyle={styles.pass}
          textInputStyle={[styles.textInput, { marginRight: -30 }]}
          placeHolderTitle="Please enter password"
          onChangeText={value => setUserName(value)}
          containerStyle={styles.container}
          isImage={true}
          secondImage={IMAGE.eye}
          secondImageStyle={styles.eyeStyle}
        />
        <CustomInput
          image={IMAGE.password}
          title={'Confirm Password'}
          imageStyle={styles.pass}
          textInputStyle={[styles.textInput, { marginRight: -30 }]}
          placeHolderTitle="Please enter password"
          onChangeText={value => setUserName(value)}
          containerStyle={styles.container}
          isImage={true}
          secondImage={IMAGE.eye}
          secondImageStyle={styles.eyeStyle}
        />
        <View style={styles.buttonView}>
          <CustomButton buttonText={'Submit'} />
        </View>
      </View>
    </View>
  );
};

export default NewPassword;
