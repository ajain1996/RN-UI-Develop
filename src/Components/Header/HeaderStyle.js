import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constant/Color';
export const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  backStyle: {
    height: 60,
    width: 60,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.grayText,
  },
  titleView: {
    width: '70%',
  },
  backView: {
    justifyContent: 'center',
    alignContent: 'center',
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
    height: 1,
    paddingHorizontal: 20,
  },
  img: {
    width: 335,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
