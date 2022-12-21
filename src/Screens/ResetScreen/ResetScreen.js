import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './ResetScreenStyle';
import Header from '../../Components/Header/Header';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { IMAGE } from '../../Assets/Images/map';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { commonStyles } from '../../utils/Styles';

const ResetScreen = () => {
  const [userName, setUserName] = useState('');

  return (
    <View style={{ ...commonStyles.bgFFF }}>
      <Header isBack={true} title={'Reset Password'} />
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <CustomInput
            image={IMAGE.phone}
            title={'Mobile No./ Email ID'}
            imageStyle={styles.phone}
            textInputStyle={[styles.textInput, { paddingLeft: 12 }]}
            placeholderStyle={styles.textInput}
            placeHolderTitle="Please enter mobile no. or email ID"
            onChangeText={value => setUserName(value)}
            containerStyle={styles.container}
            isImage={false}
          />
        </View>
        <CustomButton buttonText="Get OTP" />
      </View>
    </View>
  );
};

export default ResetScreen;
