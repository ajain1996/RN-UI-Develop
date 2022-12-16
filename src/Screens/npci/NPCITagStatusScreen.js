import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import CustomHeader from '../../Components/CustomHeader'
import { ScrollView } from 'react-native'
import CustomInputBox from '../../Components/CustomInputBox'
import { COLORS, SIZES } from '../../Constant/Color'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { TouchableHighlight } from 'react-native'

export default function NPCITagStatusScreen({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader title="NPCI Tag Status" navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingBottom: 16 }}>
                    <CustomInputBox
                        heading="Search with"
                        placeholder="Vehicle number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Vehicle number"
                        placeholder="Enter vehicle number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <Text style={{ fontSize: 10, color: "red", marginTop: 9 }}>
                        *details not found
                    </Text>
                    <Text style={{ fontSize: 10, color: "red", marginBottom: 10 }}>
                        Please make sure entered details is correct
                    </Text>

                    <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                        navigation.navigate("VehicleTrackingScreen")
                    }}>
                        Submit
                    </Button>

                    <View style={{ width: "100%", height: 1, backgroundColor: "#dcdcdc", marginVertical: 20 }} />

                    {[1, 2, 3, 4].map((item, index) => {
                        return (
                            <View style={styles.mainWrapper} key={index}>
                                <View style={styles.priceWrapper}>
                                    <View style={{ ...commonStyles.rowBetween }}>
                                        <View style={{ borderWidth: 1, borderColor: "#000", paddingHorizontal: 8, borderRadius: 5 }}>
                                            <Text style={{ ...commonStyles.fs14_600 }}>
                                                RJ 45 CM 9949
                                            </Text>
                                        </View>
                                        <Text style={{ ...commonStyles.fs12_400, color: "#999" }}>
                                            22-10-2022
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        ...commonStyles.rowBetween,
                                        marginTop: 10,
                                        paddingHorizontal: 4,
                                    }}>
                                    <Text style={{ ...commonStyles.fs13_400 }}>
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
                                    <Image
                                        source={require('../../Assets/bank.png')}
                                        resizeMode="stretch"
                                        style={{ width: 65, height: 24 }}
                                    />
                                    <TouchableHighlight
                                        style={[commonStyles.saveBtn, {
                                            height: 32, paddingHorizontal: 22, backgroundColor: "#E1F0EA"
                                        }]}
                                        onPress={() => { navigation.navigate("CustomerDetailsScreen") }}
                                    >
                                        <Text style={{ ...commonStyles.fs13_500, color: COLORS.green }}>Active</Text>
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
    saveBtn: {
        width: SIZES.width / 2.6,
        height: 50,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa",
        alignSelf: "center"
    },
    mainWrapper: {
        elevation: 9,
        shadowColor: COLORS.shadowColor,
        backgroundColor: COLORS.bg,
        width: '100%',
        padding: 12,
        marginTop: 14,
        borderRadius: 8,
    },
})