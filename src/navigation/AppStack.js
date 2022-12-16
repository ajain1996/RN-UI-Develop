import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../Constant/Color";

export default function AppStack() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />
            <Stack.Navigator initialRouteName="Root"
                screenOptions={screenOptions}
            >
                {/* <Stack.Screen name="Root" component={BottomTabs} /> */}
            </Stack.Navigator>
        </>
    );
}