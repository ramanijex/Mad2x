import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from "../Assets/Fonts/Fonts";
import axios from "axios";

const Signup = (navigation) => {


    const [EMAIL, setEmail] = useState("")
    const [Emailerror, setEmailerror] = useState("")

    const [Username, setUsername] = useState("")
    const [Usernameerror, setUsernameerror] = useState("")

    const [Password, setPassword] = useState("")
    const [Passworderror, setPassworderror] = useState("")

    const [Confirm, setConfirm] = useState("")
    const [Confirmerror, setConfirmerror] = useState("")

    const Validation = () => {
        setEmailerror("")
        setUsernameerror("")
        setPassworderror("")
        setConfirmerror("")


        if (EMAIL == "") {
            setEmailerror("Email is requred")
        }
        if (Username == "") {
            setUsernameerror("Username is requred")
        }
        if (Password == "") {
            setPassworderror(" Password is requred")
        }
        if (Confirm == "") {
            setConfirmerror("Confirm Password is requred")
        }

        if (EMAIL !== "" && Username !== "" && Password !== "" && Confirm !== "") {
            API()
        }

    }

    const API = () => {
        axios.get('http://staging.webmynehost.com/hospital_demo/services/signup.php',
            {
                params: {
                    username: Username,
                    emailid: EMAIL,
                    password: Password,
                    confirm_password: Confirm
                }
            }

        )
            .then(function (response) {
                console.log(response);
                if (response.data.ResponseCode == "1") {
                    alert(response.data.ResponseMsg)
                } else {
                    alert(response.data.ResponseMsg)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    const props = navigation.navigation;
    return (
        <View>
            <View style={style.blue}>
                <View style={style.white}>
                    <Text style={style.sign}>SIGN UP</Text>

                    <Text style={style.email}>EMAIL ID</Text>
                    <TextInput style={style.john}
                        placeholder="Email ID"
                        placeholderTextColor={'#4E95FF'}
                        value={EMAIL}
                        onChangeText={(EMAIL) => setEmail(EMAIL)}
                    />

                    {Emailerror == "" ? (
                        null
                    ) : (
                        <Text>{Emailerror}</Text>
                    )}



                    <Text style={style.email}>User name</Text>
                    <TextInput style={style.john}
                        placeholder="User name"
                        placeholderTextColor={"#4E95FF"}
                        value={Username}
                        onChangeText={(Username) => setUsername(Username)}
                    />

                    {Usernameerror == "" ? (
                        null
                    ) : (
                        <Text>{Usernameerror}</Text>
                    )}




                    <Text style={style.email}>Password</Text>

                    <View style={style.TextInput}>
                        <TextInput style={style.Password1}
                            placeholder="Password"
                            placeholderTextColor={"#4E95FF"}
                            value={Password}
                            onChangeText={(Password) => setPassword(Password)}
                        />


                        <View style={style.eye}>
                            <Image source={require("../Assets/Images/eye.png")}></Image>
                        </View>
                    </View>
                    {Passworderror == "" ? (
                        null
                    ) : (
                        <Text>{Passworderror}</Text>
                    )}

                    <Text style={style.email}>Confirm Password</Text>
                    <View style={style.TextInput}>
                        <TextInput style={style.Password1}
                            placeholder="Confirm Password"
                            placeholderTextColor={"#4E95FF"}
                            value={Confirm}
                            onChangeText={(Confirm) => setConfirm(Confirm)}
                        />

                        <View style={style.eye}>
                            <Image source={require("../Assets/Images/eye.png")}></Image>
                        </View>
                    </View>
                    {Confirmerror == "" ? (
                        null
                    ) : (
                        <Text>{Confirmerror}</Text>
                    )}



                    <TouchableOpacity style={style.tt} onPress={() => Validation()}>
                        <Text style={style.sign1}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row", marginTop: hp('10'), marginLeft: wp('17') }}>
                        <Text style={style.account}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => props.navigate("Login")}>
                            <Text style={{ color: "#4E95FF", fontFamily: Fonts.Lato_Semibold, marginTop: hp('5') }}>Login Here</Text>
                        </TouchableOpacity>
                    </View>
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
        borderBottomRightRadius: wp('20')
    },
    white: {
        backgroundColor: "white",
        width: wp('90'),
        height: hp('70'),
        marginTop: hp('13'),
        borderRadius: 40,
        elevation: 5,
    },
    sign: {
        alignSelf: "center",
        fontSize: 20,
        marginTop: hp('4'),
        fontFamily: Fonts.Lato_Semibold
    },
    email: {
        marginLeft: wp('15'),
        fontSize: 15,
        marginTop: wp('4'),
        fontFamily: Fonts.Lato_Semibold
    },
    john: {
        borderWidth: 1,
        borderRadius: 24,
        width: wp('70'),
        height: hp('6'),
        alignSelf: "center",
        paddingLeft: 30,
        marginTop: hp('1'),
        fontFamily: Fonts.Lato_Semibold,
        color: "#4E95FF",
        fontSize: 15
    },
    TextInput: {
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 24,
        borderColor: "#707070",
        width: wp('70'),
        height: hp('6'),
        marginTop: hp('1'),
        marginLeft: wp('-2.5'),
        alignSelf: "center",
    },
    Password1: {
        alignSelf: "center",
        width: wp('70'),
        paddingLeft: wp('20'),
        alignItems: "center",
        fontFamily: Fonts.Lato_Semibold
    },
    eye: {
        marginRight: wp('17'),
        justifyContent: "center",
        alignSelf: "center",
    },
    tt: {
        alignSelf: "center",
        backgroundColor: "#4E95FF",
        color: "white",
        width: wp('50'),
        alignItems: "center",
        justifyContent: "center",
        height: hp('6'),
        borderRadius: 24,
        marginTop: hp('7'),
    },
    sign1: {
        color: "white",
        fontFamily: Fonts.Lato_Semibold,
        fontSize: 18
    },
    account: {
        marginTop: hp('5'),
        marginLeft: wp('3'),
        fontFamily: Fonts.Lato_Semibold
    },


})

export default Signup;  