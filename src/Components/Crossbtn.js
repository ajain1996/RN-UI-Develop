import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ShadowIcon from './ShadowIcon'

export default function Crossbtn({ callback }) {
    return (
        <TouchableOpacity
            style={{ marginTop: -12 }}
            onPress={callback}
        >
            <ShadowIcon
                icon={require("../Assets/cross.png")}
                size={12}
            />
        </TouchableOpacity>
    )
}