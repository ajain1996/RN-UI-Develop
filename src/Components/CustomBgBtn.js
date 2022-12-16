import { View, Text } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native'
import { StyleSheet } from 'react-native'
import { commonStyles } from '../utils/Styles'
import { COLORS } from '../Constant/Color'

export default function CustomBgBtn({ text, onPress, width, height, type, bg, color }) {
    if (type === "fail") {
        return (
            <TouchableHighlight
                style={{
                    ...styles.missiingBtn, backgroundColor: bg ? bg : "#F1E0E4",
                    width: width ? width : 90, height: height ? height : 30,
                }}
                onPress={onPress}
            >
                <Text style={{ ...commonStyles.fs12_400, color: color ? color : "#F22128" }}>
                    {text}
                </Text>
            </TouchableHighlight>
        )
    } else if (type === "success") {
        return (
            <TouchableHighlight
                style={{
                    ...styles.missiingBtn, backgroundColor: bg ? bg : "#DDEFE6",
                    width: width ? width : 90, height: height ? height : 30,
                }}
                onPress={onPress}
            >
                <Text style={{ ...commonStyles.fs12_400, color: color ? color : "green" }}>
                    {text}
                </Text>
            </TouchableHighlight>
        )
    } else if (type === "return") {
        return (
            <TouchableHighlight
                style={{
                    ...styles.missiingBtn, backgroundColor: bg ? bg : "#DCEAF9",
                    width: width ? width : 90, height: height ? height : 30,
                }}
                onPress={onPress}
            >
                <Text style={{ ...commonStyles.fs12_400, color: color ? color : COLORS.theme }}>
                    {text}
                </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    missiingBtn: {
        ...commonStyles.centerStyles,
        borderRadius: 50
    }
})