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
import ShadowIcon from '../../Components/ShadowIcon';
import Crossbtn from '../../Components/Crossbtn';
import { CrossSvg } from '../../Components/svg/BackSvg';

const ReturnModal = ({ modalVisible, callback, navigation }) => {
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
                        <TouchableOpacity
                            style={{ alignItems: "flex-end", width: "100%", marginTop: -12 }}
                            onPress={callback}
                        >
                            <CrossSvg onPress={() => { }} />
                        </TouchableOpacity>
                        <View style={{ alignItems: "center", width: "70%", marginTop: 18 }}>
                            <Text style={styles.text1}>
                                Are you sure you want to return tag serial no.
                            </Text>

                            <Text style={styles.textId}>
                                606060-OOB-232323
                            </Text>
                        </View>

                        <View style={{ ...commonStyles.rowBetween, marginTop: 26 }}>
                            <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                                callback();
                                navigation.navigate("InventorySuccessScreen")
                            }}>
                                Save
                            </Button>
                            <View style={{ width: 20 }} />

                            <Button style={styles.cancelBtn} textColor="#999" onPress={() => { }}>
                                Cancel
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
        ...commonStyles.fs15_400, textAlign: "center", lineHeight: 22
    },
    textId: {
        ...commonStyles.fs14_500,
        textAlign: "center",
        lineHeight: 22,
        color: COLORS.theme,
        marginVertical: 8,
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
        width: SIZES.width / 3,
        height: 45,
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

export default ReturnModal;
