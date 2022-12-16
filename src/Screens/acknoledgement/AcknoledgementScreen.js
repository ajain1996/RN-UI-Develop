import { View, Image, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import InventoryHeader from '../inventory/InventoryHeader'
import WalletSearch from '../wallet/WalletSearch'
import WalletFilterIcon from '../wallet/WalletFilterIcon'
import { COLORS } from '../../Constant/Color'
import { StyleSheet } from 'react-native'
import { CustomCheckTickbox } from '../../Components/CustomCheckbox'
import CustomBgBtn from '../../Components/CustomBgBtn'
import { ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import AcknowledgeRequestModal from './AcknowledgeRequestModal'

export default function AcknoledgementScreen({ navigation }) {
    const [acknowledgementData, setacknowledgementData] = React.useState([
        {
            orfid: "ORFID-99887766321",
            bankLogo: require("../../Assets/bank.png"),
            type: "fail",
            btn: "Missing",
        },
        {
            orfid: "ORFID-99887766321",
            bankLogo: require("../../Assets/bank.png"),
            type: "success",
            btn: "New",
        },
        {
            orfid: "ORFID-99887766321",
            bankLogo: require("../../Assets/bank.png"),
            type: "return",
            btn: "Returned",
        },
        {
            orfid: "ORFID-99887766321",
            bankLogo: require("../../Assets/bank.png"),
            type: "fail",
            btn: "Missing",
        },
        {
            orfid: "ORFID-99887766321",
            bankLogo: require("../../Assets/bank.png"),
            type: "success",
            btn: "New",
        },
        {
            orfid: "ORFID-99887766321",
            bankLogo: require("../../Assets/bank.png"),
            type: "return",
            btn: "Returned",
        },
    ]);
    const [acknowledgeReqModVisible, setacknowledgeReqModVisible] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <InventoryHeader title="Acknoledgement" navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View style={{ ...commonStyles.rowBetween }}>
                        <WalletSearch onChange={() => { }} />

                        <WalletFilterIcon
                            onPress={() => {
                                navigation.navigate('AcknoledgementFilter');
                            }}
                        />
                    </View>

                    <Text style={{ ...commonStyles.fs12_400, marginLeft: 6 }}>
                        Select All
                    </Text>
                    <View style={styles.checkWrapper}>
                        <View style={{ ...commonStyles.rowBetween }}>
                            <View style={{ ...commonStyles.rowStart }}>
                                <CustomCheckTickbox
                                    callback={() => { }}
                                />
                                <Text style={{ ...commonStyles.fs12_400, marginLeft: 6 }}>
                                    Missing
                                </Text>
                            </View>

                            <View style={{ ...commonStyles.rowStart }}>
                                <CustomCheckTickbox
                                    callback={() => { }}
                                />
                                <Text style={{ ...commonStyles.fs12_400, marginLeft: 6 }}>
                                    Damaged
                                </Text>
                            </View>

                            <View style={{ ...commonStyles.rowStart }}>
                                <CustomCheckTickbox
                                    callback={() => { }}
                                />
                                <Text style={{ ...commonStyles.fs12_400, marginLeft: 6 }}>
                                    Received
                                </Text>
                            </View>
                        </View>
                    </View>

                    {acknowledgementData.map((item, index) => {
                        return (
                            <View style={styles.mainWrapper} key={index}>
                                <View style={{ ...commonStyles.rowBetween }}>
                                    <View>
                                        <Image
                                            source={item.bankLogo}
                                            resizeMode="contain"
                                            style={{ width: 90, height: 30 }}
                                        />
                                        <Text style={{ ...commonStyles.fs13_400, marginTop: 12, marginLeft: 4 }}>
                                            {item?.orfid}
                                        </Text>
                                    </View>
                                    <CustomBgBtn
                                        text={item?.btn}
                                        type={item?.type}
                                        onPress={() => { }}
                                    />
                                </View>

                                <View style={styles.divider} />
                                <View style={{ ...commonStyles.rowBetween }}>
                                    <View style={{ ...commonStyles.rowStart }}>
                                        <CustomCheckTickbox
                                            callback={() => { }}
                                        />
                                        <Text style={{ ...commonStyles.fs12_400, marginLeft: 6 }}>
                                            Missing
                                        </Text>
                                    </View>

                                    <View style={{ ...commonStyles.rowStart }}>
                                        <CustomCheckTickbox
                                            callback={() => { }}
                                        />
                                        <Text style={{ ...commonStyles.fs12_400, marginLeft: 6 }}>
                                            Damaged
                                        </Text>
                                    </View>

                                    <View style={{ ...commonStyles.rowStart }}>
                                        <CustomCheckTickbox
                                            callback={() => { }}
                                        />
                                        <Text style={{ ...commonStyles.fs12_400, marginLeft: 6 }}>
                                            Received
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>

            <Button
                style={styles.submitBtn}
                textColor="#fff"
                onPress={() => { setacknowledgeReqModVisible(true) }}>
                Submit
            </Button>

            <AcknowledgeRequestModal
                modalVisible={acknowledgeReqModVisible}
                callback={() => { setacknowledgeReqModVisible(false); }}
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    checkWrapper: {
        elevation: 9, shadowColor: "#999",
        backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 50,
    },
    checkbox: {
        width: 20, height: 20, borderRadius: 5,
        borderWidth: 1, borderColor: "#000",
    },
    mainWrapper: {
        elevation: 9, shadowColor: "#999",
        backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 8,
        marginTop: 16
    },
    missiingBtn: {
        backgroundColor: "#F1E0E4",
        paddingHorizontal: 16,
        height: 30,
        ...commonStyles.centerStyles,
        borderRadius: 50
    },
    divider: {
        width: "100%", height: 1, backgroundColor: "#ddd", marginVertical: 16
    },
    submitBtn: {
        backgroundColor: COLORS.theme,
        height: 54,
        ...commonStyles.centerStyles,
        borderRadius: 60,
        marginHorizontal: 16,
        marginBottom: 12
    },
})