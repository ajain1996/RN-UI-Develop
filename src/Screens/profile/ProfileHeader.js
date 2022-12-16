import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { Image } from 'react-native'

export default function ProfileHeader() {
    return (
        <View style={{}}>
            <View style={{ ...commonStyles.rowBetween, marginVertical: 4 }}>
                <Image
                    source={require("../../Assets/back.png")}
                    resizeMode="contain"
                    style={{ width: 70, height: 70 }}
                />
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