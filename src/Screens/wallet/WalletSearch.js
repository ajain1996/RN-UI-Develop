import { View, Text } from 'react-native'
import React from 'react'
import ShadowBg from '../../Components/ShadowBg'
import { commonStyles } from '../../utils/Styles'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import { SIZES } from '../../Constant/Color'

export default function WalletSearch({ onChange }) {
    return (
        <ShadowBg
            width={SIZES.width / 1.3}
            childComponent={
                <View style={{ ...commonStyles.rowStart }}>
                    <Image
                        source={require('../../Assets/search.png')}
                        resizeMode="contain"
                        style={{ width: 18, height: 18, tintColor: '#999' }}
                    />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#999"
                        onTextInput={onChange}
                        style={{ fontSize: 14, paddingHorizontal: 12 }}
                    />
                </View>
            }
        />
    )
}