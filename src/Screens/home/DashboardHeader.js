import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { SIZES } from '../../Constant/Color'
import MenuBtn from '../../Components/MenuBtn'
import { CustomDrawer } from '../../Components/drawer/CustomDrawer'
import PlusCircleSvg from '../../Components/svg/PlusCircleSvg'

export default function DashboardHeader({ navigation, title }) {
    const [showModalMenu, setshowModalMenu] = React.useState(false);

    return (
        <>
            <View style={{ ...commonStyles.rowBetween, marginVertical: 4, paddingRight: 16 }}>
                <MenuBtn onPress={() => { setshowModalMenu(true) }} />
                <Text style={{ ...commonStyles.fs16_500 }}>{title}</Text>

                <ImageBackground
                    source={require("../../Assets/shadow2.png")}
                    resizeMode="stretch"
                    style={{ width: SIZES.width / 3.4, height: 48, borderRadius: 50, alignContent: "center", justifyContent: "center", paddingHorizontal: 16 }}
                >
                    <View style={{ ...commonStyles.rowBetween }}>
                        <Text style={{ ...commonStyles.fs14_600 }}>₹89.00</Text>
                        <PlusCircleSvg onPress={() => { }} />
                    </View>
                </ImageBackground>
            </View>

            <CustomDrawer
                modalVisible={showModalMenu}
                callback={() => { setshowModalMenu(false) }}
                navigation={navigation}
            />
        </>
    )
}