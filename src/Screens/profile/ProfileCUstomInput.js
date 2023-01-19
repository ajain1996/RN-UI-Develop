import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { COLORS } from '../../Constant/Color'
import Svg from '../../utils/Svg'

export default function ProfileCUstomInput({ icon, onChange, title, placeholder }) {
    return (
        <View style={{}}>
            <Text style={styles.nameText}>{title}</Text>
            <View style={styles.nameInputContainer}>
                <View style={{ padding: 4 }}>
                    <Svg width="22" height="22" source={icon} />
                </View>
                <View style={styles.inputDivider} />
                <TextInput
                    placeholder={placeholder ? placeholder : ""}
                    placeholderTextColor="#63798E"
                    style={{ backgroundColor: COLORS.bg, width: "85%", color: "#000" }}
                    onChangeText={onChange}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nameText: {
        ...commonStyles.fs12_400, color: COLORS.inputHeading
    },
    nameInputContainer: {
        ...commonStyles.rowStart,
        elevation: 10, shadowColor: COLORS.shadowColor,
        backgroundColor: COLORS.bg,
        borderRadius: 50,
        height: 50,
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginTop: 6
    },
    inputDivider: {
        width: 1.6, height: 32,
        backgroundColor: "#C0D8F0",
        marginHorizontal: 10,
        opacity: 0.4
    }
})