import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import { COLORS, SIZES } from '../../Constant/Color'
import MenuBtn from '../../Components/MenuBtn'
import { CustomDrawer } from '../../Components/drawer/CustomDrawer'
import SvgUri from 'react-native-svg-uri';

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
                        {/* <SvgUri width={35} height={35} source={require("../../Assets/svg/plus.svg")}
                            style={{ color: COLORS.theme }}
                        /> */}
                        <Image
                            source={require("../../Assets/plus.png")}
                            resizeMode="contain"
                            style={{ width: 35, height: 35, marginLeft: 10, tintColor: COLORS.theme }}
                        />
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