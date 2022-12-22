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
import Crossbtn from '../../Components/Crossbtn';
import ProfileAccordian from '../profile/ProfileAccordian';
import CustomInputBox from '../../Components/CustomInputBox';
import { Dropdown } from 'react-native-element-dropdown'
import { dropdownStyles } from '../../utils/dropdownStyles';
import CustomDropdownComponent from '../../Components/CustomDropdownComponent';

export const data = [
    { label: 'HDFC', value: 'HDFC' },
    { label: 'Kotak', value: 'Kotak' },
    { label: 'ICICI', value: '+93' },
    { label: 'Canara', value: 'Canara' },
    { label: 'Dena', value: 'Dena' },
];

const CreateOrderModal = ({ modalVisible, callback, navigation }) => {
    const [selectBank, setselectBank] = React.useState(false);

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
                        <View
                            style={{
                                ...commonStyles.rowBetween,
                                width: '100%',
                                marginBottom: 20,
                            }}>
                            <View style={{ ...commonStyles.rowStart }}>
                                <Text style={{ ...commonStyles.fs16_500 }}>Create Order</Text>
                            </View>
                            <Crossbtn callback={callback} />
                        </View>
                        <View style={{ width: '105%', alignItems: 'center' }}>
                            <CustomDropdownComponent
                                placeholder="Select Bank"
                                data={data}
                            />
                            <CustomDropdownComponent
                                placeholder="Vehicle class"
                                data={data}
                            />
                        </View>

                        <CustomInputBox
                            heading="Tag Cost"
                            placeholder="Enter tag cost"
                            onChange={() => { }}
                        />

                        <CustomInputBox
                            heading="Quantity"
                            placeholder="Enter quantity"
                            onChange={() => { }}
                        />

                        <CustomInputBox
                            heading="Amount"
                            placeholder="Enter amount"
                            onChange={() => { }}
                        />

                        <View
                            style={{
                                ...commonStyles.rowBetween,
                                width: '105%',
                                marginTop: 40,
                            }}>
                            <Button
                                style={styles.saveBtn}
                                textColor="#fff"
                                onPress={() => { callback(); navigation.navigate("OrderSummaryScreen") }}>
                                Save
                            </Button>

                            <Button
                                style={styles.cancelBtn}
                                textColor="#999"
                                onPress={() => { }}>
                                Cancel
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

export default CreateOrderModal;
