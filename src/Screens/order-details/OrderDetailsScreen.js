import { View, Text } from 'react-native'
import React from 'react'
import InventoryHeader from '../inventory/InventoryHeader'
import { commonStyles } from '../../utils/Styles'
import { COLORS } from '../../Constant/Color'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import ProfileAccordian from '../profile/ProfileAccordian'
import { Image } from 'react-native'

export default function OrderDetailsScreen({ navigation }) {
    const [bankName, setbankName] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <InventoryHeader title="Order Details" navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={styles.orderMenu}>
                        <Text style={styles.orderId}>
                            Order ID: TRR:8844851
                        </Text>

                        <View style={{ ...commonStyles.rowBetween, marginTop: 28 }}>
                            <View>
                                <Text style={styles.orderData}>Order Qty.</Text>
                                <Text style={styles.orderDetails}>50</Text>
                            </View>
                            <View style={{ width: 1, height: 40, backgroundColor: "#ddd" }} />
                            <View>
                                <Text style={styles.orderData}>Returned Qty.</Text>
                                <Text style={styles.orderDetails}>10</Text>
                            </View>
                            <View style={{ width: 1, height: 40, backgroundColor: "#ddd" }} />
                            <View>
                                <Text style={styles.orderData}>Pending.</Text>
                                <Text style={styles.orderDetails}>10</Text>
                            </View>
                        </View>

                        <View style={{ ...commonStyles.rowAround, marginTop: 30 }}>
                            <View>
                                <Text style={styles.orderData}>Dispatched Qty.</Text>
                                <Text style={styles.orderDetails}>50</Text>
                            </View>
                            <View style={{ width: 1, height: 40, backgroundColor: "#ddd" }} />
                            <View>
                                <Text style={styles.orderData}>Acknowledge Qty.</Text>
                                <Text style={styles.orderDetails}>10</Text>
                            </View>
                        </View>

                        <Button
                            style={styles.submitBtn}
                            textColor="#fff"
                            onPress={() => { navigation.navigate("AcknoledgementScreen") }}
                        >
                            Acknowledgement
                        </Button>
                    </View>

                    <ProfileAccordian
                        showMasterDetails={bankName}
                        setshowMasterDetails={setbankName}
                        title="Kotak Bank"
                        callBack={() => { }}
                    />

                    <View style={styles.orderMenu}>
                        <View style={{ ...commonStyles.rowBetween }}>
                            <Image
                                source={require('../../Assets/bank.png')}
                                resizeMode="stretch"
                                style={{ width: 92, height: 32 }}
                            />
                            <Text style={styles.bankCode}>VC-4</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Order Qty.</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Dispatched Qty.</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Acknowledge Qty.</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Returned Qty.</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Pending</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                    </View>

                    <View style={styles.orderMenu}>
                        <View style={{ ...commonStyles.rowBetween }}>
                            <Image
                                source={require('../../Assets/bank.png')}
                                resizeMode="stretch"
                                style={{ width: 92, height: 32 }}
                            />
                            <Text style={styles.bankCode}>VC-4</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Order Qty.</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Dispatched Qty.</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Acknowledge Qty.</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Returned Qty.</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                        <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                            <Text style={styles.bankData}>Pending</Text>
                            <Text style={styles.bankName}>: 50</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    orderMenu: {
        elevation: 12,
        shadowColor: "#999",
        backgroundColor: COLORS.bg,
        padding: 20, borderRadius: 8,
        marginVertical: 20
    },
    orderId: {
        ...commonStyles.fs14_500, color: COLORS.theme, textAlign: "center"
    },
    orderData: {
        ...commonStyles.fs13_400, color: "#808080", textAlign: "center"
    },
    orderDetails: {
        ...commonStyles.fs14_600, textAlign: "center"
    },
    submitBtn: {
        backgroundColor: COLORS.theme, height: 50,
        ...commonStyles.centerStyles, borderRadius: 60,
        marginTop: 28, width: "70%", alignSelf: "center"
    },
    bankCode: {
        ...commonStyles.fs14_400, textAlign: "center"
    },
    bankData: {
        ...commonStyles.fs13_300, width: "45%", color: "#808080"
    },
    bankName: {
        ...commonStyles.fs14_600, width: "55%"
    }
})