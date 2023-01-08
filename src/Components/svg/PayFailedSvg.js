import React from 'react';
import PayFailed from '../../Assets/svg/pay-failed.svg';
import Svg from '../../utils/Svg';

export default function PayFailedSvg() {
    return (
        <Svg width="40" height="40" source={PayFailed} style={{ padding: 0 }} />
    );
}
