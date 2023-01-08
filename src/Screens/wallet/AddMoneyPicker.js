import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { COLORS, SIZES } from '../../Constant/Color';
import { commonStyles } from '../../utils/Styles';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowBg from '../../Components/ShadowBg';
import { AddMoneySvg } from '../../Components/svg/BackSvg';

const AddMoneyPicker = ({ modalVisible, callback, setModalVisible }) => {
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
                            <View style={{ alignItems: 'center', marginTop: 30 }}>
                                <Text style={{ ...commonStyles.fs15_500 }}>Add Money</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <ImageBackground
                                    source={require('../../Assets/add_money.png')}
                                    style={{ width: 130, height: 130, ...commonStyles.centerStyles }}
                                >
                                    <AddMoneySvg />
                                </ImageBackground>
                            </View>
                            <Text />

                            <Text style={{ ...commonStyles.fs13_400, color: "#999" }}>Amount</Text>
                            <ShadowBg
                                width={SIZES.width / 1.1}
                                image={require('../../Assets/shadow.png')}
                                height={52}
                                paddingHorizontal={5}
                                childComponent={
                                    <TextInput
                                        placeholder='Enter amount'
                                        placeholderTextColor="#999"
                                        style={{
                                            fontSize: 14, color: "#000",
                                            paddingHorizontal: 16
                                        }}
                                    />
                                }
                            />
                            <Text />

                            <Text style={{ ...commonStyles.fs13_400, color: "#999" }}>UPI ID</Text>
                            <ShadowBg
                                width={SIZES.width / 1.1}
                                image={require('../../Assets/shadow.png')}
                                height={52}
                                paddingHorizontal={5}
                                childComponent={
                                    <TextInput
                                        placeholder='Enter UPI ID'
                                        placeholderTextColor="#999"
                                        style={{
                                            fontSize: 14, color: "#000",
                                            paddingHorizontal: 16
                                        }}
                                    />
                                }
                            />
                            <Text /><Text />

                            <View style={{ ...commonStyles.rowBetween }}>
                                <Button style={styles.saveBtn} textColor="#fff" onPress={() => { }}>
                                    Save
                                </Button>

                                <Button style={styles.cancelBtn} textColor="#999" onPress={() => { }}>
                                    Cancel
                                </Button>
                            </View>
                        </ScrollView>
                    </TouchableOpacity>
                </TouchableHighlight>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'flex-end',
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
        width: SIZES.width,
        height: SIZES.width * 1.2,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    button: {
        padding: 20,
        width: SIZES.width / 1.6,
        backgroundColor: '#f7f8f9',
        alignItems: 'center',
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
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
        width: SIZES.width / 2.3,
        height: 52,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa"
    },
    cancelBtn: {
        width: SIZES.width / 2.3,
        height: 52,
        backgroundColor: "#fff",
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#999",
        borderWidth: 1, borderColor: "#eee"
    }
});

export default AddMoneyPicker;
