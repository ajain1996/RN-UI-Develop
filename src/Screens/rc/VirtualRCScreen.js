import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../Constant/Color'
import { commonStyles } from '../../utils/Styles'
import { Button } from 'react-native-paper'
import { BackSvg2 } from '../../Components/svg/BackSvg'
import Feather from "react-native-vector-icons/Feather"

export default function VirtualRCScreen() {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <View style={{ ...commonStyles.rowBetween, paddingLeft: 6, paddingHorizontal: 20 }}>
                <BackSvg2 onPress={() => { }} />

                <Image
                    source={require("../../Assets/rc-logo.jpg")}
                    resizeMode="contain"
                    style={{ width: 150, height: 80 }}
                />

                <Feather name="refresh-cw" color="#000" size={24} />
            </View>
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={styles.qrContainer}>
                    <Text style={{ ...commonStyles.fs15_700 }}>Virtual RC</Text>
                    <Image
                        source={require("../../Assets/virtual-rc.jpg")}
                        resizeMode="contain"
                        style={styles.qrImg}
                    />
                    <Text style={{ ...commonStyles.fs15_700, alignSelf: "center" }}>MH03CM1801</Text>
                </View>

                <View style={styles.ownerDetails}>
                    <Text style={{ ...commonStyles.fs15_700, marginBottom: 8 }}>Owner Details</Text>
                    <RenderOwnerDetails
                        title="Name"
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Son / Daughter / Wife of"
                        value="Subhash"
                    />
                </View>

                <View style={styles.ownerDetails}>
                    <RenderOwnerDetails
                        title="Classis No."
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="No.Engine "
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Maker Name"
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Model Name"
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Registration Date"
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Tax valid upto"
                        value="Subhash"
                    />
                    <RenderOwnerDetails
                        title="Vehicle Class"
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Vehicle Description "
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Fuel Type"
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Color"
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Seat Capacity"
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Standing Capacity"
                        value="Subhash"
                    />

                    <RenderOwnerDetails
                        title="Financier"
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Insurance Company"
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Insurance Policy No"
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Insurance Valid Upto"
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Fitness Upto"
                        value="Nilesh Kumar"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="National Permit No."
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="National Permit Valid Upto"
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Permit Valid Upto"
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Registering Authority"
                        value="Subhash"
                    />
                    <View style={{ height: 4 }} />
                    <RenderOwnerDetails
                        title="Black list status"
                        value="Subhash"
                    />
                    <Text />

                    <Text style={styles.tap_to_check}>
                        Tap to Check the Vehicle Impound & Seizure Document Status
                    </Text>
                    <Text style={{ ...commonStyles.fs15_500, color: "#282828", marginTop: 10 }}>
                        If status of pollution Certificate, Insurance, Tax etc, are not available above, same may be verified from physical documents.
                    </Text>
                    <Text style={{ ...commonStyles.fs15_500, color: "#282828", marginTop: 10 }}>
                        Note: 10 This information for the Certificate of Registration is generated by mParivahan as per data provided by the issuing authority in the National Registry of Ministry of Road Transport and Highways. This document is valid as per the IT Act 2000 when used electronically.
                    </Text>

                    <Button style={styles.button} textColor="#fff">
                        Return to Home
                    </Button>
                </View>
            </ScrollView>
        </View>
    )
}

const RenderOwnerDetails = ({ title, value }) => {
    return (
        <View style={{ ...commonStyles.rowBetween }}>
            <View style={{ width: "50%" }}>
                <Text style={{ ...commonStyles.fs13_500 }}>{title}</Text>
            </View>
            <View style={{ width: "50%", alignItems: 'flex-end' }}>
                <Text style={{ ...commonStyles.fs13_500, color: COLORS.theme }}>{value}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    qrContainer: {
        elevation: 5, shadowColor: "#999",
        backgroundColor: "#fff", padding: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    qrImg: {
        width: SIZES.width / 1.5,
        height: SIZES.width / 1.5,
        alignSelf: "center",
        marginVertical: 30
    },
    ownerDetails: {
        elevation: 5,
        shadowColor: "#999",
        backgroundColor: "#fff",
        padding: 20,
        marginTop: 12
    },
    tap_to_check: {
        ...commonStyles.fs16_500, color: COLORS.theme, textAlign: "center", alignSelf: "flex-start"
    },
    button: {
        backgroundColor: COLORS.theme,
        paddingVertical: 10,
        marginTop: 20
    }
})