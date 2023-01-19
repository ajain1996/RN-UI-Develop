import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES } from '../../Constant/Color';
import { commonStyles } from '../../utils/Styles';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowBg from '../../Components/ShadowBg';
import { BackSvg2, ForwardSvg } from '../../Components/svg/BackSvg';

const WalletDatePicker = ({ modalVisible, callback }) => {
    var month = parseInt(moment().format('MM'));
    var [currMonthPassed, setCurrMonthPassed] = React.useState(new Date());
    const [currentMonth, setCurrentMonth] = React.useState(month);

    const handleChangeMonth = data => {
        console.log('this is month', data.month);
    };

    return (
        <View style={{ alignItems: 'flex-start' }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    callback();
                }}>
                <TouchableHighlight
                    style={styles.centeredView}
                    onPress={() => {
                        callback();
                    }}
                    underlayColor="transparent">
                    <TouchableOpacity style={styles.modalView} activeOpacity={1}>
                        <ScrollView keyboardShouldPersistTaps={'always'}>
                            <View style={{ ...commonStyles.rowBetween, paddingHorizontal: 20 }}>
                                <View style={{ width: 50, height: 50 }} />
                                <Text style={{ ...commonStyles.fs15_500 }}>Date Filter</Text>
                                <Text style={{ ...commonStyles.fs13_400, color: COLORS.theme }}>Clear</Text>
                            </View>
                            <View style={{ ...commonStyles.rowBetween, marginTop: 20, paddingHorizontal: 30 }}>
                                <View>
                                    <Text style={{ ...commonStyles.fs13_400, color: '#999' }}>From</Text>
                                    <ShadowBg
                                        width={SIZES.width / 2.5}
                                        image={require('../../Assets/shadow2.png')}
                                        height={52}
                                        paddingHorizontal={5}
                                        childComponent={
                                            <View
                                                style={{ ...commonStyles.rowBetween, paddingHorizontal: 14 }}>
                                                <Image
                                                    source={require('../../Assets/date.png')}
                                                    style={{ width: 25, height: 25, tintColor: COLORS.theme }}
                                                />
                                                <Text style={{ ...commonStyles.fs14_400, color: '#999' }}>
                                                    01/01/2022
                                                </Text>
                                            </View>
                                        }
                                    />
                                </View>

                                <View>
                                    <Text style={{ ...commonStyles.fs13_400, color: '#999' }}>To</Text>
                                    <ShadowBg
                                        width={SIZES.width / 2.5}
                                        image={require('../../Assets/shadow2.png')}
                                        height={52}
                                        paddingHorizontal={5}
                                        childComponent={
                                            <View
                                                style={{ ...commonStyles.rowBetween, paddingHorizontal: 14 }}>
                                                <Image
                                                    source={require('../../Assets/date.png')}
                                                    style={{ width: 25, height: 25, tintColor: COLORS.theme }}
                                                />
                                                <Text style={{ ...commonStyles.fs14_400, color: '#999' }}>
                                                    Select Date
                                                </Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    pointerEvents: 'none',
                                    backgroundColor: '#fff',
                                    marginTop: 20,
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
                                        height: SIZES.width * 1.29,
                                        marginTop: -SIZES.width / 1.18,
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

                                <View style={{ ...commonStyles.rowBetween, paddingHorizontal: 16, marginTop: -200 }}>
                                    <Button style={styles.saveBtn} textColor="#fff" onPress={() => { }}>
                                        Save
                                    </Button>

                                    <Button style={styles.cancelBtn} textColor="#999" onPress={() => { }}>
                                        Cancel
                                    </Button>
                                </View>
                                <Text />
                            </View>
                        </ScrollView>
                    </TouchableOpacity>
                </TouchableHighlight>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: SIZES.width,
        height: SIZES.height,
    },
    modalView: {
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: SIZES.width,
        height: SIZES.width * 1.4,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    button: {
        padding: 20,
        width: SIZES.width / 1.6,
        backgroundColor: '#f7f8f9',
        alignItems: 'center',
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    textStyle: {
        color: '#000',
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    reportInput: {
        width: SIZES.width / 1.8,
        height: 48,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        marginBottom: 6,
        color: '#000',
        paddingHorizontal: 12,
    },
    btnWrapper: {
        width: '100%',
        height: 48,
        ...commonStyles.centerStyles,
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
});

export default WalletDatePicker;
