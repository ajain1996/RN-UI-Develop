import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function ImgTap({ icon, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ width: 35, height: 35, marginLeft: 10 }}
            />
        </TouchableOpacity>
    )
}