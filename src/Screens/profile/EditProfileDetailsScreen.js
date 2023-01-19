import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { Image } from 'react-native'
import { TouchableHighlight } from 'react-native'
import { COLORS, SIZES } from '../../Constant/Color'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import ProfileCUstomInput from './ProfileCUstomInput'
import ProfileAccordian from './ProfileAccordian'
import { ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import ProfileHeader from './ProfileHeader'
import ProfileCircle from '../../Assets/svg/profile-circle.svg';
import CallCalling from '../../Assets/svg/call-calling.svg';
import SMS from '../../Assets/svg/sms.svg';
import Cake from '../../Assets/svg/cake.svg';
import Map from '../../Assets/svg/map.svg';
import SecurityUser from '../../Assets/svg/security-user.svg';
import ShieldSecurity from '../../Assets/svg/shield-security.svg';
import Location from '../../Assets/svg/location.svg';

export default function EditProfileDetailsScreen({ navigation }) {
    const [showMasterDetails, setshowMasterDetails] = React.useState(true);
    const [showPersonalDetails, setshowPersonalDetails] = React.useState(true);
    const [showCompanyDetails, setshowCompanyDetails] = React.useState(true);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <ProfileHeader navigation={navigation} />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ padding: 18 }}>
                    <View style={styles.block1}>
                        <ProfileAccordian
                            showMasterDetails={showMasterDetails}
                            setshowMasterDetails={setshowMasterDetails}
                            title="Master Details"
                            callBack={() => { }}
                        />

                        {showMasterDetails
                            ? <View style={{ padding: 16 }}>
                                <ProfileCUstomInput
                                    title="Master name"
                                    onChange={(val) => { }}
                                    icon={ProfileCircle}
                                />
                                <View style={{ marginTop: 12 }} />

                                <ProfileCUstomInput
                                    title="Master no."
                                    onChange={(val) => { }}
                                    icon={CallCalling}
                                />
                                <View style={{ marginTop: 12 }} />

                                <ProfileCUstomInput
                                    title="Email ID"
                                    onChange={(val) => { }}
                                    icon={SMS}
                                />
                            </View>
                            : <></>}
                    </View>
                    <Text />

                    <View style={styles.block1}>
                        <ProfileAccordian
                            showMasterDetails={showPersonalDetails}
                            setshowMasterDetails={setshowPersonalDetails}
                            title="Personal Details"
                            callBack={() => { }}
                        />

                        {showPersonalDetails
                            ? <View style={{ padding: 16 }}>
                                <View style={{ ...commonStyles.rowStart }}>
                                    <View>
                                        <Image
                                            source={{ uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" }}
                                            style={styles.profile}
                                        />
                                        <View style={styles.profileImgEdit}>
                                            <Image
                                                source={require("../../Assets/edit.png")}
                                                style={{ width: 12, height: 12, margin: 6 }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ paddingHorizontal: 20 }}>
                                        <Text style={styles.nameText}>Agent name</Text>
                                        <TextInput
                                            placeholder=''
                                            style={styles.agentNameInput}
                                            onChangeText={() => { }}
                                        />
                                    </View>
                                </View>
                                <View style={{ padding: 10 }}>
                                    <ProfileCUstomInput
                                        title="Email ID"
                                        onChange={(val) => { }}
                                        icon={SMS}
                                    />
                                    <View style={{ marginTop: 12 }} />

                                    <ProfileCUstomInput
                                        title="Birth date"
                                        onChange={(val) => { }}
                                        icon={Cake}
                                    />
                                </View>
                            </View>
                            : <></>}
                    </View>
                    <Text />

                    <View style={styles.block1}>
                        <ProfileAccordian
                            showMasterDetails={showCompanyDetails}
                            setshowMasterDetails={setshowCompanyDetails}
                            title="Company Details"
                            callBack={() => { }}
                        />

                        {showCompanyDetails
                            ? <View style={{ padding: 16 }}>
                                <ProfileCUstomInput
                                    title="Mobile no."
                                    onChange={(val) => { }}
                                    icon={CallCalling}
                                />
                                <View style={{ marginTop: 12 }} />

                                <ProfileCUstomInput
                                    title="Alt no."
                                    onChange={(val) => { }}
                                    icon={CallCalling}
                                />
                                <View style={{ marginTop: 12 }} />

                                <ProfileCUstomInput
                                    title="Pos type"
                                    onChange={(val) => { }}
                                    icon={Map}
                                />

                                <View style={{ marginTop: 12 }} />

                                <ProfileCUstomInput
                                    title="Pos name"
                                    onChange={(val) => { }}
                                    icon={Map}
                                />

                                <View style={{ marginTop: 12 }} />

                                <ProfileCUstomInput
                                    title="Aadhar no."
                                    onChange={(val) => { }}
                                    icon={SecurityUser}
                                />

                                <View style={{ marginTop: 12 }} />

                                <ProfileCUstomInput
                                    title="Address"
                                    onChange={(val) => { }}
                                    icon={Location}
                                />

                                <View style={{ marginTop: 12 }} />

                                <ProfileCUstomInput
                                    title="Pan no."
                                    onChange={(val) => { }}
                                    icon={ShieldSecurity}
                                />
                            </View>
                            : <></>}
                    </View>
                    <Text />

                    <View style={{ ...commonStyles.rowBetween }}>
                        <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                            navigation.navigate("WalletScreen")
                        }}>
                            Save
                        </Button>

                        <Button style={styles.cancelBtn} textColor="#999" onPress={() => { }}>
                            Cancel
                        </Button>
                    </View>

                    <View style={{ height: 10 }} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    block1: {
        elevation: 10,
        shadowColor: "#aaa",
        backgroundColor: COLORS.bg,
        borderRadius: 30
    },
    profile: {
        width: 92, height: 92,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: "#fff",
        elevation: 9,
        shadowColor: COLORS.shadowColor,
        backgroundColor: "#fff"
    },
    profileImgEdit: {
        backgroundColor: "#fff",
        borderRadius: 100,
        elevation: 8,
        shadowColor: COLORS.shadowColor,
        position: "absolute",
        bottom: 6, right: 0,
    },
    nameText: {
        ...commonStyles.fs12_400,
        color: COLORS.inputHeading,
    },
    agentNameInput: {
        width: SIZES.width / 1.86,
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: COLORS.bg,
        height: 50,
        borderRadius: 50,
        paddingHorizontal: 20,
        marginTop: 6
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
        elevation: 22, shadowColor: "#aaa"
    }
})