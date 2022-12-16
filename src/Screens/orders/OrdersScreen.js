import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import WalletFilterIcon from '../wallet/WalletFilterIcon'
import WalletSearch from '../wallet/WalletSearch'
import { COLORS } from '../../Constant/Color'
import { Button } from 'react-native-paper'
import OrderHeader from './OrderHeader'
import CreateOrderModal from './CreateOrderModal'

export default function OrdersScreen({ navigation }) {
    const [requestType, setrequestType] = React.useState(false);
    const [requestModalShow, setrequestModalShow] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <OrderHeader title="Order" navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{ ...commonStyles.rowBetween }}>
                        <WalletSearch onChange={() => { }} />

                        <WalletFilterIcon
                            onPress={() => {
                                navigation.navigate('InventoryFilterScreen');
                            }}
                        />
                    </View>

                    {
                        [1, 2, 3, 4, 5, 6].map((item, index) => {
                            return (
                                <View style={styles.requestItem} key={index}>
                                    <View style={{ ...commonStyles.rowBetween }}>
                                        <View style={{ marginTop: -14 }}>
                                            <Text style={{ ...commonStyles.fs18_700 }}>TRR:8844851</Text>
                                            <Text style={styles.orderNo}>
                                                Order no. TQR:8794646
                                            </Text>
                                        </View>

                                        <View style={{ alignItems: "center" }}>
                                            <Text style={{ ...commonStyles.fs16_400 }}>Rs:400</Text>
                                            <Button style={styles.btnText} textColor="#F4911A"
                                                onPress={() => { setrequestModalShow(true) }}
                                            >
                                                Pending
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
                <Text />
            </ScrollView>

            <CreateOrderModal
                modalVisible={requestModalShow}
                callback={() => { setrequestModalShow(false) }}
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    requestItem: {
        elevation: 9, marginTop: 16,
        shadowColor: COLORS.shadowColor,
        backgroundColor: COLORS.bg,
        padding: 18, borderRadius: 6
    },
    timeDivider: {
        width: 1, height: 18,
        backgroundColor: "#dcdcdc",
        marginHorizontal: 10,
    },
    orderNo: {
        ...commonStyles.fs13_400, color: "#909091", marginTop: 12
    },
    btnText: {
        backgroundColor: "#F1EDE7", paddingHorizontal: 10,
        marginTop: 12
    }
})