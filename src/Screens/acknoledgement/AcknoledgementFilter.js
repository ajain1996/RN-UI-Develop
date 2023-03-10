import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { commonStyles } from '../../utils/Styles';
import { Button } from 'react-native-paper';
import { COLORS, SIZES } from '../../Constant/Color';
import InventoryFilterHeader from '../inventory/InventoryFilterHeader';
import { CustomCheckTickbox2 } from '../../Components/CustomCheckbox';

export default function AcknoledgementFilter({ navigation }) {
    return (
        <View style={{ ...commonStyles.bgFFF }}>
            <InventoryFilterHeader navigation={navigation} />

            <ScrollView>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={styles.section1}>
                        <TouchableOpacity style={{ ...commonStyles.rowBetween, marginBottom: 12 }}>
                            <Text style={styles.title}>Select Banks</Text>
                            <Image
                                source={require("../../Assets/up-arrow.png")}
                                resizeMode="contain"
                                style={{ width: 18, height: 18 }}
                            />
                        </TouchableOpacity>

                        <View style={{ ...commonStyles.row }}>
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400 }}>Paytm bank</Text>
                                <Image
                                    source={require("../../Assets/cross.png")}
                                    style={styles.cross}
                                />
                            </View>
                            <View style={{ width: 14 }} />
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400 }}>Axis bank</Text>
                                <Image
                                    source={require("../../Assets/cross.png")}
                                    style={styles.cross}
                                />
                            </View>
                        </View>
                        <View style={{ height: 14 }} />
                        <View style={{ ...commonStyles.rowStart }}>
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400 }}>State bank of india</Text>
                                <Image
                                    source={require("../../Assets/cross.png")}
                                    style={styles.cross}
                                />
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
                                        <CustomCheckTickbox2
                                            callback={() => { }}
                                        />
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16 }}>
                    <View style={styles.section1}>
                        <TouchableOpacity style={{ ...commonStyles.rowBetween, marginBottom: 12 }}>
                            <Text style={styles.title}>Vehicle class</Text>
                            <Image
                                source={require("../../Assets/up-arrow.png")}
                                resizeMode="contain"
                                style={{ width: 18, height: 18 }}
                            />
                        </TouchableOpacity>

                        <View style={{ ...commonStyles.row }}>
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400 }}>VC-1</Text>
                                <Image
                                    source={require("../../Assets/cross.png")}
                                    style={styles.cross}
                                />
                            </View>
                            <View style={{ width: 14 }} />
                            <View style={styles.typeBtn}>
                                <Text style={{ ...commonStyles.fs12_400 }}>VC-2</Text>
                                <Image
                                    source={require("../../Assets/cross.png")}
                                    style={styles.cross}
                                />
                            </View>
                            <View style={{ width: 14 }} />
                            <View style={{ ...commonStyles.rowStart }}>
                                <View style={styles.typeBtn}>
                                    <Text style={{ ...commonStyles.fs12_400 }}>VC-3</Text>
                                    <Image
                                        source={require("../../Assets/cross.png")}
                                        style={styles.cross}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 16 }}>
                    <View style={styles.select}>
                        {
                            ["VC-1", "VC-2", "VC-3", "VC-4"].map((item, index) => {
                                return (
                                    <View style={{ ...commonStyles.rowBetween, marginVertical: 8 }} key={index}>
                                        <Text style={{ ...commonStyles.fs14_400 }}>{item}</Text>
                                        <CustomCheckTickbox2
                                            callback={() => { }}
                                        />
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
    },
    section1: {
        width: "100%", padding: 16, backgroundColor: COLORS.bg,
        elevation: 9, shadowColor: "#999", borderRadius: 10,
    },
    title: {
        ...commonStyles.fs16_500, color: COLORS.theme
    },
    cross: {
        width: 12, height: 12, tintColor: COLORS.theme, marginLeft: 12
    },
    tick: {
        width: 20, height: 20, borderWidth: 1,
        borderColor: "#999", ...commonStyles.centerStyles,
        borderRadius: 3,
    }
})