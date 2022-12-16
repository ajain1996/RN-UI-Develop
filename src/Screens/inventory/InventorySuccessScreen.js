import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { Button } from 'react-native-paper'
import { COLORS, SIZES } from '../../Constant/Color'

export default function InventorySuccessScreen({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF, justifyContent: 'space-between', paddingBottom: 28 }}>
            <Image
                source={require("../../Assets/back.png")}
                resizeMode="contain"
                style={{ width: 70, height: 70 }}
            />

            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require("../../Assets/tick-mark.png")}
                    resizeMode="contain"
                    style={{ width: 140, height: 140 }}
                />

                <View style={{ width: "70%", marginTop: 20 }}>
                    <Text style={{ ...commonStyles.fs15_400, textAlign: "center", lineHeight: 24 }}>
                        Your request has been submitted successfully ORFID-998754631 is your service request no.
                    </Text>
                </View>

                <View style={{ width: "70%", marginTop: 22 }}>
                    <Text style={{ ...commonStyles.fs15_400, textAlign: "center", lineHeight: 24 }}>
                        Note this No. for Future Reference
                    </Text>
                </View>
            </View>

            <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                navigation.navigate("RequestsScreen")
            }}>
                Back to Dashboard
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
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