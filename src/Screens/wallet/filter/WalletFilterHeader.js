import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../../utils/Styles'
import { COLORS } from '../../../Constant/Color'
import { BackSvg2 } from '../../../Components/svg/BackSvg'

export default function WalletFilterHeader({ navigation }) {
    return (
        <View style={{ ...commonStyles.rowBetween, marginVertical: 4, marginHorizontal: 16 }}>
            <BackSvg2 onPress={() => { navigation.goBack() }} />
            <Text style={{ ...commonStyles.fs16_500 }}>Filter</Text>

            <Text style={{ ...commonStyles.fs16_500, color: COLORS.theme }}>Clear</Text>
        </View>
    )
}