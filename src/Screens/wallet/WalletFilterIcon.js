import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { commonStyles } from '../../utils/Styles'
import FilterSvg from '../../Components/svg/FilterSvg'

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
                <FilterSvg />
            </ImageBackground>
        </TouchableOpacity>
    )
}