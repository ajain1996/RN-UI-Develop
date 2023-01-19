import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles'
import BackSvg from './svg/BackSvg'

export default function CustomHeader({ title, navigation }) {
    return (
        <View style={{ ...commonStyles.rowBetween, marginVertical: 4, paddingRight: 16 }}>
            <BackSvg onPress={() => { navigation.goBack() }} />
            <Text style={{ ...commonStyles.fs16_500 }}>{title}</Text>

            <Text style={{ ...commonStyles.fs16_500 }} />
        </View>
    )
}
