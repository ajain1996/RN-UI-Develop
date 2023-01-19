import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import InventoryHeader from '../inventory/InventoryHeader'
import WalletSearch from '../wallet/WalletSearch'
import WalletFilterIcon from '../wallet/WalletFilterIcon'
import { ScrollView } from 'react-native'
import ProfileAccordian from '../profile/ProfileAccordian'
import { Image } from 'react-native'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../Constant/Color'
import { TouchableHighlight } from 'react-native'
import CustomDropdownComponent from '../../Components/CustomDropdownComponent'
import { data } from '../orders/CreateOrderModal'
import SecurityUser from '../../Assets/svg/security-user.svg';
import Svg from '../../utils/Svg'

export default function InsuranceTrackerScreen({ navigation }) {
    const [selectBankAcc, setselectBankAcc] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <InventoryHeader
                title="Insurance tracker"
                navigation={navigation}
            />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View style={{ ...commonStyles.rowBetween }}>
                        <WalletSearch onChange={() => { }} />

                        <WalletFilterIcon
                            onPress={() => {
                                navigation.navigate('InventoryFilterScreen');
                            }}
                        />
                    </View>

                    <CustomDropdownComponent
                        placeholder="Select Bank"
                        data={data}
                        width={SIZES.width / 1.1}
                    />

                    <View style={{ width: "100%", height: 1, backgroundColor: "#ddd", marginVertical: 24 }} />

                    <Text style={{ ...commonStyles.fs14_600 }}>Inventory</Text>

                    {[1, 2, 3, 4].map((item, index) => {
                        return (
                            <View style={styles.mainWrapper} key={index}>
                                <View style={styles.priceWrapper}>
                                    <View style={{ ...commonStyles.rowStart }}>
                                        <Svg width="24" height="24" source={SecurityUser} />
                                        <View style={{ marginLeft: 8 }}>
                                            <Text style={{ ...commonStyles.fs14_600 }}>
                                                606060-00B-252566
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={{ ...commonStyles.fs15_500, color: COLORS.theme }}>
                                        ₹50
                                    </Text>
                                </View>

                                <View style={{ ...commonStyles.rowBetween, marginTop: 10 }}>
                                    <Image
                                        source={require('../../Assets/bank.png')}
                                        resizeMode="stretch"
                                        style={{ width: 65, height: 24 }}
                                    />
                                    <View style={{ ...commonStyles.rowStart }}>
                                        <Text style={{ ...commonStyles.fs12_400, color: '#999' }}>
                                            01:09:55
                                        </Text>
                                        <View style={{ width: 1, height: 14, backgroundColor: "#ddd", marginHorizontal: 10 }} />
                                        <Text style={{ ...commonStyles.fs12_400, color: '#999' }}>
                                            16-09-2022
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        ...commonStyles.rowBetween,
                                        marginTop: 10,
                                        paddingHorizontal: 4,
                                    }}>
                                    <Text style={{ ...commonStyles.fs12_400, color: 'orange' }}>
                                        RJFID998546
                                    </Text>
                                    <Text style={{ ...commonStyles.fs12_400, color: '#999' }}>
                                        VC-4
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        ...commonStyles.rowBetween,
                                        marginTop: 10,
                                        paddingHorizontal: 4,
                                    }}>
                                    <View>
                                        <Text style={{ ...commonStyles.fs12_400 }}>Suresh Kumar Kymawat</Text>
                                        <Text style={{ ...commonStyles.fs12_400, marginTop: 8 }}>9158628546</Text>
                                    </View>
                                    <TouchableHighlight
                                        style={[commonStyles.saveBtn, { height: 34, paddingHorizontal: 26 }]}
                                        onPress={() => { navigation.navigate("CustomerDetailsScreen") }}>
                                        <Text style={{ ...commonStyles.fs13_500, color: COLORS.red }}>Report</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        );
                    })}
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        elevation: 9,
        shadowColor: COLORS.shadowColor,
        backgroundColor: COLORS.bg,
        width: '100%',
        padding: 12,
        marginTop: 14,
        borderRadius: 8,
    },
    priceWrapper: {
        ...commonStyles.rowBetween,
        backgroundColor: '#E3EBF9',
        padding: 10,
    },
});