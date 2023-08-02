import React , {useState} from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from "../Assets/Fonts/Fonts";
import AntDesign from "react-native-vector-icons/AntDesign"


const ResetPassword = (navigation) => {
    const props = navigation.navigation;

    

            const [oldpassword , setoldpassword] = useState("")
            const [oldpassworderror , setoldpassworderror] = useState ("")
            
            const [newpassword , setnewpassword] = useState ("")
            const [newpassworderror , setnewpassworderror] = useState ("")
            
            const [confirmpassword , setconfirmpassword] = useState ("")
            const [ConfirmPassworderror , setconfirmpassworderror] = useState ("")


            const Validation = () => {
                setoldpassworderror ("")
                setnewpassworderror ("")
                setconfirmpassworderror ("")

                if (oldpassword == "") {
                    setoldpassworderror ("oldpassword is requred")
                }
                if (newpassword == ""){
                    setnewpassworderror ("newpassword is requred")
                }
                if (confirmpassword == ""){
                    setconfirmpassworderror ("confirmpassowrd is requred")
                }
                else if (newpassword == confirmpassword) {
                    props.navigate("YourPassword")
                } else {
                    setnewpassworderror(" new password and confirm password does not match")
                }
                
            }

           

    return (
        <View>
            <View style={style.blue}>
                <View style={{}}>
                    <TouchableOpacity onPress={() => props.navigate("Login")}>
                <AntDesign style={style.arrow}
                 name="arrowleft"
                 size={30}
                 color="white"
                />
                </TouchableOpacity>
                <Text style={style.reset}>Reset Password</Text>
                </View>
                <View style={style.white}>
                    <Image style={style.Image} source={require("../Assets/Images/lock.png")} />
                    <Text style={style.Text}>Old Password</Text>
                    <View style={style.password1}>
                        <TextInput style={style.password}
                         placeholder="Old Password"
                          placeholderTextColor={'#4E95FF'} 
                          value={oldpassword}
                          onChangeText={(oldpassword) => setoldpassword(oldpassword)}
                          />
                        <TouchableOpacity style={style.eye1}>
                            <Image style={style.eye} source={require('../Assets/Images/eye.png')} />
                        </TouchableOpacity>
                       
                    </View>
                    
                    {oldpassworderror == "" ? (
                        null
                    ) : (
                        <Text style={{paddingLeft:wp("8")}}>{oldpassworderror}</Text>
                    )}

                    


                    <View>
                        <Text style={style.Text}>New Password</Text>
                    </View>
                    <View style={style.password1}>
                        <TextInput style={style.password} 
                        placeholder="New Password" 
                        placeholderTextColor={"#4E95FF"}
                        value={newpassword}
                        onChangeText={(newpassword) => setnewpassword(newpassword)}
                        />
                            
                        
                        <TouchableOpacity style={style.eye1} >
                            <Image style={style.eye} source={require("../Assets/Images/eye.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    
                    {newpassworderror == "" ? (
                        null
                    ) : (
                        <Text style={{paddingLeft:wp("8")}}>{newpassworderror}</Text>
                    )}

                    <View>
                        <Text style={style.Text}> Confirm Password</Text>
                    </View>
                    <View style={style.password1}>
                        <TextInput style={style.password}
                         placeholder="Confirm Password"
                          placeholderTextColor={'#4E95FF'}
                          value={confirmpassword}
                          onChangeText={(confirmpassword) => setconfirmpassword(confirmpassword)}
                          />
                        <TouchableOpacity style={style.eye1} >
                            <Image style={style.eye} source={require("../Assets/Images/eye.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    
                    {ConfirmPassworderror == "" ? (
                        null
                    ) : (
                        <Text style={{paddingLeft:wp("8")}}>{ConfirmPassworderror}</Text>
                    )}

                    <TouchableOpacity style={style.login} onPress={() => Validation ()}>
                        <Text style={style.login1}>Reset Password</Text>
                    </TouchableOpacity>


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
    arrow:{
       marginRight:wp('80'),
       marginTop:hp("3")
    },
    reset:{
        marginTop:hp("-3.5"),
        marginLeft:wp("10"),
        fontSize:20,
        color:"#FFFFFF",
        fontFamily:Fonts.Lato_Bold
        
    },
    white: {
        backgroundColor: "white",
        width: wp('90'),
        height: hp('75'),
        marginTop: hp('10'),
        borderRadius: 40,
        elevation: 5,
    },
    Image: {
        alignSelf: "center",
        marginTop: wp('10'),
    },
    Text: {
        fontSize: 15,
        fontFamily: Fonts.Lato_Semibold,
        marginTop: hp('3'),
        marginLeft: wp('8')
    },
    password1: {
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "#E8F1FF",
        borderRadius: 10,
        width: wp("73"),
        height: hp('6'),
        marginTop: hp('1'),
        alignSelf: "center"
    },
    password: {
        alignSelf: "center",
        width: wp('60'),
        height: hp('5'),
        fontFamily: Fonts.Lato_Semibold,
        color: "#4E95FF",
        paddingLeft: wp('3')
    },
    eye1: {
        alignSelf: "center",
        justifyContent: "center",
    },
    eye: {
        alignSelf: "center",
        height: hp("5"),
        width: wp("5"),
        resizeMode: "contain",
    },
    login:{
        alignSelf:"center",
        backgroundColor:"#4E95FF",
        color:"white",
        width:wp('50'),
        alignItems:"center",
        justifyContent:"center",
        height:hp('6'),
        borderRadius:24,
        marginTop:hp('7'),
    },
    login1:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
        fontFamily:Fonts.Lato_Semibold
    },
})
export default ResetPassword;