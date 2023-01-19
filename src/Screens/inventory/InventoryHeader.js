import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { SIZES } from '../../Constant/Color'
import { BackSvg2, DownloadCircleSvg } from '../../Components/svg/BackSvg'

export default function InventoryHeader({ title, navigation }) {
    return (
        <View style={{ ...commonStyles.rowBetween, marginVertical: 4, paddingHorizontal: 16 }}>
            <BackSvg2 onPress={() => { navigation.goBack() }} />
            <Text style={{ ...commonStyles.fs16_500 }}>{title}</Text>

            <ImageBackground
                source={require("../../Assets/shadow2.png")}
                resizeMode="stretch"
                style={{ width: SIZES.width / 3.4, height: 48, borderRadius: 50, alignContent: "center", justifyContent: "center", paddingHorizontal: 16 }}
            >
                <View style={{ ...commonStyles.rowBetween }}>
                    <Text style={{ ...commonStyles.fs14_600 }}>Excel</Text>
                    <DownloadCircleSvg />
                </View>
            </ImageBackground>
        </View>
    )
}