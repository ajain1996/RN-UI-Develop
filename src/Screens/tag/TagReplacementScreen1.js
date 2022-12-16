import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import CustomHeader from '../../Components/CustomHeader'
import { ScrollView } from 'react-native'
import CustomInputBox from '../../Components/CustomInputBox'
import { COLORS, SIZES } from '../../Constant/Color'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function TagReplacementScreen1({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader title="Tag Replacement" navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingBottom: 16 }}>
                    <CustomInputBox
                        heading="Bank name"
                        placeholder="Enter bank name"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Tag serial number"
                        placeholder="Enter serial number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Mobile number"
                        placeholder="Enter mobile number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <Text style={{ fontSize: 10, color: "red", marginTop: 9 }}>
                        *details not found
                    </Text>
                    <Text style={{ fontSize: 10, color: "red", marginBottom: 10 }}>
                        Please make sure entered details is correct
                    </Text>
                    <Text />

                    <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                        navigation.navigate("TagRegistrationScreen1")
                    }}>
                        Next
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