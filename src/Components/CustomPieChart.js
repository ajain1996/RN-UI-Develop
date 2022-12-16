import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import Pie from 'react-native-pie'
import { commonStyles } from '../utils/Styles'

export default function CustomPieChart({ headingText }) {
    return (
        <View style={styles.container}>
            <Text style={{ ...commonStyles.fs12_400, color: "#999", marginBottom: 4 }}>{headingText}</Text>
            <Pie
                radius={53}
                innerRadius={23}
                sections={[
                    {
                        percentage: 10,
                        color: '#C70039',
                    },
                    {
                        percentage: 20,
                        color: '#44CD40',
                    },
                    {
                        percentage: 30,
                        color: '#404FCD',
                    },
                    {
                        percentage: 40,
                        color: '#EBD22F',
                    },
                ]}
                strokeCap={'butt'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center' },
})