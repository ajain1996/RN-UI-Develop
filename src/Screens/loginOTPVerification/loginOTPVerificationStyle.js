import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constant/Color';

export const styles = StyleSheet.create({
  mainconteiner: {
    backgroundColor: COLORS.bgColor,
    padding: 20,
    paddingTop: 50,
    flex: 1,
  },
  txt: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color: '#63798E',
    fontWeight: '600%',
  },
  IMAGE_Style: {
    width: 151.38,
    height: 144,
    marginTop: 60,
    alignSelf: 'center',
  },
  textnumber: {
    fontSize: 48,
    fontWeight: '600',
    color: '#63798E',
  },
  touchstyle: {
    marginLeft: 300,
    bottom: 35,
  },
  touchtext: {
    fontSize: 26,
    color: '#3A9DF5',
    textAlign: 'right',
    fontWeight: '700',
  },
  recivetxt: {
    fontSize: 12,
  },
  Codetext: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 40,
  },
  mainconteinertwo: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
  },
  TextInput: {
    fontSize: 28,
    textAlign: 'center',
  },
  image: {
    height: 50,
    width: 50,
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
  passwordBtn: {},
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
  subView: {
    marginTop: 40,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 25,
  },
});
