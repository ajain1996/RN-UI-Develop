import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './LoginStyle';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { IMAGE } from '../../Assets/Images/map';
import CustomButton from '../../Components/CustomButton/CustomButton';
import OrSeprator from '../../Components/OrSeprator/OrSeprator';

const Login = ({ navigation }) => {
  const [isPssword, setIsPassword] = useState(true);
  const [isOTP, setIsOTP] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLoginPassword = () => {
    setIsPassword(true);
    setIsOTP(false);
  };
  const handleLoginOTP = () => {
    setIsPassword(false);
    setIsOTP(true);
  };
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.buttonView}>
          {isPssword ? (
            <TouchableOpacity style={styles.passwordBtn}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#3FA9F6', '#2360F0']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Login Via Password</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleLoginPassword()}
              style={styles.disselectedOTPBtn}>
              <Text style={styles.disselectedOTP}>Login Via Password</Text>
            </TouchableOpacity>
          )}

          {isOTP ? (
            <TouchableOpacity style={{ width: '50%' }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#3FA9F6', '#2360F0']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Login Via OTP</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleLoginOTP()}
              style={styles.disselectedOTPBtn}>
              <Text style={styles.disselectedOTP}>Login Via OTP</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.subView}>
          <CustomInput
            image={IMAGE.phone}
            title={'UserName'}
            imageStyle={styles.phone}
            placeholderStyle={styles.textInput}
            textInputStyle={styles.textInput}
            placeHolderTitle="Please enter mobile no. or email ID"
            onChangeText={value => setUserName(value)}
            containerStyle={styles.container}
            isImage={false}
          />
          {isPssword ? (
            <>
              <CustomInput
                image={IMAGE.password}
                title={'Password'}
                imageStyle={styles.pass}
                textInputStyle={styles.textInput}
                placeHolderTitle="Please enter password"
                onChangeText={value => setUserName(value)}
                containerStyle={styles.container}
                isImage={true}
                secondImage={IMAGE.eye}
                secondImageStyle={styles.eyeStyle}
              />
              <View style={styles.forgotView}>
                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={styles.seprator} />
          )}
          <CustomButton buttonText={isOTP ? 'Get OTP' : 'Login'} />
          <OrSeprator />
          <View style={styles.accountView}>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotText}>I don't have account</Text>
            </TouchableOpacity>
          </View>
          <CustomButton buttonText="Register Now" onPress={() => { navigation.navigate("Register") }} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
