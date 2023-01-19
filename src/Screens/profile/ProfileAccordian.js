import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../Constant/Color'
import { TouchableHighlight } from 'react-native'
import { StyleSheet } from 'react-native'
import { commonStyles } from '../../utils/Styles'
import DropdownSvg, { UpwardSvg } from '../../Components/svg/DropdownSvg'

export default function ProfileAccordian({ title, showMasterDetails, setshowMasterDetails, callBack }) {
    return (
        <TouchableHighlight onPress={() => { setshowMasterDetails(!showMasterDetails); callBack() }}
            underlayColor={COLORS.bg}
        >
            <View style={styles.masterDetails}>
                <Text style={styles.masterDetailsText}>
                    {title}
                </Text>
                {showMasterDetails
                    ? <DropdownSvg />
                    : <UpwardSvg />}
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    block1: {
        elevation: 10, shadowColor: "#aaa",
        backgroundColor: COLORS.bg,
        borderRadius: 30
    },
    masterDetails: {
        ...commonStyles.rowBetween,
        backgroundColor: COLORS.bg,
        padding: 16,
        borderRadius: 50,
        elevation: 16,
        shadowColor: "#aaa",
        paddingHorizontal: 24
    },
    masterDetailsText: {
        ...commonStyles.fs14_400,
        color: COLORS.theme,
    },
})