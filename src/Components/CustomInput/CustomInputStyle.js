import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constant/Color';

export const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    backgroundColor: COLORS.bgColor,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    borderRadius: 50,
    marginTop: 8,
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  image: {
    alignSelf: 'center',
    marginLeft: 25,
  },

  saprator: {
    height: 40,
    width: 2,
    backgroundColor: '#C0D8F0',
    alignSelf: 'center',
    position: 'absolute',
    left: 70,
  },
  secondImage: {
    alignSelf: 'center',
  },
  titleText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#828282',
  },
});
