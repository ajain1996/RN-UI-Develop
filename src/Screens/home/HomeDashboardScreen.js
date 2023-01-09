import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import DashboardHeader from './DashboardHeader'
import HomeCarousel from '../../Components/slider/HomeCarousel'
import { Image } from 'react-native'
import { FlatList } from 'react-native'
import { COLORS, SIZES } from '../../Constant/Color'
import { HL1, HL2, HL3, HL4, HL5, HL6, } from '../../utils/ImageManager'
import ShadowBg from '../../Components/ShadowBg'
import { Button } from 'react-native-paper'
import Svg from '../../utils/Svg'
import HomeDashBg from '../../Assets/svg/home-dash-bg.svg';

const homelist = [
    { image: HL1 },
    { image: HL2 },
    { image: HL3 },
    { image: HL4 },
    { image: HL5 },
    { image: HL6 },
]

export default function HomeDashboardScreen({ navigation }) {
    const [debitCredit, setdebitCredit] = React.useState('today');
    const shiftSize = 7;

    return (
        <View style={{ width: "100%", backgroundColor: COLORS.bg }}>
            <DashboardHeader title="Zack Foster" navigation={navigation} />

            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={homelist}
                    numColumns={3}
                    columnWrapperStyle={{ marginLeft: 10 }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.section}>
                                <Svg width={SIZES.width / 5.0} height={SIZES.width / 4.2} source={item?.image} />
                            </View>
                        );
                    }}
                    ListHeaderComponent={
                        <View>
                            <HomeCarousel />
                            <View style={{ ...commonStyles.rowBetween }}>
                                <RenderHomeTags number={55} text="Registered Tag" />
                                <RenderHomeTags number={12} text="Tag in Stock" />
                            </View>
                        </View>
                    }
                    ListFooterComponent={
                        <>
                            <View style={{ marginTop: 16, padding: 14, elevation: 9, shadowColor: "#999", backgroundColor: COLORS.bg, margin: 20, borderRadius: 9, width: "91%" }}>
                                <ShadowBg
                                    width={SIZES.width / 1.2}
                                    height={52}
                                    paddingHorizontal={5}
                                    childComponent={
                                        <View style={{ ...commonStyles.rowBetween, marginTop: 3 }}>
                                            <Button
                                                style={
                                                    debitCredit === 'today' ? styles.saveBtn : styles.cancelBtn
                                                }
                                                textColor={debitCredit === 'today' ? '#fff' : '#999'}
                                                onPress={() => {
                                                    setdebitCredit('today');
                                                }}>
                                                Today
                                            </Button>

                                            <Button
                                                style={
                                                    debitCredit === 'month' ? styles.saveBtn : styles.cancelBtn
                                                }
                                                textColor={debitCredit === 'month' ? '#fff' : '#999'}
                                                onPress={() => {
                                                    setdebitCredit('month');
                                                }}>
                                                This Month
                                            </Button>

                                            <Button
                                                style={
                                                    debitCredit === 'week' ? styles.saveBtn : styles.cancelBtn
                                                }
                                                textColor={debitCredit === 'week' ? '#fff' : '#999'}
                                                onPress={() => {
                                                    setdebitCredit('week');
                                                }}>
                                                This Month
                                            </Button>
                                            <View style={{ width: 1 }} />
                                        </View>
                                    }
                                />

                                <View style={{ ...commonStyles.rowBetween, marginTop: 16 }}>
                                    <View style={{ width: "30%" }}>
                                        <Image
                                            source={require("../../Assets/pie1.png")}
                                            resizeMode="stretch"
                                            style={{ width: "100%", height: SIZES.width / 3.3 }}
                                        />
                                        <View style={{ position: "absolute", bottom: 12, left: "37.5%", backgroundColor: COLORS.bg }}>
                                            <Text style={{ ...commonStyles.fs11_400 }}>0055</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: "30%" }}>
                                        <Image
                                            source={require("../../Assets/pie2.png")}
                                            resizeMode="stretch"
                                            style={{ width: "100%", height: SIZES.width / 3.3 }}
                                        />
                                        <View style={{ position: "absolute", bottom: 12, left: "37.5%", backgroundColor: COLORS.bg }}>
                                            <Text style={{ ...commonStyles.fs11_400 }}>0011</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: "30%" }}>
                                        <Image
                                            source={require("../../Assets/pie3.png")}
                                            resizeMode="stretch"
                                            style={{ width: "100%", height: SIZES.width / 3.3 }}
                                        />
                                        <View style={{ position: "absolute", bottom: 12, left: "37.5%", backgroundColor: COLORS.bg }}>
                                            <Text style={{ ...commonStyles.fs11_400 }}>00044</Text>
                                        </View>
                                    </View>
                                    {/* <PieChart
                                        data={data}
                                        width={SIZES.width}
                                        height={220}
                                        chartConfig={chartConfig}
                                        accessor={"population"}
                                        backgroundColor={"transparent"}
                                        paddingLeft={"0"}
                                        center={[10, 10]}
                                        absolute
                                    /> */}
                                    {/* <CustomPieChart headingText="Onboard" />
                                    <CustomPieChart headingText="Replacement" />
                                    <CustomPieChart headingText="Pending" /> */}
                                </View>
                            </View>
                            <View style={{ height: 170 }} />
                        </>
                    }
                />
            </View>
        </View>
    )
}

const RenderHomeTags = ({ number, text }) => {
    return (
        <View>
            <>
                <Svg width={SIZES.width / 1.95} height={150} source={HomeDashBg} />
                <View style={styles.homeTagStyle}>
                    <Text style={{ fontSize: 40, fontWeight: "700", color: "#fff", marginBottom: 5 }}>{number}</Text>
                    <Text style={{ fontSize: 16, fontWeight: "400", color: "#fff" }}>{text}</Text>
                </View>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        elevation: 9, shadowColor: "#999",
        backgroundColor: COLORS.bg,
        padding: 16, margin: 8,
        borderRadius: 8, alignSelf: "center"
    },
    saveBtn: {
        width: SIZES.width / 3.7,
        height: 45,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
    },
    cancelBtn: {
        width: SIZES.width / 3.7,
        height: 45,
        backgroundColor: 'transparent',
        borderRadius: 100,
        ...commonStyles.centerStyles,
    },
    homeTagStyle: {
        width: SIZES.width / 1.95,
        height: 150,
        position: "absolute",
        top: 15, left: 18,
        padding: 12
    }
})