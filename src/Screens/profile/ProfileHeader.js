import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { Image } from 'react-native'
import BackSvg from '../../Components/svg/BackSvg'

export default function ProfileHeader({ navigation }) {
    return (
        <View style={{}}>
            <View style={{ ...commonStyles.rowBetween, marginVertical: 4, paddingHorizontal: 16 }}>
                <BackSvg onPress={() => { navigation.goBack() }} />
                <Text style={{ ...commonStyles.fs16_500 }}>Edit Profile Details</Text>

                <View style={{ width: 70, height: 70 }} />
            </View>
            <Image
                source={require("../../Assets/header-line.png")}
                resizeMode="contain"
                style={{ width: "100%", height: 2 }}
            />
        </View>
    )
}