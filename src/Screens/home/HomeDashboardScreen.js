import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/Styles'
import DashboardHeader from './DashboardHeader'
import HomeCarousel from '../../Components/slider/HomeCarousel'
import { Image } from 'react-native'
import { FlatList } from 'react-native'
import { COLORS, SIZES } from '../../Constant/Color'
import { HL1, HL2, HL3, HL4, HL5, HL6, } from '../../utils/ImageManager'
import SvgUri from 'react-native-svg-uri';
import ShadowBg from '../../Components/ShadowBg'
import { Button } from 'react-native-paper'
import CustomPieChart from '../../Components/CustomPieChart'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const homelist = [
    { image: HL1 },
    { image: HL2 },
    { image: HL3 },
    { image: HL4 },
    { image: HL5 },
    { image: HL6 },
]

const data = [
    {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "New York",
        population: 8538000,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

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
                                <SvgUri width={SIZES.width / 5.0} height={SIZES.width / 4.2} source={item?.image} />
                            </View>
                        );
                    }}
                    ListHeaderComponent={
                        <View>
                            <HomeCarousel />
                            <Image
                                source={require("../../Assets/home-tags.png")}
                                resizeMode="contain"
                                style={{ width: SIZES.width, alignSelf: "center" }}
                            />
                        </View>
                    }
                    ListFooterComponent={
                        <>
                            <View style={{ marginTop: 16, padding: 14, elevation: 9, shadowColor: "#999", backgroundColor: COLORS.bg, margin: 20, borderRadius: 9 }}>
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
                                    <CustomPieChart headingText="Onboard" />
                                    <CustomPieChart headingText="Replacement" />
                                    <CustomPieChart headingText="Pending" />
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
})