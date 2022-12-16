import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { styles } from './CustomInputStyle';

const CustomInput = props => {
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
          <Image
            source={props.secondImage}
            style={[props.secondImageStyle, styles.secondImage]}
          />
        ) : (
          <View style={[props.secondImageStyle, styles.secondImage]} />
        )}
      </View>
    </View>
  );
};

export default CustomInput;
