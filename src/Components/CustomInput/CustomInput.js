import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { IMAGE } from '../../Assets/Images/map';
import { commonStyles } from '../../utils/Styles';
import { styles } from './CustomInputStyle';
import Entypo from "react-native-vector-icons/Entypo";

const CustomInput = props => {
  const [showEye, setShowEye] = useState(false);

  return (
    <View style={props.containerStyle}>
      <Text style={styles.titleText}>{props.title}</Text>
      <View style={styles.buttonView}>
        <Image source={props.image} style={[props.imageStyle, styles.image]} />
        <View style={styles.saprator} />

        <TextInput
          style={[props.textInputStyle, { width: props.isImage ? "63%" : "75%" }]}
          secureTextEntry={showEye ? false : true}
          placeholder={props.placeHolderTitle}
          onChangeText={text => props.onChangeText(text)}
        />
        {props.isImage ? (
          <TouchableOpacity onPress={() => { setShowEye(!showEye) }} style={{ ...commonStyles.centerStyles }}>
            {showEye
              ? <Entypo name="eye-with-line" size={24} color="#999" />
              : <Entypo name="eye" size={24} color="#999" />}
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
