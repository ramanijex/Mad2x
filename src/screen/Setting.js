import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/AntDesign"
import Fonts from "../Assets/Fonts/Fonts";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";




const Setting = (navigation) => {
    const props = navigation.navigation;

    const jex = [
        {
            path: require('../Assets/Images/General.png'),
            name: "General",
            root: "",
        },

        {
            path: require('../Assets/Images/notification.png'),
            name: "Notification",
            root: "",
        },
        {
            path: require('../Assets/Images/Medical_Details.png'),
            name: "Medical Details",
            root: "",
        },
        {
            path: require('../Assets/Images/Doctor_Details.png'),
            name: "Doctor Details",
            root: "",
        },
        {
            path: require('../Assets/Images/payments.png'),
            name: "Payments",
            root: "",
        },
        {
            path: require('../Assets/Images/profile.png'),
            name: "profile",
            root: "ResetPassword",
        },
        {
            path: require('../Assets/Images/Privacy.png'),
            name: "privact.png",
            root: "",
        },
        {
            path: require('../Assets/Images/logout.png'),
            name: "logout",
            root: "login",
        },
    ]

    const logout = (item, index) => {
        if (index == 5) {
            navigation.navigation.dispatch(CommonActions.reset({ routes: [{ name: item.root }] }))
        }
        if (index == 7) {
            savan()
        }

    }

    const savan = async () => {

        const email = await AsyncStorage.getItem('email')
        const password = await AsyncStorage.getItem('pwd')

        var formdata = new FormData();
        formdata.append('email', email);
        formdata.append("password", password)

        axios.post('http://staging.webmynehost.com/hospital_demo/services/logout.php', formdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
            .then(async function (response) {
                console.log(response);
                alert(response.data.ResponseMsg)
                navigation.navigation.dispatch(CommonActions.reset({
                    routes: [{
                        name: "Login"
                    }]
                }))

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <View>
            <View style={style.blue}>
                <View style={{ flexDirection: "row", alignItems: "center", width: ('95%'), margin: 10, marginTop: hp('2') }} >
                    <TouchableOpacity onPress={() => props.navigate("Medication")}>
                        <AntDesign style={style.arrow}
                            name="arrowleft"
                            size={30}
                            color="white"
                        ></AntDesign>
                    </TouchableOpacity>

                    <Text style={style.Setting}  >SETTINGS</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", width: wp('95%'), margin: 10, marginLeft: wp('15') }}>
                    <Image source={require('../Assets/Images/jex.png')} style={style.Image}></Image>
                    <Text style={style.jex}>Dr. Jex D Ramani.</Text>
                </View>
                <View style={style.white}>
                    <FlatList style={{ marginTop: hp('5'), marginLeft: wp('6') }}
                        data={jex}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: hp('3'), }} onPress={() => logout(item, index)}>
                                <View style={style.Image}>
                                    <Image style={style.stylelist} source={item.path}></Image>
                                </View>
                                <Text style={{ color: "#3A3A3A", fontSize: 14, fontFamily: Fonts.Lato_Heavy, marginLeft: wp('4') }}>{item.name}</Text>
                            </TouchableOpacity>

                        )}
                    />


                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    blue: {
        backgroundColor: "#4E95FF",
        height: hp('70'),
        alignItems: "center",
        borderBottomLeftRadius: wp('20'),
        borderBottomRightRadius: wp('20'),
    },
    arrow: {
        marginLeft: wp('2')
    },
    Setting: {
        marginLeft: wp('4'),
        fontSize: 18,
        color: "#FFFFFF",
        fontFamily: Fonts.Lato_Semibold
    },
    Image: {
        resizeMode: "cover",
        width: wp('11'),
        height: hp('6'),
        borderRadius: 30,
        marginTop: hp('2')
    },
    jex: {
        fontSize: 15,

        marginLeft: wp('2.5'),
        color: "#FFFFFF",
        fontFamily: Fonts.Lato_Heavy
    },
    white: {
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        width: wp('90'),
        height: hp('72'),
        marginTop: hp('2'),
        borderRadius: 40,
        elevation: 5
    },
    Image: {
        backgroundColor: "#4E95FF",
        width: wp('10'),
        height: hp('5'),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    },
    stylelist: {
        resizeMode: "contain",
        height: hp('2.5'),
        width: wp('5')
    },

})
export default Setting;