import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './OrSepratorStyle';

const OrSeprator = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.seprator} />
      <View style={styles.orView}>
        <Text style={styles.orText}>or</Text>
      </View>
      <View style={styles.seprator} />
    </View>
  );
};

export default OrSeprator;
