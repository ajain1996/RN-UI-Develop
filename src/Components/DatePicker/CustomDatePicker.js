import React, { Component } from 'react';
import { Button, View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import moment from 'moment';
import { commonStyles } from '../../utils/Styles';
import CustomInputBox from '../CustomInputBox';
import { SIZES } from '../../Constant/Color';

var today = new Date();
var tempToday1 = new Date();
var tempToday2 = new Date();
var forSecondStart = 0;
var dateSliced =
    today.getFullYear() +
    '- 0' +
    parseInt(today.getMonth() + 1) +
    '- 0' +
    today.getDate();
// console.log(dateSliced);

export default class PersonalLeaveDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            selectedValue: false,
            minDateObj: undefined,
            maxDateObj: undefined,
            iniDateObj: undefined,
            selectedVal: "",
        };
    }

    today = new Date();
    initialDate = '';

    showDateTimePicker = () => {
        // console.log('showing PersonalDatePicker now:');
        // console.log('Today is set to: ', today);
        // console.log('forsecondstart is:', forSecondStart);
        // console.log('minDate is:', this.props.minimumDate);
        // console.log('minDate type is:', typeof this.props.minimumDate);
        // console.log('maxDate type is:', typeof this.props.maximumDate);
        // console.log('minDate is empty:', this.props.minimumDate.length);
        // console.log('maxDate is empty:', this.props.maximumDate.length);
        this.setState({ isDateTimePickerVisible: true });

        //Setting up minDateObj
        // console.log('\n\n moment date:', moment(this.props.minimumDate, 'DD-MMM-YYYY').toDate())
        var selectedMinDate =
            this?.props?.minimumDate?.length == 0
                ? moment('31-DEC-2010', 'DD-MMM-YYYY').toDate()
                : moment(this.props.minimumDate, 'DD-MMM-YYYY').toDate();
        // console.log('selected min Date:', selectedMinDate);
        var startDateObj = new Date();
        // console.log('type of:', typeof selectedMinDate)
        // console.log('selectedMinDate is:', selectedMinDate)
        // console.log('selectedDate.getDate():', selectedMinDate.getDate());
        startDateObj.setFullYear(selectedMinDate.getFullYear());
        startDateObj.setMonth(selectedMinDate.getMonth());
        startDateObj.setDate(selectedMinDate.getDate());
        // console.log('Start Date Obj is: ', startDateObj);
        this.setState({ minDateObj: startDateObj });

        //Setting up maxDateObj
        // console.log('\n\n moment date:', moment(this.props.maximumDate, 'DD-MMM-YYYY').toDate())
        var selectedMaxDate =
            this?.props?.maximumDate?.length == 0
                ? moment('31-DEC-2030', 'DD-MMM-YYYY').toDate()
                : moment(this.props.maximumDate, 'DD-MMM-YYYY').toDate();
        // console.log('selected max Date:', selectedMaxDate);
        var endDateObj = new Date();
        // console.log('type of:', typeof selectedMaxDate)
        // console.log('selectedMaxDate is:', selectedMaxDate)
        // console.log('selectedDate.getDate():', selectedMaxDate.getDate());
        endDateObj.setFullYear(selectedMaxDate.getFullYear());
        endDateObj.setMonth(selectedMaxDate.getMonth());
        endDateObj.setDate(selectedMaxDate.getDate());
        // console.log('End Date Obj is: ', endDateObj);
        this.setState({ maxDateObj: endDateObj });

        //Setting up initialDateObj
        // console.log('\n\n moment date:', moment(this.props.initialDate, 'DD-MMM-YYYY').toDate())
        var selectedInitialDate =
            this?.props?.initialDate?.length == 0
                ? moment().toDate()
                : moment(this.props.initialDate, 'DD-MMM-YYYY').toDate();
        // console.log('selected initial Date:', selectedInitialDate);
        var initialDateObj = new Date();
        // console.log('type of:', typeof selectedInitialDate)
        // console.log('selectedInitialDate is:', selectedInitialDate)
        // console.log('selectedDate.getDate():', selectedInitialDate.getDate());
        initialDateObj.setFullYear(selectedInitialDate.getFullYear());
        initialDateObj.setMonth(selectedInitialDate.getMonth());
        initialDateObj.setDate(selectedInitialDate.getDate());
        // console.log('Initial Date Obj is: ', initialDateObj);
        this.setState({ iniDateObj: initialDateObj });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        // console.log("A date has been picked: ", date);
        this.initialDate = '' + date;
        this.initialDate = this.initialDate.slice(4, 16);
        this.props.isStart != 'yes' ? forSecondStart++ : (forSecondStart = 0);
        tempToday1 = date;
        this.props.onDateSelected(date);
        this.setState({ selectedValue: true, selectedVal: date, });
        this.hideDateTimePicker();
    };


    render() {
        console.log("\n\n selectedVal: ", this?.state?.selectedVal)
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.showDateTimePicker} activeOpacity={0.8}>
                    <CustomInputBox
                        heading={this.props.heading}
                        placeholder="Enter date of birth"
                        width={SIZES.width / 1.1}
                        defaultValue={this?.props?.selectedVal}
                        onChange={() => { }}
                    />
                    <View style={{ width: SIZES.width / 1.1, height: 52, backgroundColor: "transparent", marginTop: -52 }} />
                </TouchableOpacity>
                <DateTimePicker
                    date={this.state.iniDateObj}
                    isVisible={this.state.isDateTimePickerVisible}
                    minimumDate={this.state.minDateObj} //{Date.now()}//{this.props.isStart == 'yes' ? tempToday2 : tempToday1}
                    maximumDate={this.state.maxDateObj} //{this.props.isStart == 'yes' && forSecondStart != 0 ? tempToday1 : null}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        marginLeft: 0,
    },
    containerBig: {
        marginTop: 0,
        marginLeft: 0,
        fontSize: 12,
        fontFamily: 'STCForward-Regular',
    },
    inputContainer: {
        marginTop: 5,
        marginHorizontal: 0,
        marginBottom: 0,
        width: windowWidth / 2 - 30,
        borderWidth: 1,
        height: 55,
        borderColor: '#BDBDBD',
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 16,
    },
    inputContainerBig: {
        marginTop: 5,
        marginHorizontal: 20,
        marginBottom: 15,
        width: '90%',
        height: 42,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    heading: {
        marginTop: 0,
        marginLeft: 0,
        ...commonStyles.fs16_500,
        marginTop: 14,
    },
    headingBig: {
        marginTop: 0,
        marginLeft: 20,
        fontSize: 12,
        fontFamily: 'STCForward-Regular',
    },
    iconStyle: {
        color: '#8e9aa0',
        marginBottom: 5,
        marginRight: 10,
        marginHorizontal: 0,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 12,
        fontFamily: 'STCForward-Regular',
        color: '#999999',
    },
    inputBlack: {
        padding: 10,
        flex: 1,
        fontSize: 12,
        fontFamily: 'STCForward-Regular',
        color: '#000',
    },
});
