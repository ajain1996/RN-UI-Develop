import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { SIZES } from '../../Constant/Color'
import BackBtn from '../../Components/BackBtn'

export default function InventoryHeader({ title, navigation }) {
    return (
        <View style={{ ...commonStyles.rowBetween, marginVertical: 4, paddingRight: 16 }}>
            <BackBtn onPress={() => { navigation.goBack() }} />
            <Text style={{ ...commonStyles.fs16_500 }}>{title}</Text>

            <ImageBackground
                source={require("../../Assets/shadow2.png")}
                resizeMode="stretch"
                style={{ width: SIZES.width / 3.4, height: 48, borderRadius: 50, alignContent: "center", justifyContent: "center", paddingHorizontal: 16 }}
            >
                <View style={{ ...commonStyles.rowBetween }}>
                    <Text style={{ ...commonStyles.fs14_600 }}>Excel</Text>
                    <Image
                        source={require("../../Assets/download.png")}
                        resizeMode="contain"
                        style={{ width: 35, height: 35, marginLeft: 10 }}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}