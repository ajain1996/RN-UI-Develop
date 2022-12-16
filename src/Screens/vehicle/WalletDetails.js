import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../Constant/Color'
import { commonStyles } from '../../utils/Styles'
import { TouchableHighlight } from 'react-native'

export default function WalletDetails({ item }) {
    return (
        <View style={styles.select}>
            <View style={styles.richTxt}>
                <Text style={{ ...commonStyles.fs13_400, color: "#999" }}>
                    Customer ID
                </Text>
                <Text style={{ ...commonStyles.fs13_400, color: '#999' }}>
                    Wallet balance
                </Text>
            </View>
            <View style={styles.richTxt}>
                <Text style={{ ...commonStyles.fs13_600 }}>
                    Customer ID
                </Text>
                <Text style={{ ...commonStyles.fs13_600 }}>
                    ₹1527
                </Text>
            </View>

            <View style={styles.richTxt}>
                <View style={{}}>
                    <Text style={{ ...commonStyles.fs13_600 }}>
                        Kamlesh Natwadiya
                    </Text>
                    <Text style={{ ...commonStyles.fs13_600, marginTop: 4 }}>
                        9988776655
                    </Text>
                </View>
                <TouchableHighlight
                    style={[styles.saveBtn]}
                    onPress={() => { navigation.navigate("CustomerDetailsScreen") }}
                >
                    <Text style={{ ...commonStyles.fs13_500, color: COLORS.green }}>Active</Text>
                </TouchableHighlight>
            </View>

            <TouchableHighlight style={{ alignItems: "center", paddingVertical: 8, marginTop: 12 }}
                onPress={() => { }} underlayColor="#f7f8f9"
            >
                <Text style={{ ...commonStyles.fs13_500, color: COLORS.theme }}>View More</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    select: {
        padding: 16
    },
    saveBtn: {
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa",
        height: 32, paddingHorizontal: 24,
        backgroundColor: "#E1F0EA"
    },
    richTxt: {
        ...commonStyles.rowBetween, marginTop: 14, paddingHorizontal: 6
    },
})