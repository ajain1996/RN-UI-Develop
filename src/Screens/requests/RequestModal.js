import React from 'react';
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
import { CrossSvg } from '../../Components/svg/BackSvg';

const RequestModal = ({ modalVisible, callback, navigation }) => {
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
                        <View style={{ ...commonStyles.rowBetween, width: "100%", marginBottom: 20 }}>
                            <View style={{ ...commonStyles.rowStart }}>
                                <Text style={{ ...commonStyles.fs13_400, color: "#909091" }}>20:19:36</Text>
                                <View style={{ width: 1, height: 20, marginHorizontal: 6, backgroundColor: "#ccc" }} />
                                <Text style={{ ...commonStyles.fs13_400, color: "#909091" }}>16-09-2022</Text>
                            </View>
                            <CrossSvg onPress={() => { }} />
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 22, width: "100%", marginTop: 10 }}>
                            <Text style={styles.text1}>
                                Request Type:
                            </Text>

                            <Text style={styles.textId}>
                                Return Request
                            </Text>
                        </View>

                        <View style={{ ...commonStyles.rowStart, marginTop: 22, width: "100%" }}>
                            <Text style={styles.text1}>
                                Request No:
                            </Text>

                            <Text style={styles.textId}>
                                TRR:8844851
                            </Text>
                        </View>

                        <View style={{ ...commonStyles.rowStart, marginTop: 22, width: "100%" }}>
                            <Text style={styles.text1}>
                                Order No:
                            </Text>

                            <Text style={styles.textId}>
                                TQR:8844851
                            </Text>
                        </View>

                        <View style={{ ...commonStyles.rowStart, marginTop: 22, width: "100%" }}>
                            <Text style={styles.text1}>
                                Status:
                            </Text>

                            <Text style={[styles.textId, { color: "#F4911A" }]}>
                                Pending
                            </Text>
                        </View>

                        <View style={{ marginTop: 32 }}>
                            <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                                callback();
                                navigation.navigate("OrdersScreen")
                            }}>
                                Back to Dashboard
                            </Button>
                        </View>
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
        padding: 30
    },
    text1: {
        ...commonStyles.fs15_400,
        color: "#999", width: "36%"
    },
    textId: {
        ...commonStyles.fs15_400,
        color: "#000",
        marginLeft: 12,
        width: "50%"
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
        width: SIZES.width / 1.2,
        height: 52,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa"
    },
    cancelBtn: {
        width: SIZES.width / 3,
        height: 45,
        backgroundColor: "#fff",
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#999",
        borderWidth: 1, borderColor: "#eee"
    }
});

export default RequestModal;
