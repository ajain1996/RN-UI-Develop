import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import OrderHeader from './OrderHeader';
import { commonStyles } from '../../utils/Styles';
import { COLORS, SIZES } from '../../Constant/Color';
import { Button } from 'react-native-paper';
import CompleteOrderModal from './CompleteOrderModal';
import OrderConfirmModal from './OrderConfirmModal';

export default function OrderSummaryScreen({ navigation }) {
    const [orderCompleteModalVisible, setorderCompleteModalVisible] =
        React.useState(false);
    const [orderConfirmModalVisible, setorderConfirmModalVisible] =
        React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <OrderHeader title="Order Summary" navigation={navigation} />

            <ScrollView>
                <View
                    style={{
                        paddingHorizontal: 16,
                        height: SIZES.height / 1.16,
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        <View style={{ marginBottom: 16 }}>
                            <RenderBalanceDetails />
                        </View>

                        {[1, 2, 3].map((item, index) => {
                            return (
                                <View style={styles.balanceDetails} key={index}>
                                    <View style={{ ...commonStyles.rowBetween }}>
                                        <View>
                                            <Image
                                                source={require('../../Assets/bank.png')}
                                                resizeMode="contain"
                                                style={{ width: 94, height: 30 }}
                                            />

                                            <View style={{ ...commonStyles.rowStart, marginTop: 9 }}>
                                                <Text
                                                    style={{ ...commonStyles.fs13_400, color: '#909091' }}>
                                                    Cost: 20
                                                </Text>
                                                <View style={styles.timeDivider} />
                                                <Text
                                                    style={{ ...commonStyles.fs13_400, color: '#909091' }}>
                                                    Oty: 20
                                                </Text>
                                            </View>
                                        </View>

                                        <View>
                                            <Text style={{ ...commonStyles.fs15_400 }}>VC-4</Text>
                                            <Text style={{ ...commonStyles.fs16_600, marginTop: 9 }}>
                                                ₹400
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                    </View>

                    <Button
                        style={styles.submitBtn}
                        textColor="#fff"
                        onPress={() => {
                            setorderCompleteModalVisible(true);
                        }}>
                        Submit
                    </Button>
                </View>
            </ScrollView>

            <CompleteOrderModal
                modalVisible={orderCompleteModalVisible}
                callback={() => {
                    setorderCompleteModalVisible(false);
                }}
                editCallback={() => {
                    setorderCompleteModalVisible(false);
                    setorderConfirmModalVisible(true);
                }}
            />

            <OrderConfirmModal
                modalVisible={orderConfirmModalVisible}
                callback={() => {
                    setorderConfirmModalVisible(false);
                }}
                navigation={navigation}
            />
        </View>
    );
}

const RenderBalanceDetails = ({ }) => {
    return (
        <View style={styles.balanceDetails}>
            <View style={{ ...commonStyles.rowStart }}>
                <Text style={{ ...commonStyles.fs14_400, color: '#999', width: '60%' }}>
                    Available wallet balance:
                </Text>
                <Text style={{ ...commonStyles.fs14_600, width: '40%' }}>₹89.00</Text>
            </View>

            <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                <Text style={{ ...commonStyles.fs14_400, color: '#999', width: '60%' }}>
                    Order value:
                </Text>
                <Text style={{ ...commonStyles.fs14_600, width: '40%' }}>₹400.00</Text>
            </View>

            <View style={{ ...commonStyles.rowStart, marginTop: 12 }}>
                <Text style={{ ...commonStyles.fs14_400, color: '#999', width: '60%' }}>
                    Remaining Balance:
                </Text>
                <Text style={{ ...commonStyles.fs14_600, width: '40%' }}>₹00.00</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    balanceDetails: {
        elevation: 9,
        shadowColor: COLORS.shadowColor,
        backgroundColor: COLORS.bg,
        padding: 18,
        borderRadius: 9,
        marginTop: 12,
    },
    timeDivider: {
        width: 1,
        height: 18,
        backgroundColor: '#dcdcdc',
        marginHorizontal: 10,
    },
    submitBtn: {
        backgroundColor: COLORS.theme,
        height: 54,
        ...commonStyles.centerStyles,
        borderRadius: 60,
        marginTop: 20,
    },
});
