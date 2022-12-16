import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles';
import { COLORS } from '../Constant/Color';

export default function ShadowIcon({ icon, size }) {
    return (
        <View style={{
            ...styles.recievedIcon,
            width: size ? size + 16 : 41,
            height: size ? size + 16 : 41
        }}>
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
        borderRadius: 10000,
        ...commonStyles.centerStyles,
        backgroundColor: COLORS.bg, elevation: 9, shadowColor: "#999"
    }
});