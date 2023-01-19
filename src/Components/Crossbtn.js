import React from 'react'
import Svg from '../utils/Svg'
import Cross2 from "../Assets/svg/cross2.svg";
import GreenTick from "../Assets/svg/green-tick.svg";
import OtpBg from "../Assets/svg/otp-bg.svg";

export function CrossSvg2() {
    return <Svg width="12" height="12" source={Cross2} />
}

export function GreenTickSvg() {
    return <Svg width="90" height="90" source={GreenTick} />
}

export function OtpBgSvg() {
    return <Svg width="90" height="90" source={OtpBg} />
}