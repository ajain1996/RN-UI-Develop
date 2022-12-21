import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './RegisterStepTwoStyle';
import CustomInput from '../CustomInput/CustomInput';
import { IMAGE } from '../../Assets/Images/map';
import CustomButton from '../CustomButton/CustomButton';
import { launchImageLibrary } from 'react-native-image-picker';

const RegisterStepTwo = () => {
  const [userName, setUserName] = useState('');

  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const [image, setImage] = React.useState('');

  const getImage = () => {
    launchImageLibrary(options, response => {
      if (response?.didCancel) {
      } else if (response?.error) {
      } else if (response?.customButton) {
      } else {
        setImage(response?.assets[0].uri);
        setImageData(response);
        setImageData(response);
      }
    });
  };

  return (
    <View style={styles.mainView}>
      <CustomInput
        image={IMAGE.address}
        title={'City'}
        imageStyle={styles.user}
        textInputStyle={styles.textInput}
        placeholderStyle={styles.textInput}
        placeHolderTitle="City"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={false}
      />
      <CustomInput
        image={IMAGE.address}
        title={'Dist'}
        imageStyle={styles.user}
        textInputStyle={styles.textInput}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Dist"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={false}
      />
      <CustomInput
        image={IMAGE.user}
        title={'State'}
        imageStyle={styles.user}
        textInputStyle={styles.textInput}
        placeholderStyle={styles.textInput}
        placeHolderTitle="State"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={true}
        secondImage={IMAGE.downArrow}
        secondImageStyle={styles.downArrow}
      />
      <CustomInput
        image={IMAGE.pancard}
        textInputStyle={styles.textInput}
        title={'PAN card number'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="PAN card number"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
      />
      <View>
        <Text style={styles.titleText}>PAN card photo</Text>
        <TouchableOpacity style={styles.card} onPress={getImage}>
          <Image style={styles.addImage} source={IMAGE.addImage} />
          <Text style={styles.cardText}>Upload PAN card photo here</Text>
        </TouchableOpacity>
      </View>

      <CustomInput
        image={IMAGE.user}
        title={'ID proof'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="ID proof"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={true}
        textInputStyle={styles.textInput}
        secondImage={IMAGE.downArrow}
        secondImageStyle={styles.downArrow}
      />
      <CustomInput
        image={IMAGE.pancard}
        title={'ID proof number'}
        textInputStyle={styles.textInput}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="ID proof number"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
      />
    </View>
  );
};

export default RegisterStepTwo;
