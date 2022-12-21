import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constant/Color';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLORS.bgColor,
    padding: 20,
    paddingTop: 50,
    flex: 1,
  },
  linearGradient: {
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '600',
  },
  buttonView: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  passwordBtn: {},
  disselectedOTP: {
    fontSize: 16,
    color: COLORS.grayText,
    textAlign: 'center',
    fontWeight: '600',
  },
  disselectedOTPBtn: {
    backgroundColor: COLORS.white,
    width: '50%',
    borderRadius: 25,
    justifyContent: 'center',
  },
  disselectedPassword: {
    fontSize: 16,
    color: COLORS.grayText,
    textAlign: 'center',
    fontWeight: '600',
  },
  disselectedPasswordBtn: {
    backgroundColor: COLORS.white,
    width: '50%',
    borderRadius: 25,
    justifyContent: 'center',
  },
  subView: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  phone: {
    height: 28,
    width: 20,
  },
  pass: {
    width: 22,
    height: 26,
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    color: "#000",
    width: "75%",
    marginLeft: 40
  },
  container: {
    marginTop: 25,
    color: "#000"
  },
  eyeStyle: {
    height: 24,
    width: 24,
  },
  forgotPassword: {
    textAlign: 'right',
  },
  forgotView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 15,
    marginBottom: 30,
  },
  forgotText: {
    color: '#63798E',
    fontSize: 16,
  },
  accountView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  seprator: {
    marginBottom: 60,
  },
});
