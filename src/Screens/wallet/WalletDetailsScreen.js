import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import InventoryHeader from '../inventory/InventoryHeader'
import { ScrollView } from 'react-native'
import RichText from '../../Components/RichText'
import { StyleSheet } from 'react-native'
import { COLORS } from '../../Constant/Color'
import { RenderDocument } from '../customer-details/CustomerDetailsScreen'

export default function WalletDetailsScreen({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <InventoryHeader
                title="Wallet Details"
                navigation={navigation}
            />

            <ScrollView>
                <View style={{ paddingHorizontal: 16, paddingTop: 4 }}>
                    <Text style={{ ...commonStyles.fs18_500 }}>Customer Details</Text>

                    <View style={styles.mainWrapper}>
                        <RichText
                            title="Name"
                            value="Rakesh Kumar"
                        />
                        <RichText
                            title="Mobile No."
                            value="9998887776"
                        />
                        <RichText
                            title="Customer ID"
                            value="427007"
                        />
                        <RichText
                            title="Email ID"
                            value="exampleemail@gmail.com"
                        />
                        <RichText
                            title="KYC status"
                            value="KYC"
                        />
                        <RichText
                            title="Wallet balance"
                            value="₹1527"
                        />
                        <RichText
                            title="Wallet limit"
                            value="₹200000"
                        />
                        <RichText
                            title="Customer type"
                            value="B2C onboarding through Agents KMBL"
                        />
                    </View>
                    <Text />

                    <Text style={{ ...commonStyles.fs18_500 }}>Customer Documents</Text>

                    <View style={{ ...commonStyles.rowBetween }}>
                        <RenderDocument
                            title="Address Proof Front"
                            image={require("../../Assets/wallet-details.png")}
                            onPress={() => { navigation.navigate("PrivacyPolicyScreen") }}
                            onPress2={() => { navigation.navigate("CustomerRegistrationScreen") }}
                        />
                        <RenderDocument
                            title="Address Proof Back"
                            image={require("../../Assets/wallet-details.png")}
                            onPress={() => { navigation.navigate("TermsAndConditions") }}
                        />
                    </View>

                    <View style={styles.mainWrapper}>
                        <RichText
                            title="Agent details"
                            value="Chairboard Private LTD / 238140"
                        />
                        <RichText
                            title="Partner details"
                            value="Vedika Corporation / 364"
                        />
                        <RichText
                            title="LC code"
                            value="NA"
                        />
                        <RichText
                            title="Wallet status"
                            value="Active"
                        />
                        <RichText
                            title="Master AC. Balance"
                            value="₹0.000"
                        />
                        <RichText
                            title="Threshold limit"
                            value="₹0.000"
                        />
                        <RichText
                            title="Credited on"
                            value="03/12/2021, 04:33:53"
                        />
                    </View>

                    <Text />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        elevation: 8, shadowColor: '#999',
        backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 9,
        marginTop: 12, paddingTop: 2
    },
    vehicleDocuments: {
        elevation: 9, shadowColor: "#999", backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 9, width: "47%", alignItems: "center"
    }
})