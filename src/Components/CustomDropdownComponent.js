import { View, Text } from 'react-native'
import React from 'react'
import { dropdownStyles } from '../utils/dropdownStyles';
import { Dropdown } from 'react-native-element-dropdown';
import { SIZES } from '../Constant/Color';

export default function CustomDropdownComponent({ placeholder, data, width, height }) {
    const [isFocus, setIsFocus] = React.useState(false);
    const [value, setValue] = React.useState("");

    const renderItem = (item) => {
        return (
            <View style={dropdownStyles.item}>
                <Text style={dropdownStyles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View style={dropdownStyles.container}>
            <Dropdown
                style={[dropdownStyles.dropdown, isFocus ? { borderColor: 'blue' } : {
                    width: width ? width : SIZES.width / 1.25, alignSelf: "center", height: height ? height : 50
                }]}
                placeholderStyle={dropdownStyles.placeholderStyle}
                selectedTextStyle={dropdownStyles.selectedTextStyle}
                inputSearchStyle={dropdownStyles.inputSearchStyle}
                iconStyle={dropdownStyles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? placeholder : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderItem={renderItem}
            // renderLeftIcon={() => (
            //     <Crossbtn callback={callback} />
            // )}
            />

            {/* {value.length !== 0 ? <View style={{ position: "absolute", top: 31, left: 30 }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#555" }}>{value}</Text>
                            </View> : <></>} */}
        </View>
    )
}