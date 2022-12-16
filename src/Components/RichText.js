import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../utils/Styles';

export default function RichText({ title, value }) {
    return (
        <View style={{ ...commonStyles.rowStart, marginTop: 14 }}>
            <Text style={{ ...commonStyles.fs12_400, color: "#000", width: "28%" }}>
                {title}
            </Text>
            <View style={{ width: "70%", ...commonStyles.rowStart }}>
                <Text style={{ ...commonStyles.fs12_400, marginRight: 6 }}>:</Text>
                <Text style={{ ...commonStyles.fs12_600 }}>{value}</Text>
            </View>
        </View>
    );
}
