import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Login from '../Screens/Login/Login';
import ResetScreen from '../Screens/ResetScreen/ResetScreen';
import LoginOTPVerification from '../Screens/loginOTPVerification/LoginOTPVerification';
import NewPassword from '../Screens/NewPassword/NewPassword';
import Register from '../Screens/Register/Register';
import ResetPassword from '../Screens/ResetPassword/ResetPassword';
import VerifyOTP from '../Screens/VerifyOTP/VerifyOTP';
import RegisterProfile from '../Screens/RegisterProfile/RegisterProfile';
import { COLORS } from "../Constant/Color";
import WalletScreen from "../Screens/wallet/WalletScreen";
import WalletFilterScreen from "../Screens/wallet/filter/WalletFilterScreen";
import InventoryScreen from "../Screens/inventory/InventoryScreen";
import InventoryFilterScreen from "../Screens/inventory/InventoryFilterScreen";
import InventorySuccessScreen from "../Screens/inventory/InventorySuccessScreen";
import RequestsScreen from "../Screens/requests/RequestsScreen";
import OrdersScreen from "../Screens/orders/OrdersScreen";
import OrderSummaryScreen from "../Screens/orders/OrderSummaryScreen";
import OrderDetailsScreen from "../Screens/order-details/OrderDetailsScreen";
import AcknoledgementScreen from "../Screens/acknoledgement/AcknoledgementScreen";
import AcknoledgementFilter from "../Screens/acknoledgement/AcknoledgementFilter";
import InsuranceTrackerScreen from "../Screens/insurance/InsuranceTrackerScreen";
import CustomerDetailsScreen from "../Screens/customer-details/CustomerDetailsScreen";
import PrivacyPolicyScreen from "../Screens/privacy/PrivacyPolicyScreen";
import TermsAndConditions from "../Screens/privacy/TermsAndConditions";
import CustomerRegistrationScreen from "../Screens/customer-details/CustomerRegistrationScreen";
import TagRegistrationScreen from "../Screens/tag/TagRegistrationScreen";
import TagReplacementScreen from "../Screens/tag/TagReplacementScreen";
import FASTagRechargeScreen from "../Screens/tag/FASTagRechargeScreen";
import NPCITagStatusScreen from "../Screens/npci/NPCITagStatusScreen";
import VehicleTrackingScreen from "../Screens/vehicle/VehicleTrackingScreen";
import VehicleDetailsScreen from "../Screens/vehicle/VehicleDetailsScreen";
import WalletDetailsScreen from "../Screens/wallet/WalletDetailsScreen";
import TagReplacementScreen1 from "../Screens/tag/TagReplacementScreen1";
import EditProfileDetailsScreen from '../Screens/profile/EditProfileDetailsScreen';
import HomeDashboardScreen from '../Screens/home/HomeDashboardScreen';
import VerifyOTPonMobile from '../Screens/VerifyOTP/VerifyOTPonMobile';
import VirtualRCScreen from '../Screens/rc/VirtualRCScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={"OrderSummaryScreen"}
      >
        <Stack.Screen name="HomeDashboardScreen" component={HomeDashboardScreen} />
        <Stack.Screen name="EditProfileDetailsScreen" component={EditProfileDetailsScreen} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name="WalletDetailsScreen" component={WalletDetailsScreen} />
        <Stack.Screen name="WalletFilterScreen" component={WalletFilterScreen} />
        <Stack.Screen name="InventroyScreen" component={InventoryScreen} />
        <Stack.Screen name="InventoryFilterScreen" component={InventoryFilterScreen} />
        <Stack.Screen name="InventorySuccessScreen" component={InventorySuccessScreen} />
        <Stack.Screen name="RequestsScreen" component={RequestsScreen} />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen name="OrderSummaryScreen" component={OrderSummaryScreen} />
        <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
        <Stack.Screen name="AcknoledgementScreen" component={AcknoledgementScreen} />
        <Stack.Screen name="AcknoledgementFilter" component={AcknoledgementFilter} />
        <Stack.Screen name="InsuranceTrackerScreen" component={InsuranceTrackerScreen} />
        <Stack.Screen name="CustomerDetailsScreen" component={CustomerDetailsScreen} />
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="CustomerRegistrationScreen" component={CustomerRegistrationScreen} />
        <Stack.Screen name="TagRegistrationScreen" component={TagRegistrationScreen} />
        <Stack.Screen name="TagReplacementScreen" component={TagReplacementScreen} />
        <Stack.Screen name="TagReplacementScreen1" component={TagReplacementScreen1} />
        <Stack.Screen name="FASTagRechargeScreen" component={FASTagRechargeScreen} />
        <Stack.Screen name="NPCITagStatusScreen" component={NPCITagStatusScreen} />
        <Stack.Screen name="VehicleTrackingScreen" component={VehicleTrackingScreen} />
        <Stack.Screen name="VehicleDetailsScreen" component={VehicleDetailsScreen} />

        <Stack.Screen name="RegisterProfile" component={RegisterProfile} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
        <Stack.Screen name="VerifyOTPonMobile" component={VerifyOTPonMobile} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen
          name="LoginOTPVerification"
          component={LoginOTPVerification}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="ResetScreen" component={ResetScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="VirtualRCScreen" component={VirtualRCScreen} />
      </Stack.Navigator>
    </>
  );
}
