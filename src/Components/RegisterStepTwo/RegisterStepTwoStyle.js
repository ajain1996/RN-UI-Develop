import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constant/Color';

export const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 30,
    marginBottom: 200,
  },
  user: {
    height: 26,
    width: 23,
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  container: {
    marginTop: 25,
  },
  pass: {
    width: 22,
    height: 26,
  },
  phone: {
    height: 28,
    width: 20,
  },
  downArrow: {
    width: 16,
    height: 9,
  },
  pincode: {
    width: 23,
    height: 22,
  },
  titleText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#828282',
    marginTop: 25,
  },
  card: {
    backgroundColor: COLORS.bgColor,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    borderRadius: 8,
    marginTop: 8,
    justifyContent: 'space-between',

    height: 147,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    color: "#63798E"
  },
  addImage: {
    width: 50,
    height: 50,
    marginBottom: 25,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTwo: {
    backgroundColor: COLORS.bgColor,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    borderRadius: 8,
    marginTop: 8,
    justifyContent: 'space-between',

    height: 147,
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    alignContent: 'center',
  },
});
