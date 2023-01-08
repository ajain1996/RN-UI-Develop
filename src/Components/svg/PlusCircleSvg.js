import React from 'react';
import { TouchableOpacity } from 'react-native';
import Plus from '../../Assets/svg/plus.svg';
import Svg from '../../utils/Svg';

export default function PlusCircleSvg({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <Svg width="35" height="35" source={Plus} style={{ padding: 0 }} />
        </TouchableOpacity>
    );
}
