import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Constant/Color';
import { TouchableHighlight } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function CustomCheckTickbox({ callback }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    const returnCheck = () => {
        if (!isChecked) {
            return (
                <Fontisto name="checkbox-passive" size={20} color="#666" />
            )
        } else {
            return (
                <Fontisto name="checkbox-active" size={20} color="#666" />
            )
        }
    }

    return (
        <TouchableHighlight onPress={() => checkBoxOnPress()} underlayColor="#f7f8f9">
            {returnCheck()}
        </TouchableHighlight>
    );
}

export function CustomCheckTickbox2({ callback }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkBoxOnPress = () => {
        setIsChecked(!isChecked);
        callback()
    }

    const returnCheck = () => {
        if (!isChecked) {
            return (
                <Fontisto name="checkbox-active" size={18} color="#666" />
            )
        } else {
            return (
                <Ionicons name="checkbox" size={20} color="#666" />
            )
        }
    }

    return (
        <TouchableHighlight onPress={() => checkBoxOnPress()} underlayColor="#f7f8f9">
            {returnCheck()}
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    checkBox: {
        width: 24, height: 24,
        borderWidth: 1.6,
        borderColor: COLORS.pink,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    checkBox2: {
        width: 20, height: 20,
        borderWidth: 1.6,
        borderColor: COLORS.pink,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    isCheckedStyle: {
        width: 14, height: 14,
        backgroundColor: COLORS.pink,
        borderRadius: 100,
    }
})