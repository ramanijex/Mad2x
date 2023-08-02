import React, { useEffect }  from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../screen/Login.js";
import Signup from "../screen/Signup.js";
import Home from "../screen/Home.js";
import Bottomtab from "./Bottomtab.js";
import ResetPassword from "../screen/ResetPassword.js";
import YourPassword from "../screen/YourPassword .js";
import Appointment from "../screen/Appointment.js";
import SplashScreen from "react-native-splash-screen";
import Setting from "../screen/Setting.js";
// import Doctor from "../screen/Doctor.js";

const stack = createNativeStackNavigator();

export default function Navigation() {

    useEffect(() => {
        SplashScreen.hide();
    });

    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                      <stack.Screen name="Login" component={Login} />
                      <stack.Screen name="Signup" component={Signup} />
                      <stack.Screen name="Home"   component={Home} />
                      <stack.Screen name="ResetPassword" component={ResetPassword} />
                      <stack.Screen name="YourPassword" component={YourPassword} />
                      <stack.Screen name="Bottomtab" component={Bottomtab} />
                      <stack.Screen name="Appointment" component={Appointment} />
                      <stack.Screen name="setting" component={Setting} />
                      {/* <stack.Screen name="Doctor" component={Doctor} /> */}
            </stack.Navigator>
        </NavigationContainer>
    )
}