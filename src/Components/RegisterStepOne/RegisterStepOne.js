import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './RegisterStepOneStyle';
import CustomInput from '../CustomInput/CustomInput';
import {IMAGE} from '../../Assets/Images/map';
import CustomButton from '../CustomButton/CustomButton';

const RegisterStepOne = () => {
  const [userName, setUserName] = useState('');

  return (
    <View style={styles.mainView}>
      <CustomInput
        image={IMAGE.user}
        title={'Father Name'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Father Name"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
      />
      <CustomInput
        image={IMAGE.password}
        title={'Master Code'}
        imageStyle={styles.pass}
        textInputStyle={styles.textInput}
        placeHolderTitle="Master Code"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={false}
      />
      <CustomInput
        image={IMAGE.user}
        title={'Contact Person Name'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Contact Person Name"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={false}
      />
      <CustomInput
        image={IMAGE.phone}
        title={'Contact person mobile no.'}
        imageStyle={styles.phone}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Contact person mobile no."
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={false}
      />
      <CustomInput
        image={IMAGE.user}
        title={'Select relationship status'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Relationship"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={true}
        secondImage={IMAGE.downArrow}
        secondImageStyle={styles.downArrow}
      />
      <CustomInput
        image={IMAGE.address}
        title={'Address'}
        imageStyle={styles.user}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Address"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={false}
      />
      <CustomInput
        image={IMAGE.pincode}
        title={'Pin code'}
        imageStyle={styles.pincode}
        placeholderStyle={styles.textInput}
        placeHolderTitle="Pin Code"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={false}
      />
      <CustomInput
        image={IMAGE.address}
        title={'City'}
        imageStyle={styles.user}
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
        placeholderStyle={styles.textInput}
        placeHolderTitle="State"
        onChangeText={value => setUserName(value)}
        containerStyle={styles.container}
        isImage={true}
        secondImage={IMAGE.downArrow}
        secondImageStyle={styles.downArrow}
      />
      <View
        style={{
          marginTop: 25,
        }}
      />
      <CustomButton buttonText={'Next'} />
    </View>
  );
};

export default RegisterStepOne;
