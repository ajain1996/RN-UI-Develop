import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import PlusCircleSvg from '../../Components/svg/PlusCircleSvg'
import { BackSvg2 } from '../../Components/svg/BackSvg'

export default function OrderHeader({ title, navigation }) {
    return (
        <>
            <View style={{ ...commonStyles.rowBetween, marginVertical: 4, paddingHorizontal: 16 }}>
                <BackSvg2 onPress={() => { navigation.goBack() }} />
                <Text style={{ ...commonStyles.fs16_500 }}>{title}</Text>

                <PlusCircleSvg onPress={() => { }} />
            </View>
        </>
    )
}