import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './LogoutStyle';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGE} from '../../Assets/Images/map';

const Logout = props => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isVisible}
        onRequestClose={() => {
          props.modalClose();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                props.modalClose();
              }}
              style={styles.closeBtn}>
              <Image source={IMAGE.cancel} style={styles.cancel} />
            </TouchableOpacity>
            <Text style={styles.modalText}>Log Out?</Text>
            <Text style={styles.logoutText}>Are you sure want to log out?</Text>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelBtnTxt}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#3FA9F6', '#2360F0']}
                  style={styles.linearGradient}>
                  <Text style={styles.logoutBtnText}>Logout</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Logout;
