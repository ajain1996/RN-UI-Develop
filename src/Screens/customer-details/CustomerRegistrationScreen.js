import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader'
import { commonStyles } from '../../utils/Styles'
import { ScrollView } from 'react-native'
import CustomInputBox from '../../Components/CustomInputBox'
import { COLORS, SIZES } from '../../Constant/Color'
import ProfileAccordian from '../profile/ProfileAccordian'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { Image } from 'react-native'

export default function CustomerRegistrationScreen({ navigation }) {
    const [vehicleNo, setvehicleNo] = React.useState(false);
    const [vehicleClass, setvehicleClass] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader title="Customer Registration" navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingBottom: 16 }}>
                    <CustomInputBox
                        heading="Mobile number"
                        placeholder="Enter mobile number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Tag serial number"
                        placeholder="Enter serial number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />
                    <Text />

                    <Text style={{ ...commonStyles.fs14_400, color: "#999" }}>
                        Input type
                    </Text>
                    <ProfileAccordian
                        showMasterDetails={vehicleNo}
                        setshowMasterDetails={setvehicleNo}
                        title="Vehicle no."
                        callBack={() => { }}
                    />

                    <CustomInputBox
                        heading="Vehicle number"
                        placeholder="Enter vehicle number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />
                    <Text />

                    <Text style={{ ...commonStyles.fs14_400, color: "#999" }}>
                        Vehicle class
                    </Text>
                    <ProfileAccordian
                        showMasterDetails={vehicleClass}
                        setshowMasterDetails={setvehicleClass}
                        title="Vehicle class"
                        callBack={() => { }}
                    />
                    <Text />

                    <Text style={{ ...commonStyles.fs14_400, color: "#999" }}>
                        Vehicle registration type
                    </Text>
                    <ProfileAccordian
                        showMasterDetails={vehicleClass}
                        setshowMasterDetails={setvehicleClass}
                        title="Select vehicle registration type"
                        callBack={() => { }}
                    />

                    <CustomInputBox
                        heading="Date of birth"
                        placeholder="Enter date of birth"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Pan card number"
                        placeholder="Enter pan card number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Customer name"
                        placeholder="Enter customer name"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Address 1"
                        placeholder="Enter address 1"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Address 2"
                        placeholder="Enter address 2"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="Address 3"
                        placeholder="Enter address 3"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <View style={{ ...commonStyles.rowBetween }}>
                        <CustomInputBox
                            heading="Pincode"
                            placeholder="Enter pincode"
                            width={SIZES.width / 2.3}
                            onChange={() => { }}
                        />
                        <CustomInputBox
                            heading="City"
                            placeholder="Enter city"
                            width={SIZES.width / 2.3}
                            onChange={() => { }}
                        />
                    </View>

                    <CustomInputBox
                        heading="District"
                        placeholder="Enter district"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <CustomInputBox
                        heading="State"
                        placeholder="Enter state"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />
                    <Text />

                    <Text style={{ ...commonStyles.fs14_400, color: "#999" }}>
                        Documents type
                    </Text>
                    <ProfileAccordian
                        showMasterDetails={vehicleClass}
                        setshowMasterDetails={setvehicleClass}
                        title="Select document type"
                        callBack={() => { }}
                    />

                    <CustomInputBox
                        heading="Adhar card number"
                        placeholder="Enter adhar card number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <View style={{ ...commonStyles.rowBetween, marginTop: 20 }}>
                        <View style={styles.addressProf}>
                            <Image
                                source={require("../../Assets/address-front.png")}
                                resizeMode="contain"
                                style={{ width: SIZES.width / 3.4, height: SIZES.width / 3.4 }}
                            />
                        </View>
                        <View style={styles.addressProf}>
                            <Image
                                source={require("../../Assets/address-back.png")}
                                resizeMode="contain"
                                style={{ width: SIZES.width / 3.4, height: SIZES.width / 3.4 }}
                            />
                        </View>
                    </View>

                    <Text />
                    <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                        navigation.navigate("TagRegistrationScreen")
                    }}>
                        Next
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
    addressProf: {
        elevation: 9, shadowColor: "#999",
        backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 8,
        width: "47%",
    }
})