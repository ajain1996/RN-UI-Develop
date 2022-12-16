import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import {
    Modal,
    StyleSheet,
    View,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import Crossbtn from '../../Components/Crossbtn';
import RichText from '../../Components/RichText';
import { COLORS, SIZES } from '../../Constant/Color';
import { commonStyles } from '../../utils/Styles';

const RCBookModal = ({ modalVisible, callback, setModalVisible }) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    callback();
                }}>
                <TouchableHighlight
                    style={styles.centeredView}
                    onPress={() => {
                        callback();
                    }}
                    underlayColor="transparent">
                    <TouchableOpacity style={styles.modalView} activeOpacity={1}>
                        <ScrollView>
                            <View style={styles.modalHeader}>
                                <View style={styles.borderText}>
                                    <Text style={{ ...commonStyles.fs14_500 }}>RJ 07 C 1534</Text>
                                </View>

                                <Crossbtn callback={callback} />
                            </View>
                            <View style={styles.mainWrapper}>
                                <RichText
                                    title="Agent details"
                                    value="Chairboard Private LTD/238140"
                                />
                                <RichText
                                    title="Partner details"
                                    value="Vedika Corporation / 360"
                                />
                                <RichText
                                    title="Tag status"
                                    value="Tag Replaced"
                                />
                                <RichText
                                    title="Security deposite"
                                    value="₹0.0000"
                                />
                                <RichText
                                    title="FIrst time load"
                                    value="₹100.00"
                                />
                                <RichText
                                    title="Wavier code"
                                    value="COFT100SD50TC10"
                                />
                                <RichText
                                    title="NPCI Activated on"
                                    value="30/09/2022, 06:37 PM"
                                />
                                <RichText
                                    title="Commercial Vehicle"
                                    value="No"
                                />
                                <RichText
                                    title="Tag cost"
                                    value="₹100.00"
                                />
                                <RichText
                                    title="Tag replacement date"
                                    value="30/09/2022, 06:37 PM"
                                />
                                <RichText
                                    title="Low closure date"
                                    value="30/09/2022, 06:37 PM"
                                />
                                <RichText
                                    title="Tag closure date"
                                    value="30/09/2022, 06:37 PM"
                                />
                            </View>

                            <Button
                                style={commonStyles.submitBtn}
                                textColor="#fff"
                                onPress={() => { }}>
                                Download RC book
                            </Button>
                        </ScrollView>
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
        width: SIZES.width / 1.08,
        borderRadius: 20,
    },
    mainWrapper: {
        backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 9,
        marginTop: 12, paddingTop: 2
    },
    borderText: {
        borderWidth: 1, borderColor: "#000", borderRadius: 5, paddingHorizontal: 5
    },
    modalHeader: {
        ...commonStyles.rowBetween, paddingHorizontal: 16, paddingTop: 24
    },
});

export default RCBookModal;
