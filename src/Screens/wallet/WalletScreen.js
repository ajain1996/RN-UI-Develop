import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';
import WalletHeader from './WalletHeader';
import { commonStyles } from '../../utils/Styles';
import { COLORS, SIZES } from '../../Constant/Color';
import { Button } from 'react-native-paper';
import BgIcon from '../../Components/BgIcon';
import WalletFilterIcon from './WalletFilterIcon';
import WalletSearch from './WalletSearch';
import ShadowBg from '../../Components/ShadowBg';
import PaySuccessSvg from '../../Components/svg/PaySuccessSvg';
import PayFailedSvg from '../../Components/svg/PayFailedSvg';

export default function WalletScreen({ navigation }) {
    const [debitCredit, setdebitCredit] = React.useState('All');
    const [walletHistory, setwalletHistory] = React.useState([
        {
            name: 'Tag Cost Refund',
            cost: '800',
            subText: 'Recieved purchase refund...',
            date: '16-09-2022',
            time: '01:03:55',
            type: 'credit',
        },
        {
            name: 'Tag Cost Refund',
            cost: '1000',
            subText: 'Paid 1000 to 8962523452...',
            date: '16-09-2022',
            time: '01:03:55',
            type: 'debit',
        },
        {
            name: 'Tag Cost Refund',
            cost: '1800',
            subText: 'Recieved 800...',
            date: '16-09-2022',
            time: '01:03:55',
            type: 'credit',
        },
        {
            name: 'Tag Cost Refund',
            cost: '800',
            subText: 'Recieved purchase refund...',
            date: '16-09-2022',
            time: '01:03:55',
            type: 'debit',
        },
    ]);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <WalletHeader navigation={navigation} />

            <ScrollView>
                <View style={{ padding: 16 }}>
                    <View style={{ ...commonStyles.rowBetween }}>
                        <WalletSearch onChange={() => { }} />

                        <WalletFilterIcon onPress={() => { navigation.navigate("WalletFilterScreen") }} />
                    </View>

                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: '#ddd',
                            marginTop: 12,
                            marginBottom: 20,
                        }}
                    />

                    <ShadowBg
                        width={SIZES.width / 1.08}
                        height={52}
                        paddingHorizontal={5}
                        childComponent={
                            <View style={{ ...commonStyles.rowBetween, marginTop: 3 }}>
                                <Button
                                    style={
                                        debitCredit === 'All' ? styles.saveBtn : styles.cancelBtn
                                    }
                                    textColor={debitCredit === 'All' ? '#fff' : '#999'}
                                    onPress={() => {
                                        setdebitCredit('All');
                                    }}>
                                    All
                                </Button>

                                <Button
                                    style={
                                        debitCredit === 'Credit' ? styles.saveBtn : styles.cancelBtn
                                    }
                                    textColor={debitCredit === 'Credit' ? '#fff' : '#999'}
                                    onPress={() => {
                                        setdebitCredit('Credit');
                                    }}>
                                    Credit
                                </Button>

                                <Button
                                    style={
                                        debitCredit === 'Debit' ? styles.saveBtn : styles.cancelBtn
                                    }
                                    textColor={debitCredit === 'Debit' ? '#fff' : '#999'}
                                    onPress={() => {
                                        setdebitCredit('Debit');
                                    }}>
                                    Debit
                                </Button>
                                <View style={{ width: 1 }} />
                            </View>
                        }
                    />

                    <Text style={{ ...commonStyles.fs16_600, marginTop: 20 }}>
                        Wallet History
                    </Text>

                    {walletHistory.map((item, index) => {
                        return (
                            <TouchableHighlight key={index} underlayColor="#f7f8f9" onPress={() => {
                                navigation.navigate("WalletDetailsScreen")
                            }} style={{ marginTop: 15 }}>
                                <View style={styles.historyItem}>
                                    <View style={{ ...commonStyles.rowBetween }}>
                                        <View style={{ ...commonStyles.rowStart }}>
                                            {/* pay-success */}
                                            {item?.type === 'credit'
                                                ? <PaySuccessSvg />
                                                : <PayFailedSvg />}
                                            <Text style={{ ...commonStyles.fs16_500, marginLeft: 10 }}>
                                                {item?.name}
                                            </Text>
                                        </View>
                                        <Text
                                            style={{
                                                ...commonStyles.fs16_500,
                                                color: item?.type === 'credit' ? COLORS.success : 'red',
                                            }}>
                                            {item?.type === 'credit' ? '+' : '-'} ₹ {item?.cost}
                                        </Text>
                                    </View>
                                    <View style={{ ...commonStyles.rowBetween }}>
                                        <Text style={styles.subText}>{item?.subText}</Text>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Text style={styles.subText}>16-09-2022</Text>
                                            <Text style={styles.subText}>01:03:55</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            width: '100%',
                                            height: 1,
                                            backgroundColor: '#eaeaea',
                                            marginVertical: 20,
                                        }}
                                    />

                                    <View style={{ ...commonStyles.rowBetween }}>
                                        <View style={{ ...commonStyles.rowStart }}>
                                            <Text style={styles.subText2}>ID:</Text>
                                            <Text style={styles.subText3}>096245465</Text>
                                        </View>

                                        <View style={{ ...commonStyles.rowStart }}>
                                            <Text style={styles.subText2}>Ref No:</Text>
                                            <Text style={styles.subText3}>096245465</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    saveBtn: {
        width: SIZES.width / 3.4,
        height: 45,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
    },
    cancelBtn: {
        width: SIZES.width / 3.4,
        height: 45,
        backgroundColor: 'transparent',
        borderRadius: 100,
        ...commonStyles.centerStyles,
    },
    historyItem: {
        width: SIZES.width / 1.1,
        padding: 16,
        backgroundColor: COLORS.bg,
        elevation: 9,
        shadowColor: COLORS.shadowColor,
        borderRadius: 9,
    },
    recievedIcon: {
        width: 41,
        height: 41,
        borderRadius: 1000,
        backgroundColor: '#DEF1EA',
        ...commonStyles.centerStyles,
    },
    subText: {
        ...commonStyles.fs12_400,
        color: '#999',
    },
    subText2: {
        ...commonStyles.fs14_400,
        color: '#999',
    },
    subText3: {
        ...commonStyles.fs14_500,
        color: '#5A5D5C',
        marginLeft: 4,
    },
});
