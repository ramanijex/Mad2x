import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from "../Assets/Fonts/Fonts";

import Home from "../screen/Home"
import Medication from '../screen/Medication';
import Profile from '../screen/Profile';
import Setting from '../screen/Setting';


const Tab = createBottomTabNavigator();

const Bottomtab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#4E95FF",
                    height: hp('7.5'),
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    position: "absolute",
                    alignSelf: "center"
                },
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: () => <Text style={styles.Home}>Home</Text>,
                    tabBarIcon: () => <Image style={styles.image} source={require('../Assets/Images/home.png')}></Image>
                }}
            />
            <Tab.Screen
                name="Medication"
                component={Medication}
                options={{
                    tabBarLabel: () => <Text style={styles.Home}>Medication</Text>,
                    tabBarIcon: () => <Image style={styles.image} source={require('../Assets/Images/medication.png')}></Image>
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: () => <Text style={styles.Home}>Setting</Text>,
                    tabBarIcon: () => <Image style={styles.image} source={require('../Assets/Images/setting.png')}></Image>
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: () => <Text style={styles.Home}>Profile</Text>,
                    tabBarIcon: () => <Image style={styles.image} source={require('../Assets/Images/profile.png')}></Image>
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    Home: {
        color: "#FFFFFF",
        marginBottom: hp('1'),
        fontSize: 12,
        fontFamily: Fonts.Lato_Bold
    },
    image: {
        resizeMode: "contain",
        height: hp('2.5'),
        marginTop: hp('1')
    }
})

export default Bottomtab;