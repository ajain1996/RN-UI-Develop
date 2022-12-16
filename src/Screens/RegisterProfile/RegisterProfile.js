import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header/Header';
import {styles} from './RegisterProfileStyle';
import LinearGradient from 'react-native-linear-gradient';
import RegisterStepOne from '../../Components/RegisterStepOne/RegisterStepOne';
import RegisterStepTwo from '../../Components/RegisterStepTwo/RegisterStepTwo';

const RegisterProfile = () => {
  const [isStepOne, setIsStepOne] = useState(true);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const handleStepOne = () => {
    setIsStepOne(true);
    setIsStepTwo(false);
  };
  const handleStepTwo = () => {
    setIsStepOne(false);
    setIsStepTwo(true);
  };
  return (
    <View>
      <Header isBack={true} title="Profile" />
      <ScrollView style={styles.subView}>
        <View style={styles.buttonView}>
          {isStepOne ? (
            <TouchableOpacity disabled style={{width: '45%'}}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#3FA9F6', '#2360F0']}
                style={styles.linearGradient}>
                <View style={styles.number}>
                  <Text style={styles.activeNum}>01</Text>
                </View>
                <Text style={styles.buttonText}>STEP</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                handleStepOne();
              }}
              style={styles.disableButton}>
              <Text style={styles.numText}>01</Text>
              <Text style={styles.disableText}>STEP</Text>
            </TouchableOpacity>
          )}
          {isStepTwo ? (
            <TouchableOpacity disabled style={{width: '45%'}}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#3FA9F6', '#2360F0']}
                style={styles.linearGradient}>
                <View style={styles.number}>
                  <Text style={styles.activeNum}>02</Text>
                </View>
                <Text style={styles.buttonText}>STEP</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                handleStepTwo();
              }}
              style={styles.disableButton}>
              <Text style={styles.numText}>02</Text>
              <Text style={styles.disableText}>STEP</Text>
            </TouchableOpacity>
          )}
        </View>
        {isStepOne ? <RegisterStepOne /> : <RegisterStepTwo />}
      </ScrollView>
    </View>
  );
};

export default RegisterProfile;
