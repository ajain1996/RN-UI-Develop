import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './VerifyOTPStyle';
import { IMAGE } from '../../Assets/Images/map';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { COLORS } from '../../Constant/Color';
import RequestModal from '../RequestModal/RequestModal';

const VerifyOTP = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.bgColor,
        flex: 1,
      }}>
      <View style={styles.mainconteiner}>
        <Header isBack={true} title="Verification Code" />
        <View style={styles.mainView}>
          <View>
            <Image style={styles.IMAGE_Style} source={IMAGE.verifyOTP} />
          </View>
          <View>
            <Text style={styles.Codetext}>
              Please type the verification code
            </Text>
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
            <CustomButton buttonText="Submit" />
          </View>
          <View style={styles.bottomView}>
            <View>
              <Text style={styles.textnumber}>2.30</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => setIsVisible(true)}>
                <Text style={styles.touchtext}>Resend</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.recivetxt}>Dont'recive the code?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <RequestModal
        isVisible={isVisible}
        modalClose={() => setIsVisible(false)}
      />
    </ScrollView>
  );
};

export default VerifyOTP;
