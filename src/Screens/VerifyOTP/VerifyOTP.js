import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './VerifyOTPStyle';
import { IMAGE } from '../../Assets/Images/map';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { COLORS } from '../../Constant/Color';
import RequestModal from '../RequestModal/RequestModal';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { OtpBgSvg } from '../../Components/Crossbtn';

const VerifyOTP = () => {
  const [isVisible, setIsVisible] = useState(false);

  const otpRef = useRef();

  const [value, setValue] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.bg,
        flex: 1,
      }} keyboardShouldPersistTaps="always">
      <View style={styles.mainconteiner}>
        <Header isBack={true} title="Verification Code" />
        <View style={styles.mainView}>
          <View>
            <View style={styles.IMAGE_Style2}>
              <View style={{ marginTop: -5 }}>
                <OtpBgSvg />
              </View>
            </View>
            {/* <Image style={styles.IMAGE_Style} source={IMAGE.verifyOTP} /> */}
          </View>
          <View>
            <Text style={styles.Codetext}>
              Please type the verification code
            </Text>
          </View>

          <CodeField
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
          />

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
