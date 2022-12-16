import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import CustomHeader from '../../Components/CustomHeader'
import { ScrollView } from 'react-native'
import CustomInputBox from '../../Components/CustomInputBox'
import { COLORS, SIZES } from '../../Constant/Color'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export default function VehicleTrackingScreen({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader title="Vehicle Tracking" navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingBottom: 16 }}>
                    <CustomInputBox
                        heading="Track with"
                        placeholder="vehicle number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Vehicle number"
                        placeholder="Enter vehicle number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />
                    <Text />

                    <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                        navigation.navigate("VehicleDetailsScreen")
                    }}>
                        Submit
                    </Button>
                </View>
            </ScrollView>
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