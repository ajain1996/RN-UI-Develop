import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './loginOTPVerificationStyle';
import {IMAGE} from '../../Assets/Images/map';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../Components/CustomButton/CustomButton';

const loginOTPVerification = () => {
  const [isPssword, setIsPassword] = useState(false);
  const [isOTP, setIsOTP] = useState(true);
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
      <View style={styles.mainconteiner}>
        <View style={styles.buttonView}>
          {isPssword ? (
            <TouchableOpacity style={styles.passwordBtn}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#3FA9F6', '#2360F0']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Login Via Password</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.disselectedOTPBtn}>
              <Text style={styles.disselectedOTP}>Login Via Password</Text>
            </TouchableOpacity>
          )}

          {isOTP ? (
            <TouchableOpacity style={{width: '50%'}}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#3FA9F6', '#2360F0']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Login Via OTP</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.disselectedOTPBtn}>
              <Text style={styles.disselectedOTP}>Login Via OTP</Text>
            </TouchableOpacity>
          )}
        </View>
        <View>
          <Image style={styles.IMAGE_Style} source={IMAGE.verifyOTP} />
        </View>
        <View>
          <Text style={styles.Codetext}>Please type the verification code</Text>
        </View>

        <View style={styles.mainconteinertwo}>
          <ImageBackground
            source={IMAGE.VerificationImg}
            resizeMode="cover"
            style={styles.image}>
            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={styles.TextInput}
              placeholder="*"
            />
          </ImageBackground>

          <ImageBackground
            source={IMAGE.VerificationImg}
            resizeMode="cover"
            style={styles.image}>
            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={styles.TextInput}
              placeholder="*"
            />
          </ImageBackground>

          <ImageBackground
            source={IMAGE.VerificationImg}
            resizeMode="cover"
            style={styles.image}>
            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={styles.TextInput}
              placeholder="*"
            />
          </ImageBackground>

          <ImageBackground
            source={IMAGE.VerificationImg}
            resizeMode="cover"
            style={styles.image}>
            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={styles.TextInput}
              placeholder="*"
            />
          </ImageBackground>

          <ImageBackground
            source={IMAGE.VerificationImg}
            resizeMode="cover"
            style={styles.image}>
            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={styles.TextInput}
              placeholder="*"
            />
          </ImageBackground>

          <ImageBackground
            source={IMAGE.VerificationImg}
            resizeMode="cover"
            style={styles.image}>
            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={styles.TextInput}
              placeholder="*"
            />
          </ImageBackground>
        </View>
        <View style={styles.subView}>
          <CustomButton buttonText="Login" />
        </View>
        <View style={styles.bottomView}>
          <View>
            <Text style={styles.textnumber}>2.30</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.touchtext}>Resend</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.recivetxt}>Dont'recive the code?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default loginOTPVerification;
