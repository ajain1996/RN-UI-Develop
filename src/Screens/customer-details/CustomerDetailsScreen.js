import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import InventoryHeader from '../inventory/InventoryHeader'
import { commonStyles } from '../../utils/Styles'
import { ScrollView } from 'react-native'
import { COLORS } from '../../Constant/Color'
import RichText from '../../Components/RichText'
import { Image } from 'react-native'
import Svg from '../../utils/Svg'
import Eye from "../../Assets/svg/eye.svg"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomerDetailsScreen({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <InventoryHeader
                title="Download"
                navigation={navigation}
            />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                    <Text style={{ ...commonStyles.fs18_500 }}>Customer Details</Text>

                    <View style={styles.mainWrapper}>
                        <RichText
                            title="Name"
                            value="Rakesh Kumar"
                        />
                        <RichText
                            title="Mobile No."
                            value="9998887776"
                        />
                        <RichText
                            title="Address"
                            value="A-40 Upper Apollo Kardhani kalwar Jaipur Rajasthan India"
                        />
                        <RichText
                            title="PIN Code"
                            value="302012"
                        />
                        <RichText
                            title="DOB"
                            value="25-07-2994"
                        />
                        <RichText
                            title="ID Proof"
                            value="Adhar Card (85621234567812)"
                        />
                        <RichText
                            title="Address Proof"
                            value="Driving License (RJ987654321)"
                        />
                        <RichText
                            title="PAN No."
                            value="BEAPC788C"
                        />
                    </View>
                    <Text />

                    <Text style={{ ...commonStyles.fs18_500 }}>Customer Documents</Text>

                    <View style={styles.mainWrapper}>
                        <RichText
                            title="Reg Type"
                            value=""
                        />
                        <RichText
                            title="Reg No."
                            value=""
                        />
                        <RichText
                            title="Vehicle No."
                            value="RJ12VO12VD8878"
                        />
                        <RichText
                            title="Commercial Type"
                            value="Non-Commercial"
                        />
                        <RichText
                            title="Tag Serial No."
                            value="607469=0030089585"
                        />
                        <RichText
                            title="ID Proof"
                            value="Adhar Card (85621234567812)"
                        />
                        <RichText
                            title="Tag Serial Type"
                            value="New Customer Board"
                        />

                        <View style={{ width: "100%", height: 1, backgroundColor: "#ddd", marginTop: 16 }} />

                        <RichText
                            title="Wallet"
                            value="₹50"
                        />
                        <RichText
                            title="Reg No."
                            value="₹50"
                        />
                        <RichText
                            title="SD"
                            value="₹50"
                        />
                        <RichText
                            title="Tag COst"
                            value="₹50 Refunded"
                        />
                        <RichText
                            title="Transaction ID"
                            value="607469990"
                        />
                        <RichText
                            title="ID Proof"
                            value="Adhar Card (85621234567812)"
                        />
                        <RichText
                            title="Tag Serial Type"
                            value="New Customer Board"
                        />
                    </View>
                    <Text />

                    <Text style={{ ...commonStyles.fs18_500 }}>Customer Documents</Text>

                    <View style={{ ...commonStyles.rowBetween }}>
                        <RenderDocument
                            title="RC Copy Front"
                            image={require("../../Assets/rc-copy.png")}
                            onPress={() => { navigation.navigate("PrivacyPolicyScreen") }}
                            onPress2={() => { navigation.navigate("CustomerRegistrationScreen") }}
                        />
                        <RenderDocument
                            title="RC Copy Back"
                            image={require("../../Assets/rc-copy.png")}
                            onPress={() => { navigation.navigate("TermsAndConditions") }}
                        />
                    </View>
                    <View style={styles.mainWrapper}>
                        <RichText
                            title="Reg Type"
                            value=""
                        />
                        <RichText
                            title="Reg No."
                            value=""
                        />
                        <RichText
                            title="Vehicle No."
                            value="RJ12VO12VD8878"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export const RenderDocument = ({ title, image, onPress, onPress2 }) => {
    return (
        <View style={styles.vehicleDocuments}>
            <Text style={{ ...commonStyles.fs14_400 }}>{title}</Text>
            <Image
                source={image}
                style={{ width: "100%", height: 80, marginTop: 14 }}
            />
            <View style={{ ...commonStyles.rowAround, width: "100%", marginTop: 12 }}>
                <TouchableOpacity onPress={onPress}>
                    <Svg width="30" height="30" source={Eye} />
                </TouchableOpacity>

                <TouchableOpacity onPress={onPress2}>
                    <MaterialCommunityIcons name="download-box-outline" size={20} color={COLORS.theme} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        elevation: 8, shadowColor: '#999',
        backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 9,
        marginTop: 12, paddingTop: 2
    },
    vehicleDocuments: {
        elevation: 9, shadowColor: "#999", backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 9, width: "47%", alignItems: "center"
    }
})