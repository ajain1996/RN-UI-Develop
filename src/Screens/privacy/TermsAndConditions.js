import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import OrderHeader from '../orders/OrderHeader'
import { ScrollView } from 'react-native'
import ProfileAccordian from '../profile/ProfileAccordian'
import { COLORS } from '../../Constant/Color'

export default function TermsAndConditions({ navigation }) {
    const [ShowPolicy, setShowPolicy] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <OrderHeader
                title="Terms & Conditions"
                navigation={navigation}
            />

            <ScrollView>
                <View style={{ paddingHorizontal: 16, paddingBottom: 16, paddingTop: 8 }}>
                    <View style={{ elevation: 9, shadowColor: "#999", borderRadius: 20, backgroundColor: COLORS.bg }}>
                        <ProfileAccordian
                            showMasterDetails={ShowPolicy}
                            setshowMasterDetails={setShowPolicy}
                            title="Introduction"
                            callBack={() => { }}
                        />

                        <Text style={{ ...commonStyles.fs12_400, lineHeight: 24, color: "#202020", margin: 16 }}>
                            Please read this Privacy Policy carefully before using the "Website" and mobile applications ("App"). This Website and App are owned, registered and operated by “Platform Owner” ("we", "us" "our"). This Platform is a medium through which Services of Platform Owner shall be streamed directly to its Platform Users via App or Website. This App and the Website shall be together referred to as the “Platform”. By using this Platform, the Platform Users of the Website or App, hereinafter referred to as "User" or "you" or "your" or "yourself" “registered user” or “guest user” signify in your agreement to be bound by these Terms & Conditions("Agreement"). The information if any collected through this Platform will be secured, safeguarded and shall be utilised for providing better and appropriate services to you and for lawful usage and purpose.We process information relating to an identified or identifiable natural person in accordance with this Privacy Policy and in compliance with the relevant data protection regulation and laws. This Policy provides the necessary information regarding right and obligations for concerned parties, and explains how, why and when we process such information.
                        </Text>
                    </View>
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Amendment"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Disclaimer"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Eligibility / Authorized Use"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Services"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Audit"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Electronic Communication"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="General"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Account and Registration"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Information Sharing and..."
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Intellectual Property"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Copyrights"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="User Comments"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Modifications of These Terms of..."
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Language and Display"
                        callBack={() => { }}
                    />
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={ShowPolicy}
                        setshowMasterDetails={setShowPolicy}
                        title="Grivanance Redressal"
                        callBack={() => { }}
                    />
                    <Text />
                </View>
            </ScrollView>
        </View>
    )
}