import { View, Text } from 'react-native'
import React from 'react'
import ShadowBg from '../../Components/ShadowBg'
import { commonStyles } from '../../utils/Styles'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import { SIZES } from '../../Constant/Color'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function WalletSearch({ onChange }) {
    return (
        <ShadowBg
            width={SIZES.width / 1.3}
            childComponent={
                <View style={{ ...commonStyles.rowStart }}>
                    <AntDesign name='search1' size={20} color="#999" />
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