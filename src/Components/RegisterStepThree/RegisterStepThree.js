import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../RegisterStepTwo/RegisterStepTwoStyle';
import CustomInput from '../CustomInput/CustomInput';
import { IMAGE } from '../../Assets/Images/map';
import CustomButton from '../CustomButton/CustomButton';
import { launchImageLibrary } from 'react-native-image-picker';

const RegisterStepThree = () => {
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
            }
        });
    };

    return (
        <View style={styles.mainView}>
            <Text style={styles.titleText}>ID proof Photo</Text>
            <View style={styles.cardView}>
                <TouchableOpacity style={styles.cardTwo} onPress={getImage}>
                    <Image
                        style={[styles.addImage, { width: "75%", height: 65 }]}
                        source={IMAGE.uploadId} resizeMode="contain"
                    />
                    <Text style={styles.cardText}>Upload ID proof front</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardTwo} onPress={getImage}>
                    <Image style={styles.addImage} source={IMAGE.addImage} />
                    <Text style={styles.cardText}>Upload PAN card photo here</Text>
                </TouchableOpacity>
            </View>
            <CustomInput
                image={IMAGE.address}
                title={'Address proof'}
                imageStyle={styles.user}
                textInputStyle={styles.textInput}
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
                textInputStyle={styles.textInput}
                placeholderStyle={styles.textInput}
                placeHolderTitle="Address ID proof number"
                onChangeText={value => setUserName(value)}
                containerStyle={styles.container}
            />
            <Text style={styles.titleText}>Address proof photo</Text>

            <View style={styles.cardView}>
                <TouchableOpacity style={styles.cardTwo} onPress={getImage}>
                    <Image
                        style={[styles.addImage, { width: "75%", height: 65 }]}
                        source={IMAGE.uploadId} resizeMode="contain"
                    />
                    <Text style={styles.cardText}>Upload address proof front</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardTwo} onPress={getImage}>
                    <Image style={styles.addImage} source={IMAGE.addImage} />
                    <Text style={styles.cardText}>Upload address proof back</Text>
                </TouchableOpacity>
            </View>
            <CustomInput
                image={IMAGE.house}
                title={'Pos type'}
                imageStyle={styles.user}
                placeholderStyle={styles.textInput}
                textInputStyle={styles.textInput}
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
                textInputStyle={styles.textInput}
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

export default RegisterStepThree;
