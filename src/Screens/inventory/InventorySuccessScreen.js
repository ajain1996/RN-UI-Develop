import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { Button } from 'react-native-paper'
import { COLORS, SIZES } from '../../Constant/Color'
import Tick from '../../Assets/svg/tick.svg';
import GreenCircle from '../../Assets/svg/green-circle.svg';
import Svg from '../../utils/Svg'
import { CrossSvg } from '../../Components/svg/BackSvg'

export default function InventorySuccessScreen({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF, justifyContent: 'space-between', paddingBottom: 28 }}>
            <CrossSvg onPress={() => { }} />

            <View style={{ alignItems: 'center' }}>
                <Svg width="120" height="120" source={GreenCircle} />
                <View style={{ position: "absolute", top: 20 }}>
                    <Svg width="86" height="86" source={Tick} />
                </View>
                <Text />

                <View style={{ width: "70%", marginTop: 20 }}>
                    <Text style={{ ...commonStyles.fs15_400, textAlign: "center", lineHeight: 24 }}>
                        Your request has been submitted successfully ORFID-998754631 is your service request no.
                    </Text>
                </View>

                <View style={{ width: "70%", marginTop: 22 }}>
                    <Text style={{ ...commonStyles.fs15_400, textAlign: "center", lineHeight: 24 }}>
                        Note this No. for Future Reference
                    </Text>
                </View>
            </View>

            <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                navigation.navigate("RequestsScreen")
            }}>
                Back to Dashboard
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    saveBtn: {
        width: SIZES.width / 1.1,
        height: 50,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa",
        alignSelf: "center"
    },
})