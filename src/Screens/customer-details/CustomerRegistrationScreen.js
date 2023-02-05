import { View, Text, TouchableOpacity } from 'react-native'
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
import PersonalLeaveDatePicker from '../../Components/DatePicker/CustomDatePicker'
import moment from 'moment'
import { Dropdown } from 'react-native-element-dropdown';
import CustomDropdownComponent from '../../Components/CustomDropdownComponent'
import { data } from '../orders/CreateOrderModal'
import ShadowBg from '../../Components/ShadowBg'
import { TextInput } from 'react-native'
import { AddressBackSvg, AddressFrontSvg } from '../../Components/svg/BackSvg'

export default function CustomerRegistrationScreen({ navigation }) {
    const [vehicleNo, setvehicleNo] = React.useState(false);
    const [vehicleClass, setvehicleClass] = React.useState(false);

    const [dateOfBirth, setDateOfBirth] = React.useState({
        initialDate: moment().format("DD-MM-YYYY"),
        dob: "",
    });

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader title="Customer Registration" navigation={navigation} />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ paddingHorizontal: 20, paddingBottom: 16 }}>
                    <CustomInputBox
                        heading="Mobile number"
                        placeholder="Enter mobile number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />

                    <Text style={{ ...commonStyles.fs14_400, color: "#999", marginTop: 12 }}>
                        Tag Serial Number
                    </Text>
                    <View style={{ ...commonStyles.rowBetween, marginTop: -10 }}>
                        <ShadowBg
                            width={SIZES.width / 4}
                            image={require('../../Assets/shadow2.png')}
                            height={42}
                            paddingHorizontal={5}
                            childComponent={
                                <View
                                    style={{ ...commonStyles.rowBetween, paddingHorizontal: 14 }}>
                                    <Text style={{ fontSize: 14, color: '#999' }}>
                                        607469
                                    </Text>
                                </View>
                            }
                        />
                        <View style={{ width: 10, height: 1.5, backgroundColor: "#999", marginRight: -16 }} />

                        <CustomDropdownComponent
                            placeholder="00B"
                            data={data}
                            width={SIZES.width / 4}
                            height={42}
                        />
                        <View style={{ width: 10, height: 1.5, backgroundColor: "#999", marginLeft: -16 }} />

                        <ShadowBg
                            width={SIZES.width / 4}
                            image={require('../../Assets/shadow2.png')}
                            height={42}
                            paddingHorizontal={5}
                            childComponent={
                                <View style={{ ...commonStyles.rowBetween, paddingHorizontal: 14 }}>
                                    <TextInput
                                        placeholder='0087654'
                                        placeholderTextColor="#999"
                                        style={{ paddingHorizontal: 0, fontSize: 14 }}
                                    />
                                </View>
                            }
                        />
                    </View>

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

                    <Text style={{ ...commonStyles.fs14_400, color: "#999", marginBottom: -12 }}>
                        Vehicle class
                    </Text>
                    <CustomDropdownComponent
                        placeholder="Vehicle class"
                        data={data}
                        width={SIZES.width / 1.1}
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

                    <PersonalLeaveDatePicker
                        heading="Date of birth"
                        placeholderText="Date of birth"
                        minimumDate={'24-12-1996'}
                        maximumDate={"24-12-2050"}
                        initialDate={dateOfBirth?.initialDate}
                        selectedVal={dateOfBirth?.dob}
                        isStart="yes"
                        // error={startDateError}
                        onDateSelected={function (val) {
                            setDateOfBirth({
                                ...dateOfBirth,
                                dob: moment(val).format('DD-MM-YYYY'),
                                initialDate: moment(val).format('DD-MM-YYYY')
                            });
                        }}
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
                            <AddressFrontSvg />
                        </View>
                        <View style={styles.addressProf}>
                            <AddressBackSvg />
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