import { View, Text, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import WalletFilterHeader from './WalletFilterHeader';
import { commonStyles } from '../../../utils/Styles';
import { COLORS, SIZES } from '../../../Constant/Color';
import ShadowBg from '../../../Components/ShadowBg';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment/moment';
import { Button } from 'react-native-paper';
import WalletDatePicker from '../WalletDatePicker';
import AddMoneyPicker from '../AddMoneyPicker';
import BackSvg, { BackSvg2, ForwardSvg, UpArrowSvg } from '../../../Components/svg/BackSvg';

export default function WalletFilterScreen({ navigation }) {
    var month = parseInt(moment().format('MM'));
    var [currMonthPassed, setCurrMonthPassed] = React.useState(new Date());
    const [currentMonth, setCurrentMonth] = React.useState(month);
    const [dateFIlterModal, setDateFilterModal] = React.useState(false);
    const [addMoneyModal, setaddMoneyModal] = React.useState(false);

    const handleChangeMonth = data => {
        console.log('this is month', data.month);
    };

    return (
        <View style={{ ...commonStyles.bgFFF, backgroundColor: "#fff" }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <WalletFilterHeader navigation={navigation} />

            <ScrollView>
                <View style={{ padding: 30 }}>
                    <Text style={{ ...commonStyles.fs18_500, color: COLORS.theme }}>
                        Date
                    </Text>

                    <View style={{ ...commonStyles.rowBetween, marginTop: 20 }}>
                        <View>
                            <Text style={{ ...commonStyles.fs13_400, color: '#999' }}>From</Text>
                            <ShadowBg
                                width={SIZES.width / 2.5}
                                image={require('../../../Assets/shadow2.png')}
                                height={52}
                                paddingHorizontal={5}
                                childComponent={
                                    <TouchableOpacity
                                        style={{ ...commonStyles.rowBetween, paddingHorizontal: 14 }}
                                        onPress={() => { setDateFilterModal(true) }}
                                    >
                                        <Image
                                            source={require('../../../Assets/date.png')}
                                            style={{ width: 25, height: 25, tintColor: COLORS.theme }}
                                        />
                                        <Text style={{ ...commonStyles.fs14_400, color: '#999' }}>
                                            01/01/2022
                                        </Text>
                                    </TouchableOpacity>
                                }
                            />
                        </View>

                        <View>
                            <Text style={{ ...commonStyles.fs13_400, color: '#999' }}>To</Text>
                            <ShadowBg
                                width={SIZES.width / 2.5}
                                image={require('../../../Assets/shadow2.png')}
                                height={52}
                                paddingHorizontal={5}
                                childComponent={
                                    <TouchableOpacity
                                        style={{ ...commonStyles.rowBetween, paddingHorizontal: 14 }}
                                        onPress={() => { setaddMoneyModal(true) }}
                                    >
                                        <Image
                                            source={require('../../../Assets/date.png')}
                                            style={{ width: 25, height: 25, tintColor: COLORS.theme }}
                                        />
                                        <Text style={{ ...commonStyles.fs14_400, color: '#999' }}>
                                            Select Date
                                        </Text>
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        pointerEvents: 'none',
                        backgroundColor: '#fff',
                    }}>
                    <CalendarList
                        current={currMonthPassed}
                        horizontal={true}
                        onMonthChange={handleChangeMonth}
                        hideArrows={true}
                        pagingEnabled={true}
                        calendarWidth={SIZES.width}
                        theme={{ todayTextColor: 'black' }}
                        enableSwipeMonths={true}
                        disableIntervalMomentum
                        agendaDayNumColor={COLORS.bg}
                        markingType={'period'}
                        style={{ backgroundColor: COLORS.bg }}
                    />
                    <View
                        style={{
                            width: SIZES.width,
                            height: 365,
                            marginTop: -350,
                            backgroundColor: 'transparent',
                        }}>
                        <View style={{ ...commonStyles.rowBetween, width: SIZES.width, paddingHorizontal: 50 }}>
                            <BackSvg2 onPress={() => {
                                var val = moment(currMonthPassed);
                                val = val.subtract(1, 'months').format('YYYY-MM-DD');
                                setCurrMonthPassed(val);
                                var valmonth = parseInt(moment(val).format('MM'));
                                setCurrentMonth(valmonth);
                                console.log('setCurrMonthPassed Left', val, valmonth);
                            }} />

                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    elevation: 9,
                                    shadowColor: '#999',
                                    backgroundColor: COLORS.bg,
                                    borderRadius: 100,
                                    ...commonStyles.centerStyles,
                                    marginRight: 16
                                }}>
                                <ForwardSvg onPress={() => {
                                    var val = moment(currMonthPassed);
                                    val = val.add(1, 'months').format('YYYY-MM-DD');
                                    setCurrMonthPassed(val);
                                    var valmonth = parseInt(moment(val).format('MM'));
                                    setCurrentMonth(valmonth);
                                    console.log('setCurrMonthPassed Right', val, valmonth);
                                }} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{ width: "100%", padding: 16, backgroundColor: "#fff", elevation: 9, shadowColor: "#999", borderRadius: 10 }}>
                        <TouchableOpacity style={{ ...commonStyles.rowBetween, marginBottom: 12 }}>
                            <Text style={{ ...commonStyles.fs16_500, color: COLORS.theme }}>Select Types</Text>
                            <UpArrowSvg />
                        </TouchableOpacity>

                        <View style={{ ...commonStyles.row }}>
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400 }}>Wallet Load</Text>
                                <Image
                                    source={require("../../../Assets/cross.png")}
                                    style={{ width: 12, height: 12, tintColor: COLORS.theme, marginLeft: 12 }}
                                />
                            </View>
                            <View style={{ width: 14 }} />
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400 }}>Tag recharge</Text>
                                <Image
                                    source={require("../../../Assets/cross.png")}
                                    style={{ width: 12, height: 12, tintColor: COLORS.theme, marginLeft: 12 }}
                                />
                            </View>
                        </View>
                        <View style={{ height: 14 }} />
                        <View style={{ ...commonStyles.rowStart }}>
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400 }}>Tag cost</Text>
                                <Image
                                    source={require("../../../Assets/cross.png")}
                                    style={{ width: 12, height: 12, tintColor: COLORS.theme, marginLeft: 12 }}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 16 }}>
                    <View style={styles.select}>
                        {
                            ["Select All", "Wallet Load", "Tag recharge", "Tag cost", "Commisions", "Issurance"].map((item, index) => {
                                return (
                                    <View style={{ ...commonStyles.rowBetween, marginVertical: 8 }} key={index}>
                                        <Text style={{ ...commonStyles.fs14_400 }}>{item}</Text>
                                        <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: "#999", ...commonStyles.centerStyles, borderRadius: 3 }}>
                                            <Image
                                                source={require("../../../Assets/tick.png")}
                                                style={{ width: 12, height: 12 }}
                                            />
                                        </View>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>

                <View style={{ ...commonStyles.rowBetween, paddingHorizontal: 16 }}>
                    <Button style={styles.saveBtn} textColor="#fff" onPress={() => {
                        navigation.navigate("InventroyScreen")
                    }}>
                        Save
                    </Button>

                    <Button style={styles.cancelBtn} textColor="#999" onPress={() => {
                        navigation.goBack();
                    }}>
                        Cancel
                    </Button>
                </View>
                <Text />
            </ScrollView>

            <WalletDatePicker
                modalVisible={dateFIlterModal}
                callback={() => { setDateFilterModal(false) }}
            />

            <AddMoneyPicker
                modalVisible={addMoneyModal}
                callback={() => { setaddMoneyModal(false) }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    typeBtn: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: "#DDE6F6",
        ...commonStyles.rowBetween,
        borderRadius: 50,
    },
    select: {
        elevation: 9, shadowColor: "#999", backgroundColor: "#fff",
        padding: 16, borderRadius: 16,
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
    }
})
