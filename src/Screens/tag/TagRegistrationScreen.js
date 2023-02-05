import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import CustomHeader from '../../Components/CustomHeader'
import { ScrollView } from 'react-native'
import CustomInputBox from '../../Components/CustomInputBox'
import { COLORS, SIZES } from '../../Constant/Color'
import { StyleSheet } from 'react-native'
import RichText from '../../Components/RichText'
import { Image } from 'react-native'
import { Button } from 'react-native-paper'
import CustomDropdownComponent from '../../Components/CustomDropdownComponent'
import { data } from '../orders/CreateOrderModal'
import { AddressBackSvg, AddressFrontSvg } from '../../Components/svg/BackSvg'

export default function TagRegistrationScreen1({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader title="Tag Registration" navigation={navigation} />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ paddingHorizontal: 20, paddingBottom: 16 }}>
                    <CustomInputBox
                        heading="Mobile number"
                        placeholder="Enter mobile number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Tag serial number"
                        placeholder="Enter serial number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />
                    <Text />

                    <Text style={{ ...commonStyles.fs16_500 }}>Customer details</Text>
                    <View style={styles.customerDetails}>
                        <RichText
                            title="Name"
                            value="Radhe Shyam Kumawat"
                        />
                        <RichText
                            title="Customer ID"
                            value="6045679"
                        />
                    </View>

                    <CustomInputBox
                        heading="Vehicle number"
                        placeholder="Enter vehicle number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <Text style={{ ...commonStyles.fs13_400, color: "#999", marginBottom: -12, marginTop: 12 }}>
                        Vehicle class
                    </Text>
                    <CustomDropdownComponent
                        placeholder="Vehicle class"
                        data={data}
                        width={SIZES.width / 1.1}
                    />
                    <View style={{ marginBottom: -18 }} />

                    <CustomInputBox
                        heading="Vehicle type"
                        placeholder="Enter vehicle type"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />
                    <Text />

                    <Text style={{ ...commonStyles.fs13_400, color: "#999" }}>RC Copy Photo</Text>
                    <View style={{ ...commonStyles.rowBetween }}>
                        <View style={styles.addressProf}>
                            <AddressFrontSvg />
                        </View>
                        <View style={styles.addressProf}>
                            <AddressBackSvg />
                        </View>
                    </View>
                    <Text />

                    <Text style={{ ...commonStyles.fs13_400, color: "#999" }}>Cost details</Text>
                    <View style={styles.customerDetails}>
                        <RichText
                            title="Tag cost"
                            value="₹50"
                        />
                        <RichText
                            title="Security deposite"
                            value="₹100"
                        />
                        <RichText
                            title="Wallet balance"
                            value="250"
                        />
                        <RichText
                            title="First time load balance"
                            value="₹100"
                        />
                        <RichText
                            title="Total cost"
                            value="₹500"
                        />
                    </View>
                    <Text />

                    <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                        navigation.navigate("TagReplacementScreen")
                    }}>
                        Submit
                    </Button>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    customerDetails: {
        elevation: 9, shadowColor: "#999", backgroundColor: COLORS.bg, padding: 20, borderRadius: 8,
        paddingTop: 2, marginTop: 8
    },
    addressProf: {
        elevation: 9, shadowColor: "#999",
        backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 8,
        width: "47%",
    },
    saveBtn: {
        width: SIZES.width / 1.1,
        height: 50,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa",
        alignSelf: "center"
    },
})