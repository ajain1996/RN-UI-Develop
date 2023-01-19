import { View, Text } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import CustomHeader from '../../Components/CustomHeader'
import { StyleSheet } from 'react-native'
import { COLORS } from '../../Constant/Color'
import ProfileAccordian from '../profile/ProfileAccordian'
import WalletDetails from './WalletDetails'
import TagDetails from './TagDetails'
import RCBookModal from './RCBookModal'
import { ScrollView } from 'react-native'

export default function VehicleDetailsScreen({ navigation }) {
    const [walletDetails, setwalletDetails] = React.useState(true);
    const [tagDetails, setTagDetails] = React.useState(false);
    const [transactions, settransactions] = React.useState(false);
    const [rcbBookModalVisible, setRcbBookModalVisible] = React.useState(false);

    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <CustomHeader title="Vehicle Details" navigation={navigation} />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ paddingHorizontal: 16, paddingTop: 4 }}>
                    <View style={styles.selectWrapper}>
                        <ProfileAccordian
                            showMasterDetails={walletDetails}
                            setshowMasterDetails={setwalletDetails}
                            title="Wallet Details"
                            callBack={() => { }}
                        />
                        {walletDetails
                            ? <WalletDetails item={[]} />
                            : <></>}
                    </View>
                    <Text />

                    <View style={styles.selectWrapper}>
                        <ProfileAccordian
                            showMasterDetails={tagDetails}
                            setshowMasterDetails={setTagDetails}
                            title="Tag Details"
                            callBack={() => { }}
                        />
                        {tagDetails
                            ? <TagDetails item={[]} />
                            : <></>}
                    </View>
                    <Text />

                    <ProfileAccordian
                        showMasterDetails={transactions}
                        setshowMasterDetails={settransactions}
                        title="Transaction Details"
                        callBack={() => { setRcbBookModalVisible(true) }}
                    />

                    <Text /><Text />
                </View>
            </ScrollView>

            <RCBookModal
                modalVisible={rcbBookModalVisible}
                callback={() => { setRcbBookModalVisible(false) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    selectWrapper: {
        elevation: 5, shadowColor: "#999", backgroundColor: COLORS.bg, borderRadius: 30
    },
})