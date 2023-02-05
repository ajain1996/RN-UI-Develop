import { TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';
import BackSVG from '../../Assets/svg/back.svg';
import UpArrow from '../../Assets/svg/up-arrow.svg';
import AddMoney from '../../Assets/svg/moneys.svg';
import ShadowMoney from '../../Assets/svg/shadow-money.svg';
import DownloadCircle from '../../Assets/svg/download-circle.svg';
import Cross from '../../Assets/svg/cross.svg';
import Svg from '../../utils/Svg';
import { COLORS, SIZES } from '../../Constant/Color';
import { commonStyles } from '../../utils/Styles';
import { View } from 'react-native';
import AddressFront from '../../Assets/svg/address-proof-front.svg';
import AddressBack from '../../Assets/svg/address-proof-back.svg';
import Otp from '../../Assets/svg/otp.svg';
import Address from '../../Assets/svg/address.svg';

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
        <View style={{ marginTop: 16 }}>
            <Svg width="100" height="100" source={ShadowMoney} />
            <View style={{ position: "absolute", top: 24, left: 24 }}>
                <Svg width="50" height="50" source={AddMoney} />
            </View>
        </View>
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
                width: 35, height: 35, borderRadius: 100, ...commonStyles.centerStyles
            }}
            onPress={() => { }} underlayColor="#eee"
        >
            <Svg width="70" height="70" source={Cross} style={{ padding: 0 }} />
        </TouchableHighlight>
    );
}

export function AddressFrontSvg() {
    return (
        <View style={{ marginTop: 16 }}>
            <Svg width={SIZES.width / 3.4} height={SIZES.width / 3.4} source={AddressFront} />
            <View style={{ position: "absolute", top: 0, left: -10 }}>
                <Svg width="50" height="50" source={Address} />
            </View>
        </View>
    );
}

export function AddressBackSvg() {
    return (
        <View style={{ marginTop: 16 }}>
            <Svg width={SIZES.width / 3.4} height={SIZES.width / 3.4} source={AddressBack} />
            <View style={{ position: "absolute", top: 0, left: -10 }}>
                <Svg width="50" height="50" source={Address} />
            </View>
        </View>
    );
}

export function OTPSvg() {
    return (
        <Svg width="50" height="50" source={Otp} />
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
