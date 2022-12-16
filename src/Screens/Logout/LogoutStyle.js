import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constant/Color';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '85%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#3F75F3',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#202020',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 60,
  },
  cancelButton: {
    backgroundColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 15,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  linearGradient: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  logoutBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  cancelBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    color: '#828282',
  },
  cancel: {
    height: 50,
    width: 50,
  },
  closeBtn: {
    position: 'absolute',
    right: 10,
  },
});
