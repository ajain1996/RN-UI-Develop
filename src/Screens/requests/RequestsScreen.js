import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import InventoryHeader from '../inventory/InventoryHeader'
import WalletFilterIcon from '../wallet/WalletFilterIcon'
import WalletSearch from '../wallet/WalletSearch'
import ProfileAccordian from '../profile/ProfileAccordian'
import { COLORS } from '../../Constant/Color'
import { Button } from 'react-native-paper'
import RequestModal from './RequestModal'
import Svg from '../../utils/Svg'
import Return from '../../Assets/svg/return.svg';

export default function RequestsScreen({ navigation }) {
    const [requestType, setrequestType] = React.useState(false);
    const [requestModalShow, setrequestModalShow] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <InventoryHeader title="Requests" navigation={navigation} />
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{ ...commonStyles.rowBetween }}>
                        <WalletSearch onChange={() => { }} />

                        <WalletFilterIcon
                            onPress={() => {
                                navigation.navigate('InventoryFilterScreen');
                            }}
                        />
                    </View>

                    <ProfileAccordian
                        showMasterDetails={requestType}
                        setshowMasterDetails={setrequestType}
                        title="Select Request Type"
                        callBack={() => { }}
                    />

                    {requestType ?
                        [1, 2, 3, 4, 5, 6].map((item, index) => {
                            return (
                                <View style={styles.requestItem} key={index}>
                                    <View style={{ ...commonStyles.rowBetween }}>
                                        <View style={{ ...commonStyles.rowStart }}>
                                            <View style={{ marginRight: 10 }}>
                                                <Svg width="16" height="16" source={Return} />
                                            </View>
                                            <Text style={{ ...commonStyles.fs13_400, color: "#909091" }}>Return request</Text>
                                        </View>

                                        <View style={{ ...commonStyles.rowStart }}>
                                            <Text style={{ ...commonStyles.fs13_400, color: "#909091" }}>20:19:36</Text>
                                            <View style={styles.timeDivider} />
                                            <Text style={{ ...commonStyles.fs13_400, color: "#909091" }}>16-09-2022</Text>
                                        </View>
                                    </View>

                                    <View style={{ ...commonStyles.rowBetween, marginTop: 24 }}>
                                        <View>
                                            <Text style={{ ...commonStyles.fs18_700 }}>TRR:8844851</Text>
                                            <Text style={{ ...commonStyles.fs13_400, color: "#909091", marginTop: 8 }}>
                                                Order no. TQR:8794646
                                            </Text>
                                        </View>

                                        <Button style={{ backgroundColor: "#F1EDE7", paddingHorizontal: 10 }} textColor="#F4911A"
                                            onPress={() => { setrequestModalShow(true) }}
                                        >
                                            Pending
                                        </Button>
                                    </View>
                                </View>
                            );
                        })
                        : <></>}
                </View>
                <Text />
            </ScrollView>

            <RequestModal
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
    }
})