import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { styles } from './RequestModalStyle';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGE } from '../../Assets/Images/map';

const RequestModal = props => {
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
            <Text style={styles.modalText}>
              Your request has been submitted successfully - 1234-5698-55 is
              your service request number.
            </Text>
            <Text style={styles.logoutText}>
              Note: This no. for future refference
            </Text>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  justifyContent: 'center',
                }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#3FA9F6', '#2360F0']}
                  style={styles.linearGradient}>
                  <Text style={styles.logoutBtnText}>Go to Dashboard</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RequestModal;
