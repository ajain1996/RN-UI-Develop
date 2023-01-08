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
import Tick from '../../Assets/svg/tick.svg';
import GreenCircle from '../../Assets/svg/green-circle.svg';
import Svg from '../../utils/Svg';

const OrderConfirmModal = ({ modalVisible, callback, navigation }) => {
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
                        <View style={{ alignItems: "flex-end", width: "100%" }}>
                            <Crossbtn callback={callback} />
                        </View>
                        <View style={{ alignItems: "center", width: "100%", marginTop: 14 }}>
                            <Svg width="100" height="100" source={GreenCircle} />
                            <View style={{ position: "absolute", top: 20 }}>
                                <Svg width="68" height="68" source={Tick} />
                            </View>
                            <Text />

                            {renderText("Your order has been submitted successfully")}
                        </View>

                        <View style={{ alignItems: "center", width: "90%", marginLeft: 40, marginTop: 12 }}>
                            <RenderOrderDetails
                                title="Order ID"
                                value="RET14567854"
                            />
                            <RenderOrderDetails
                                title="Amount Paid"
                                value="5500.00"
                            />
                            <RenderOrderDetails
                                title="Payment Reff No"
                                value="5556668889990"
                            />
                        </View>
                        <Text />

                        {renderText("Your order has been submitted successfully")}

                        <View
                            style={{
                                ...commonStyles.rowBetween,
                                width: '105%',
                                marginTop: 40,
                            }}>
                            <Button
                                style={styles.cancelBtn}
                                textColor="#999"
                                onPress={() => { callback(); }}>
                                Go to Dashboard
                            </Button>
                            <Button
                                style={styles.saveBtn}
                                textColor="#fff"
                                onPress={() => { callback(); navigation.navigate("OrderDetailsScreen") }}>
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

const RenderOrderDetails = ({ title, value }) => {
    return (
        <View style={{ ...commonStyles.rowStart, marginTop: 14 }}>
            <Text style={{ ...commonStyles.fs14_300, color: "#000", width: "50%" }}>
                {title}
            </Text>
            <Text style={{ ...commonStyles.fs14_600, width: "50%" }}>:{value}</Text>
        </View>
    );
}

const renderText = (text) => {
    return (
        <Text style={{ ...commonStyles.fs14_400, textAlign: "center", lineHeight: 22, width: "70%" }}>
            {text}
        </Text>
    );
}

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
        backgroundColor: COLORS.bg,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 8,
        shadowColor: COLORS.theme,
        borderWidth: 2,
        borderColor: '#DDE4EB',
    },
});

export default OrderConfirmModal;
