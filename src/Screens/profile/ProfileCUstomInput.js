import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Image } from 'react-native'
import { COLORS } from '../../Constant/Color'

export default function ProfileCUstomInput({ icon, onChange, title }) {
    return (
        <View style={{}}>
            <Text style={styles.nameText}>{title}</Text>
            <View style={styles.nameInputContainer}>
                <Image
                    source={icon}
                    style={{ width: 24, height: 24 }}
                />
                <View style={styles.inputDivider} />
                <TextInput
                    placeholder=''
                    style={{ backgroundColor: COLORS.bg, width: "85%" }}
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