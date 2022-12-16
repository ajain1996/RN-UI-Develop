import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { commonStyles } from '../../utils/Styles'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function WalletFilterIcon({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground
                source={require('../../Assets/circle.png')}
                resizeMode="stretch"
                style={{
                    width: 80,
                    height: 80,
                    marginTop: -4,
                    ...commonStyles.centerStyles,
                    marginRight: -16,
                }}>
                <Image
                    source={require('../../Assets/candle.png')}
                    // resizeMode="stretch"
                    style={{ width: 20, height: 20 }}
                />
            </ImageBackground>
        </TouchableOpacity>
    )
}