import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../../utils/Styles'
import { COLORS } from '../../../Constant/Color'
import BackBtn from '../../../Components/BackBtn'

export default function WalletFilterHeader({ navigation }) {
    return (
        <View style={{ ...commonStyles.rowBetween, marginVertical: 4, marginRight: 16 }}>
            <BackBtn
                onPress={() => { navigation.goBack() }}
            />
            <Text style={{ ...commonStyles.fs16_500 }}>Filter</Text>

            <Text style={{ ...commonStyles.fs16_500, color: COLORS.theme }}>Clear</Text>
        </View>
    )
}