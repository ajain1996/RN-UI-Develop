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
import { styles } from './ResetPasswordStyle';
import { IMAGE } from '../../Assets/Images/map';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';

const ResetPassword = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const otpRef = React.useRef();

  const [value, setValue] = React.useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <ScrollView keyboardShouldPersistTaps={'always'}>
      <View style={styles.mainconteiner}>
        <Header isBack={true} title="Reset Password" />
        <View style={styles.mainView}>
          <View>
            <Image style={styles.IMAGE_Style} source={IMAGE.verifyOTP} />
          </View>
          <View>
            <Text style={styles.Codetext}>
              Please type the verification code
            </Text>
          </View>

          {/* <CodeField
            ref={otpRef}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <ImageBackground
                source={IMAGE.VerificationImg}
                onLayout={getCellOnLayoutHandler(index)}
                resizeMode="cover"
                style={styles.image}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </ImageBackground>
            )}
          /> */}

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
              <TouchableOpacity>
                <Text style={styles.touchtext}>Resend</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.recivetxt}>Dont'recive the code?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
