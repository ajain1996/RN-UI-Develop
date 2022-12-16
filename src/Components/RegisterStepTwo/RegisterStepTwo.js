import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './RegisterStepTwoStyle';
import CustomInput from '../CustomInput/CustomInput';
import {IMAGE} from '../../Assets/Images/map';
import CustomButton from '../CustomButton/CustomButton';

const RegisterStepTwo = () => {
  const [userName, setUserName] = useState('');

  return (
    <View style={styles.mainView}>
      <CustomInput
        image={IMAGE.pancard}
        title={'PAN card number'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="PAN card number"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
      />
      <View>
        <Text style={styles.titleText}>PAN card photo</Text>
        <TouchableOpacity style={styles.card}>
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
        secondImage={IMAGE.downArrow}
        secondImageStyle={styles.downArrow}
      />
      <CustomInput
        image={IMAGE.pancard}
        title={'ID proof number'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="ID proof number"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
      />
      <Text style={styles.titleText}>PAN card photo</Text>
      <View style={styles.cardView}>
        <TouchableOpacity style={styles.cardTwo}>
          <Image style={styles.addImage} source={IMAGE.addImage} />
          <Text style={styles.cardText}>Upload PAN card photo here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardTwo}>
          <Image style={styles.addImage} source={IMAGE.addImage} />
          <Text style={styles.cardText}>Upload PAN card photo here</Text>
        </TouchableOpacity>
      </View>
      <CustomInput
        image={IMAGE.address}
        title={'Address proof'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Address proof"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={true}
        secondImage={IMAGE.downArrow}
        secondImageStyle={styles.downArrow}
      />
      <CustomInput
        image={IMAGE.pancard}
        title={'Address ID proof number'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Address ID proof number"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
      />
      <Text style={styles.titleText}>Address proof photo</Text>

      <View style={styles.cardView}>
        <TouchableOpacity style={styles.cardTwo}>
          <Image style={styles.addImage} source={IMAGE.addImage} />
          <Text style={styles.cardText}>Upload PAN card photo here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardTwo}>
          <Image style={styles.addImage} source={IMAGE.addImage} />
          <Text style={styles.cardText}>Upload PAN card photo here</Text>
        </TouchableOpacity>
      </View>
      <CustomInput
        image={IMAGE.house}
        title={'Pos type'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Pos type"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={true}
        secondImage={IMAGE.downArrow}
        secondImageStyle={styles.downArrow}
      />
      <CustomInput
        image={IMAGE.house}
        title={'Pos type'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Pos type"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={false}
      />
      <View>
        <Text style={styles.titleText}>Pos proof photo</Text>
        <TouchableOpacity style={styles.card}>
          <Image style={styles.addImage} source={IMAGE.addImage} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 25,
        }}
      />
      <CustomButton buttonText={'Submit'} />
    </View>
  );
};

export default RegisterStepTwo;
