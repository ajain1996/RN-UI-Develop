import {create} from 'react-test-renderer';

import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constant/Color';

export const styles = StyleSheet.create({
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
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '600',
  },
});
