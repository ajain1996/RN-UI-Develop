import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../Constant/Color';
import { commonStyles } from '../utils/Styles';
import { Image } from 'react-native';

export default function BgIcon({ bgColor, icon, size }) {
    return (
        <View style={{ ...styles.recievedIcon, backgroundColor: bgColor }}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ width: size ? size : 22, height: size ? size : 22 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    recievedIcon: {
        width: 41, height: 41,
        borderRadius: 10000,
        ...commonStyles.centerStyles,
    }
});