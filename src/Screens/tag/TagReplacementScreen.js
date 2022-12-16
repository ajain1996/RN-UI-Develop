import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import CustomHeader from '../../Components/CustomHeader'
import { ScrollView } from 'react-native'
import CustomInputBox from '../../Components/CustomInputBox'
import { COLORS, SIZES } from '../../Constant/Color'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import RichText from '../../Components/RichText'
import { CustomCheckTickbox2 } from '../../Components/CustomCheckbox'
import ProfileAccordian from '../profile/ProfileAccordian'

export default function TagReplacementScreen({ navigation }) {
    const [replacementReason, setReplacementReason] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader title="Tag replacement" navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingBottom: 16 }}>
                    <Text style={{ ...commonStyles.fs16_500 }}>Customer details</Text>
                    <View style={styles.customerDetails}>
                        <RichText
                            title="Name"
                            value="Radhe Shyam Kumawat"
                        />
                        <RichText
                            title="Customer ID"
                            value="₹23"
                        />
                        <Text style={{ fontSize: 10, color: "red", marginTop: 9 }}>
                            {`*Minimum balance should be ₹250\nIn customer FASTag`}
                        </Text>
                    </View>
                    <CustomInputBox
                        heading="Vehicle number"
                        placeholder="Select vehicle number"
                        width={SIZES.width / 1.1}
                        onChange={() => { }}
                    />
                    <Text />

                    <Text style={{ ...commonStyles.fs16_500 }}>Existing tag details</Text>
                    <View style={styles.customerDetails}>
                        <RichText
                            title="Tag Serial No."
                            value="60727272-004-01010101"
                        />
                        <RichText
                            title="Vehicle No."
                            value="RJ45CM9992"
                        />
                        <RichText
                            title="Tag ID"
                            value="340980970798797685776576"
                        />
                        <RichText
                            title="Vehicle class"
                            value="Car/Jeep/Van"
                        />
                    </View>

                    <Text style={{ ...commonStyles.fs12_400, marginTop: 16 }}>
                        Only Tag Serial number will be update. all other details will remain same
                    </Text>

                    <View style={styles.selectWrapper}>
                        <ProfileAccordian
                            showMasterDetails={replacementReason}
                            setshowMasterDetails={setReplacementReason}
                            title="Select Replacement Reason"
                            callBack={() => { }}
                        />
                        {replacementReason
                            ? <View style={styles.select}>
                                {["Select All", "Paytm bank", "Kotak bank", "State bank", "ICICI bank", "Dena bank"].map((item, index) => {
                                    return (
                                        <View style={{ ...commonStyles.rowBetween, marginVertical: 8 }} key={index}>
                                            <Text style={{ ...commonStyles.fs14_400 }}>{item}</Text>
                                            <CustomCheckTickbox2
                                                callback={() => { }}
                                            />
                                        </View>
                                    );
                                })}
                            </View>
                            : <></>}
                    </View>

                    <Text style={{ ...commonStyles.fs14_400, marginTop: 16 }}>
                        Replacement charge: ₹100
                    </Text>

                    <View style={{ ...commonStyles.rowBetween, width: "100%", marginTop: 20 }}>
                        <Button style={styles.cancelBtn} textColor="#999" onPress={() => { }}>
                            Cancel
                        </Button>

                        <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                            navigation.navigate("FASTagRechargeScreen")
                        }}>
                            Submit
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    customerDetails: {
        elevation: 9, shadowColor: "#999",
        backgroundColor: COLORS.bg,
        padding: 20, borderRadius: 8,
        paddingTop: 2, marginTop: 8
    },
    select: {
        padding: 16
    },
    selectWrapper: {
        elevation: 5, shadowColor: "#999", backgroundColor: COLORS.bg, borderRadius: 30
    },
    saveBtn: {
        width: SIZES.width / 2.3,
        height: 52,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa"
    },
    cancelBtn: {
        width: SIZES.width / 2.3,
        height: 52,
        backgroundColor: "#fff",
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#999",
        borderWidth: 1, borderColor: "#eee"
    },
})