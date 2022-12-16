import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { SIZES } from '../Constant/Color'

export default function ShadowBg({ childComponent, width, height, paddingHorizontal, image }) {
    return (
        <ImageBackground
            source={image ? image : require("../Assets/shadow.png")}
            resizeMode="stretch"
            style={{
                width: width ? width : SIZES.width / 1.1,
                height: height ? height : 48,
                borderRadius: 50,
                alignContent: "center",
                justifyContent: "center",
                paddingHorizontal: paddingHorizontal ? paddingHorizontal : 16
            }}
        >
            {childComponent}
        </ImageBackground>
    )
}