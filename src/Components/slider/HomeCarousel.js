import * as React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SIZES } from '../../Constant/Color';
import { commonStyles } from '../../utils/Styles';

const slideList = [
    { image: require("../../Assets/prod/i1.webp") },
    { image: require("../../Assets/prod/i2.webp") },
    { image: require("../../Assets/prod/i3.webp") },
    { image: require("../../Assets/prod/i4.webp") },
    { image: require("../../Assets/prod/i5.webp") },
    { image: require("../../Assets/prod/i7.webp") },
]

export default function HomeCarousel() {
    return (
        <FlatList
            data={slideList}
            renderItem={({ item }) => {
                return <Slide data={item} />;
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
}

function Slide({ data }) {
    return (
        <View style={{ ...commonStyles.centerStyles, paddingVertical: 14, paddingHorizontal: 10, height: 220 }}>
            <Image
                source={data.image}
                style={{ width: SIZES.width - 20, borderRadius: 12, height: 220 }}
            />
        </View>
    );
}
