import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { styles } from './RegisterProfileStyle';
import LinearGradient from 'react-native-linear-gradient';
import RegisterStepOne from '../../Components/RegisterStepOne/RegisterStepOne';
import RegisterStepTwo from '../../Components/RegisterStepTwo/RegisterStepTwo';
import RegisterStepThree from '../../Components/RegisterStepThree/RegisterStepThree';

const RegisterProfile = () => {
  const [isStepOne, setIsStepOne] = useState(true);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [isStepThree, setIsStepThree] = useState(false);
  const handleStepOne = () => {
    setIsStepOne(true);
    setIsStepTwo(false);
    setIsStepThree(false)
  };
  const handleStepTwo = () => {
    setIsStepOne(false);
    setIsStepTwo(true);
    setIsStepThree(false);
  };
  const handleStepThree = () => {
    setIsStepOne(false);
    setIsStepTwo(false);
    setIsStepThree(true);
  };
  return (
    <View>
      <Header isBack={true} title="Profile" />
      <ScrollView style={styles.subView}>
        <View style={styles.buttonView}>
          {isStepOne ? (
            <TouchableOpacity disabled style={{ width: '34%', marginLeft: -18 }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
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
              style={{ ...styles.disableButton, marginLeft: -18 }}>
              <Text style={styles.numText}>01</Text>
              <Text style={styles.disableText}>STEP</Text>
            </TouchableOpacity>
          )}
          <View style={{ width: 14 }} />
          {isStepTwo ? (
            <TouchableOpacity disabled style={{ width: '34%' }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
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
          <View style={{ width: 14 }} />
          {isStepThree ? (
            <TouchableOpacity disabled style={{ width: '34%' }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#3FA9F6', '#2360F0']}
                style={styles.linearGradient}>
                <View style={styles.number}>
                  <Text style={styles.activeNum}>03</Text>
                </View>
                <Text style={styles.buttonText}>STEP</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                handleStepThree();
              }}
              style={styles.disableButton}>
              <Text style={styles.numText}>02</Text>
              <Text style={styles.disableText}>STEP</Text>
            </TouchableOpacity>
          )}
        </View>
        {isStepOne ? <RegisterStepOne /> : <></>}
        {isStepTwo ? <RegisterStepTwo /> : <></>}
        {isStepThree ? <RegisterStepThree /> : <></>}
      </ScrollView>
    </View>
  );
};

export default RegisterProfile;
