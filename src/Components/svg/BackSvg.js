import { TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';
import BackSVG from '../../Assets/svg/back.svg';
import UpArrow from '../../Assets/svg/up-arrow.svg';
import AddMoney from '../../Assets/svg/moneys.svg';
import DownloadCircle from '../../Assets/svg/download-circle.svg';
import Cross from '../../Assets/svg/cross.svg';
import Svg from '../../utils/Svg';
import { COLORS } from '../../Constant/Color';
import { commonStyles } from '../../utils/Styles';

export default function BackSvg({ onPress }) {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={onPress}
            underlayColor="#dcdcdc">
            <Svg width="85" height="85" source={BackSVG} style={{ padding: 0 }} />
        </TouchableHighlight>
    );
}

export function BackSvg2({ onPress }) {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={onPress}
            underlayColor="#dcdcdc">
            <Svg width="70" height="70" source={BackSVG} style={{ padding: 0 }} />
        </TouchableHighlight>
    );
}

export function ForwardSvg({ onPress }) {
    return (
        <TouchableHighlight
            style={{ ...styles.button, transform: [{ rotate: '180deg' }] }}
            onPress={onPress}
            underlayColor="#dcdcdc">
            <Svg width="70" height="70" source={BackSVG} style={{ padding: 0 }} />
        </TouchableHighlight>
    );
}

export function UpArrowSvg() {
    return (
        <Svg width="20" height="20" source={UpArrow} style={{ padding: 0 }} />
    );
}

export function AddMoneySvg() {
    return (
        <Svg width="50" height="50" source={AddMoney} style={{ padding: 0 }} />
    );
}

export function DownloadCircleSvg() {
    return (
        <Svg width="30" height="30" source={DownloadCircle} style={{ padding: 0 }} />
    );
}

export function CrossSvg() {
    return (
        <TouchableHighlight
            style={{
                elevation: 9, shadowColor: "#999", backgroundColor: COLORS.bg,
                width: 40, height: 40, borderRadius: 100, ...commonStyles.centerStyles
            }}
            onPress={() => { }} underlayColor="#eee"
        >
            <Svg width="70" height="70" source={Cross} style={{ padding: 0 }} />
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        elevation: 9,
        shadowColor: '#999',
        backgroundColor: COLORS.bg,
        width: 34,
        height: 34,
        borderRadius: 100,
        ...commonStyles.centerStyles,
    },
});
