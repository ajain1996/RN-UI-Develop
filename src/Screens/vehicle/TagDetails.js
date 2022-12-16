import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../Constant/Color'
import { commonStyles } from '../../utils/Styles'
import { TouchableHighlight } from 'react-native'

export default function TagDetails({ item }) {
    return (
        <View style={styles.select}>
            <View style={styles.blueBg}>
                <View style={styles.borderedText}>
                    <Text style={{ ...commonStyles.fs14_500 }}>
                        605040-OOB-22456
                    </Text>
                </View>
                <TouchableHighlight
                    style={[styles.activeBtn]}
                    onPress={() => { navigation.navigate("CustomerDetailsScreen") }}
                >
                    <Text style={styles.activeBtnText}>Active</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.richTxt}>
                <Text style={{ ...commonStyles.fs13_400, color: "#999" }}>
                    605040-OOB-22456
                </Text>
                <Text style={{ ...commonStyles.fs13_400, color: '#999' }}>
                    06:37 PM  |  30-09-2022
                </Text>
            </View>
            <View style={styles.richTxt}>
                <Text style={{ ...commonStyles.fs13_400 }}>
                    3417xxxxxxxxxxxxxx8962
                </Text>
                <Text style={{ ...commonStyles.fs14_500 }}>
                    VC-4
                </Text>
            </View>

            <View style={styles.richTxt}>
                <Text style={{ ...commonStyles.fs13_400 }}>
                    Threshold limit: ₹100
                </Text>
                <Text style={{ ...commonStyles.fs14_500, color: COLORS.theme }}>
                    View more
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    select: {
        padding: 16
    },
    richTxt: {
        ...commonStyles.rowBetween, marginTop: 14, paddingHorizontal: 6
    },
    blueBg: {
        padding: 10, backgroundColor: "#E3EBF9", ...commonStyles.rowBetween
    },
    borderedText: {
        borderWidth: 1, borderColor: "#000", paddingHorizontal: 6, borderRadius: 4
    },
    activeBtn: {
        height: 32, paddingHorizontal: 22,
        backgroundColor: "#E1F0EA",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        elevation: 22, shadowColor: "#aaa",
    },
    activeBtnText: {
        ...commonStyles.fs13_500, color: COLORS.green
    }
})