import React, { useEffect, useState } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES } from '../../Constant/Color';
import { commonStyles } from '../../utils/Styles';
import { Button } from 'react-native-paper';
import Crossbtn, { GreenTickSvg } from '../../Components/Crossbtn';
import { Image } from 'react-native';
import { CrossSvg } from '../../Components/svg/BackSvg';

const AcknowledgeRequestModal = ({ modalVisible, callback, navigation }) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={callback}>
                <TouchableHighlight
                    style={styles.centeredView}
                    onPress={callback}
                    underlayColor="transparent">
                    <TouchableOpacity style={styles.modalView} activeOpacity={1}>
                        <View style={{ alignItems: "flex-end", width: "100%" }}>
                            <CrossSvg callback={callback} />
                        </View>
                        <View style={{ alignItems: "center", width: "70%", marginTop: 14 }}>
                            <GreenTickSvg />

                            <Text style={{ ...commonStyles.fs15_400, textAlign: "center", lineHeight: 22 }}>
                                Acknowledgement request completed
                            </Text>
                        </View>

                        <View
                            style={{
                                ...commonStyles.rowBetween,
                                width: '105%',
                                marginTop: 40,
                            }}>
                            <Button
                                style={styles.cancelBtn}
                                textColor="#999"
                                onPress={() => { callback() }}>
                                Go to Dashboard
                            </Button>

                            <Button
                                style={styles.saveBtn}
                                textColor="#fff"
                                onPress={() => {
                                    callback()
                                    navigation.navigate("InsuranceTrackerScreen");
                                }}>
                                Order History
                            </Button>
                        </View>
                        <Text />
                    </TouchableOpacity>
                </TouchableHighlight>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: SIZES.width,
        height: SIZES.height,
    },
    modalView: {
        backgroundColor: COLORS.bg,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: SIZES.width / 1.1,
        borderRadius: 20,
        padding: 30,
    },
    text1: {
        ...commonStyles.fs15_400,
        color: '#999',
        width: '36%',
    },
    textId: {
        ...commonStyles.fs15_400,
        color: '#000',
        marginLeft: 12,
        width: '50%',
    },
    textStyle: {
        color: '#000',
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    reportInput: {
        width: SIZES.width / 1.8,
        height: 48,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        marginBottom: 6,
        color: '#000',
        paddingHorizontal: 12,
    },
    btnWrapper: {
        width: '100%',
        height: 48,
        ...commonStyles.centerStyles,
    },
    saveBtn: {
        width: SIZES.width / 2.7,
        height: 52,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22,
        shadowColor: '#aaa',
    },
    cancelBtn: {
        width: SIZES.width / 2.7,
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22,
        shadowColor: '#999',
        borderWidth: 1,
        borderColor: '#eee',
    },
});

export default AcknowledgeRequestModal;
