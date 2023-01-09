import { View, Text, TextInput } from 'react-native'
import React from 'react'
import ShadowBg from './ShadowBg'
import { SIZES } from '../Constant/Color'
import { commonStyles } from '../utils/Styles'

export default function CustomInputBox({ heading, placeholder, onChange, width, defaultValue }) {
    return (
        <View style={{ alignItems: "flex-start", marginTop: 16 }}>
            <Text style={{ ...commonStyles.fs13_400, color: "#999", marginBottom: 4 }}>
                {heading}
            </Text>
            <ShadowBg
                width={width ? width : SIZES.width / 1.25}
                image={require('../Assets/shadow.png')}
                height={52}
                paddingHorizontal={5}
                childComponent={
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor="#999"
                        onChangeText={onChange}
                        defaultValue={defaultValue}
                        style={{
                            fontSize: 14, color: "#000",
                            paddingHorizontal: 16
                        }}
                    />
                }
            />
        </View>
    )
}