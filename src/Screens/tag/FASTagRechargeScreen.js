import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import CustomHeader from '../../Components/CustomHeader'
import { ScrollView } from 'react-native'
import CustomInputBox from '../../Components/CustomInputBox'
import { COLORS, SIZES } from '../../Constant/Color'
import ProfileAccordian from '../profile/ProfileAccordian'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import RichText from '../../Components/RichText'

export default function FASTagRechargeScreen({ navigation }) {
    const [selectBank, setselectBank] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader title="FASTag Recharge" navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingBottom: 16 }}>
                    <CustomInputBox
                        heading="Bank Name"
                        placeholder="Select bank"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />
                    <Text />

                    <Text style={{ ...commonStyles.fs13_400, color: "#999" }}>Select bank</Text>
                    <ProfileAccordian
                        showMasterDetails={selectBank}
                        setshowMasterDetails={setselectBank}
                        title="Select bank"
                        callBack={() => { }}
                    />
                    <Text />

                    <Text style={{ ...commonStyles.fs13_400, color: "#999" }}>Input type</Text>
                    <ProfileAccordian
                        showMasterDetails={selectBank}
                        setshowMasterDetails={setselectBank}
                        title="Mobile number"
                        callBack={() => { }}
                    />

                    <CustomInputBox
                        heading="Mobile number"
                        placeholder="Enter registered Mobile number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />
                    <Text />

                    <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                        navigation.navigate("NPCITagStatusScreen")
                    }}>
                        Submit
                    </Button>

                    <Text />
                    <Text style={{ ...commonStyles.fs18_500 }}>Customer Documents</Text>

                    <View style={styles.mainWrapper}>
                        <RichText
                            title="Customer ID"
                            value="29292929292"
                        />
                        <RichText
                            title="Customer name"
                            value="Radhe Shyam Kumawat"
                        />
                        <RichText
                            title="Mobile no."
                            value="9898989898"
                        />
                        <RichText
                            title="Wallet balance"
                            value="₹23.00"
                        />
                        <RichText
                            title="Max. Top up limit"
                            value="₹97884"
                        />
                    </View>

                    <CustomInputBox
                        heading="Amount"
                        placeholder="Enter recharge amount"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <Text style={{ fontSize: 10, color: "red", marginTop: 9 }}>
                        *Insufficient fund in agent wallet
                    </Text>
                    <Text style={{ fontSize: 10, color: "red", marginBottom: 10 }}>
                        Please recharge your wallet first
                    </Text>

                    <Button style={styles.saveBtn2} textColor="#fff" onPress={() => {
                        navigation.navigate("NPCITagStatusScreen")
                    }}>
                        Submit
                    </Button>
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
    saveBtn2: {
        width: SIZES.width / 1.1,
        height: 50,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa",
        alignSelf: "center"
    },
    mainWrapper: {
        elevation: 8, shadowColor: '#999',
        backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 9,
        marginTop: 12, paddingTop: 2
    },
})