import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import InventoryHeader from './InventoryHeader';
import { commonStyles } from '../../utils/Styles';
import WalletSearch from '../wallet/WalletSearch';
import WalletFilterIcon from '../wallet/WalletFilterIcon';
import { COLORS } from '../../Constant/Color';
import { Button } from 'react-native-paper';
import ReturnModal from './ReturnModal';
import { StatusBar } from 'react-native';
import Svg from '../../utils/Svg';
import SecurityUser from '../../Assets/svg/security-user.svg';

export default function InventroyScreen({ navigation }) {
    const [returnmodal, setreturnmodal] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <InventoryHeader title="Requests" navigation={navigation} />
            <StatusBar backgroundColor={COLORS.bg} barStyle="dark-content" />

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

                    <Text style={{ ...commonStyles.fs14_600 }}>Inventory</Text>

                    {[1, 2, 3, 4].map((item, index) => {
                        return (
                            <View style={styles.mainWrapper} key={index}>
                                <View style={styles.priceWrapper}>
                                    <View style={{ ...commonStyles.rowStart }}>
                                        <Svg width="24" height="24" source={SecurityUser} style={{ padding: 0 }} />
                                        <View style={{ marginLeft: 8 }}>
                                            <Text style={{ ...commonStyles.fs14_600 }}>
                                                606060-00B-252566
                                            </Text>
                                            <Text style={{ ...commonStyles.fs10_400 }}>16-09-2022</Text>
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
                                    <Text style={{ ...commonStyles.fs12_500, color: COLORS.green }}>
                                        In Stock
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        ...commonStyles.rowBetween,
                                        marginTop: 10,
                                        paddingHorizontal: 4,
                                    }}>
                                    <Text style={{ ...commonStyles.fs12_400, color: 'orange' }}>
                                        ORFID-99854631
                                    </Text>
                                    <Text style={{ ...commonStyles.fs12_400, color: '#999' }}>
                                        16-09-2022
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        ...commonStyles.rowBetween,
                                        marginTop: 10,
                                        paddingHorizontal: 4,
                                    }}>
                                    <Text style={{ ...commonStyles.fs12_400 }}>VC-4</Text>
                                    <Button
                                        style={[commonStyles.saveBtn, { backgroundColor: COLORS.theme }]}
                                        textColor="#fff"
                                        onPress={() => { setreturnmodal(true); }}>
                                        Return
                                    </Button>
                                </View>
                            </View>
                        );
                    })}
                </View>
                <Text />
            </ScrollView>

            <ReturnModal
                modalVisible={returnmodal}
                callback={() => { setreturnmodal(false) }}
                navigation={navigation}
            />
        </View>
    );
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
