import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { IMAGE } from '../../Assets/Images/map';
import { commonStyles } from '../../utils/Styles';
import { styles } from './CustomInputStyle';

const CustomInput = props => {
  const [showEye, setShowEye] = useState(false);

  return (
    <View style={props.containerStyle}>
      <Text style={styles.titleText}>{props.title}</Text>
      <View style={styles.buttonView}>
        <Image source={props.image} style={[props.imageStyle, styles.image]} />
        <View style={styles.saprator} />

        <TextInput
          style={[props.textInputStyle]}
          placeholder={props.placeHolderTitle}
          onChangeText={text => props.onChangeText(text)}
        />
        {props.isImage ? (
          <TouchableOpacity onPress={() => { setShowEye(!showEye) }} style={{ ...commonStyles.centerStyles }}>
            <Image
              source={showEye ? IMAGE.hidden : IMAGE.eye}
              style={[props.secondImageStyle, styles.secondImage]}
            />
          </TouchableOpacity>
        ) : (
          <View style={[props.secondImageStyle, styles.secondImage]} />
        )}
      </View>
    </View>
  );
};

export default CustomInput;
