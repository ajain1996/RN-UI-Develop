import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
import { commonStyles } from '../../utils/Styles';
import { COLORS, SIZES } from '../../Constant/Color';
import {
    DASHBOARD,
    PROFILE,
    WALLET,
    LOGOUT,
    TNC,
    REQUESTS,
    REFUND,
    PRIVACY,
    ORDERS,
    INVENTORY,
    INSURANCE,
    REPORTS,
    CONTACT,
} from '../../utils/ImageManager'
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';

const drwaerList = [
    {
        name: "Dashboard",
        icon: DASHBOARD,
        navigation: "",
    },
    {
        name: "Profile",
        icon: PROFILE,
        navigation: "",
    },
    {
        name: "Wallet",
        icon: WALLET,
        navigation: "",
    },
    {
        name: "Inventory",
        icon: INVENTORY,
        navigation: "",
    },
    {
        name: "Reports",
        icon: REPORTS,
        navigation: "",
    },
    {
        name: "Orders",
        icon: ORDERS,
        navigation: "",
    },
    {
        name: "Inssurance Tracker",
        icon: INSURANCE,
        navigation: "",
    },
    {
        name: "Requests",
        icon: REQUESTS,
        navigation: "",
    },
    {
        name: "Contact Us",
        icon: CONTACT,
        navigation: "",
    },
    {
        name: "Provacy Policy",
        icon: PRIVACY,
        navigation: "",
    },
    {
        name: "Terms & Conditions",
        icon: TNC,
        navigation: "",
    },
    {
        name: "Logout",
        icon: LOGOUT,
        navigation: "",
    },
]

export const CustomDrawer = ({ modalVisible, callback, navigation }) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={callback}>
                <TouchableHighlight
                    style={styles.centeredView}
                    onPress={() => {
                        callback();
                    }}
                    underlayColor="transparent">
                    <LinearGradient colors={["#3B9FF6", "#2970F1", "#2970F1", "#2970F1"]} style={styles.modalView}>
                        <View>
                            <View style={{ width: SIZES.width / 1.2, backgroundColor: "#4385F4", marginTop: -34 }}>
                                <View style={{ padding: 30, paddingVertical: 20, ...commonStyles.row }}>
                                    <Image
                                        source={require('../../Assets/user.png')}
                                        resizeMode="contain"
                                        style={{ width: 65, height: 65, borderRadius: 100, borderWidth: 2, borderColor: "#fff" }}
                                    />
                                    <View style={{ marginLeft: 12 }}>
                                        <Text style={{ ...commonStyles.fs18_500, color: "#fff" }}>Amanda</Text>
                                        <Text style={{ ...commonStyles.fs12_400, color: "#fff" }}>+91-9876543215</Text>
                                    </View>
                                </View>
                            </View>

                            <FlatList
                                data={drwaerList}
                                renderItem={({ item }) => {
                                    return (
                                        <DrawerButton
                                            title={item.name}
                                            image={item.icon}
                                            onPress={() => {
                                                navigation.replace('Root');
                                            }}
                                        />
                                    );
                                }}
                            />
                        </View>
                    </LinearGradient>
                </TouchableHighlight>
            </Modal>
        </View>
    );
};

export const DrawerButton = ({ title, image, onPress }) => {
    console.log("\n\n image: ", image)
    return (
        <TouchableHighlight
            style={[styles.button]}
            underlayColor="#3B9FF6"
            onPress={onPress}>
            <View style={{ ...commonStyles.rowStart }}>
                <SvgUri width={24} height={24} source={image} />
                <Text style={styles.textStyle}>{title}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: SIZES.width,
        height: SIZES.height,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: SIZES.width / 1.2,
        height: SIZES.height + 80,
        marginTop: 80,
    },
    button: {
        paddingHorizontal: 30,
        // width: SIZES.width * 1,
        // marginTop: 2,
        // borderRadius: 5,
        paddingVertical: 18
    },
    textStyle: {
        color: '#fff',
        fontWeight: '400',
        marginLeft: 12,
        fontSize: 15,
        marginTop: -2,
    },
    loginBtn: {
        padding: 8,
        backgroundColor: '#eee',
        borderRadius: 6,
        // paddingHorizontal: 12,
        // marginRight: 10,
        width: 110,
        // alignItems: 'center',
        marginTop: 10,
    },
});
