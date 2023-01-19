import React from 'react';
import Dropdown from '../../Assets/svg/drop-down.svg';
import Upward from '../../Assets/svg/Upward.svg';
import Svg from '../../utils/Svg';

export default function DropdownSvg() {
    return (
        <Svg width="18" height="18" source={Dropdown} style={{ padding: 0 }} />
    );
}

export function UpwardSvg() {
    return (
        <Svg width="18" height="18" source={Upward} style={{ padding: 0 }} />
    );
}
