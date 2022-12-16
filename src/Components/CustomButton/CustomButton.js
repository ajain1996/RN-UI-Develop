import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './CustomButtonStyle';

const CustomButton = props => {
  return (
    <TouchableOpacity>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#3FA9F6', '#2360F0']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
