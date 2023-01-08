import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import ImgTap from '../../Components/ImgTap'
import BackBtn from '../../Components/BackBtn'
import PlusCircleSvg from '../../Components/svg/PlusCircleSvg'

export default function OrderHeader({ title, navigation }) {
    return (
        <>
            <View style={{ ...commonStyles.rowBetween, marginVertical: 4, paddingRight: 16 }}>
                <BackBtn onPress={() => { navigation.goBack() }} />
                <Text style={{ ...commonStyles.fs16_500 }}>{title}</Text>

                <PlusCircleSvg onPress={() => { }} />
            </View>
        </>
    )
}