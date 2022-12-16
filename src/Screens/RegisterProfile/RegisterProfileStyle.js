import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constant/Color';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLORS.bg,
    flex: 1,
  },
  buttonView: {
    flexDirection: 'row',
    paddingHorizontal: 45,
    justifyContent: 'space-between',
  },
  subView: {
    paddingTop: 30,
  },
  linearGradient: {
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: '100%',
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '600',
    marginRight: 15,
  },
  number: {
    width: 36,
    height: 36,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#3FA9F6',
    borderRadius: 50,
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 2,
  },

  disableButton: {
    width: '45%',
    backgroundColor: '#F1F5F9',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  numText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#63798ECC',
  },
  activeNum: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.white,
  },
  disableText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#63798ECC',
  },
});
