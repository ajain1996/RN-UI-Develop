import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import InventoryFilterHeader from './InventoryFilterHeader'
import { Image } from 'react-native';
import { commonStyles } from '../../utils/Styles';
import { COLORS, SIZES } from '../../Constant/Color';
import { Button } from 'react-native-paper';
import { CrossSvg2 } from '../../Components/Crossbtn';
import { UpArrowSvg } from '../../Components/svg/BackSvg';

export default function InventoryFilterScreen() {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <InventoryFilterHeader />

            <ScrollView keyboardShouldPersistTaps={'always'}>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{ width: "100%", padding: 16, backgroundColor: COLORS.bg, elevation: 9, shadowColor: "#999", borderRadius: 10 }}>
                        <TouchableOpacity style={{ ...commonStyles.rowBetween, marginBottom: 12 }}>
                            <Text style={{ ...commonStyles.fs16_500, color: COLORS.theme }}>Banks</Text>
                            <UpArrowSvg />
                        </TouchableOpacity>

                        <View style={{ ...commonStyles.row }}>
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400, marginRight: 10 }}>Paytm bank</Text>
                                <CrossSvg2 onPress={() => { }} />
                            </View>
                            <View style={{ width: 14 }} />
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400, marginRight: 10 }}>Kotak bank</Text>
                                <CrossSvg2 onPress={() => { }} />
                            </View>
                        </View>
                        <View style={{ height: 14 }} />
                        <View style={{ ...commonStyles.rowStart }}>
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400, marginRight: 10 }}>State bank of india</Text>
                                <CrossSvg2 onPress={() => { }} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 16 }}>
                    <View style={styles.select}>
                        {
                            ["Select All", "Paytm bank", "Kotak bank", "State bank", "ICICI bank", "Dena bank"].map((item, index) => {
                                return (
                                    <View style={{ ...commonStyles.rowBetween, marginVertical: 8 }} key={index}>
                                        <Text style={{ ...commonStyles.fs14_400 }}>{item}</Text>
                                        <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: "#999", ...commonStyles.centerStyles, borderRadius: 3 }}>
                                            <Image
                                                source={require("../../Assets/tick.png")}
                                                style={{ width: 12, height: 12 }}
                                            />
                                        </View>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{ width: "100%", padding: 16, backgroundColor: COLORS.bg, elevation: 9, shadowColor: "#999", borderRadius: 10 }}>
                        <TouchableOpacity style={{ ...commonStyles.rowBetween, marginBottom: 12 }}>
                            <Text style={{ ...commonStyles.fs16_500, color: COLORS.theme }}>Status</Text>
                            <UpArrowSvg />
                        </TouchableOpacity>

                        <View style={{ ...commonStyles.row }}>
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400, marginRight: 10 }}>In-Stock</Text>
                                <CrossSvg2 onPress={() => { }} />
                            </View>
                            <View style={{ width: 14 }} />
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400, marginRight: 10 }}>Issued</Text>
                                <CrossSvg2 onPress={() => { }} />
                            </View>
                            <View style={{ width: 14 }} />
                            <View style={{ ...commonStyles.rowStart }}>
                                <View style={styles.typeBtn}>
                                    <Text style={{ ...commonStyles.fs12_400, marginRight: 10 }}>Return</Text>
                                    <CrossSvg2 onPress={() => { }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 16 }}>
                    <View style={styles.select}>
                        {
                            ["Select All", "In-Stock", "Issued", "Return", "Replacement", "Replaced"].map((item, index) => {
                                return (
                                    <View style={{ ...commonStyles.rowBetween, marginVertical: 8 }} key={index}>
                                        <Text style={{ ...commonStyles.fs14_400 }}>{item}</Text>
                                        <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: "#999", ...commonStyles.centerStyles, borderRadius: 3 }}>
                                            <Image
                                                source={require("../../Assets/tick.png")}
                                                style={{ width: 12, height: 12 }}
                                            />
                                        </View>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>

                <View style={{ ...commonStyles.rowBetween, paddingHorizontal: 16 }}>
                    <Button style={styles.saveBtn} textColor="#fff" onPress={() => { }}>
                        Save
                    </Button>

                    <Button style={styles.cancelBtn} textColor="#999" onPress={() => { }}>
                        Cancel
                    </Button>
                </View>
                <Text />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    typeBtn: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: "#DDE6F6",
        ...commonStyles.rowBetween,
        borderRadius: 50,
    },
    select: {
        elevation: 9, shadowColor: "#999", backgroundColor: COLORS.bg,
        padding: 16, borderRadius: 16,
    },
    saveBtn: {
        width: SIZES.width / 2.3,
        height: 52,
        backgroundColor: COLORS.theme,
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#aaa"
    },
    cancelBtn: {
        width: SIZES.width / 2.3,
        height: 52,
        backgroundColor: "#fff",
        borderRadius: 100,
        ...commonStyles.centerStyles,
        elevation: 22, shadowColor: "#999",
        borderWidth: 1, borderColor: "#eee"
    }
})