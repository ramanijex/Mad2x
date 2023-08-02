import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from "../Assets/Fonts/Fonts";
import AntDesign from "react-native-vector-icons/AntDesign"


const YourPassword = (navigation) => {
    const props =navigation.navigation;
    return(
    <View>
        <View style={style.blue}>
            <TouchableOpacity onPress={() => props.navigate("ResetPassword")}>
            <View>
                <AntDesign style={style.arrow}
                 name="arrowleft"
                 size={30}
                 color="white"
                />
            </View>
            </TouchableOpacity>
            <View style={style.white}>
                <Image style={style.bg} source={require("../Assets/Images/bg.png")}></Image>
                <Image style={style.key} source={require("../Assets/Images/key.png")}></Image>
                <Text style={style.password}>Your Password </Text>
                <Text style={style.successfully}>Changed Successfully</Text>
            </View>

        </View>
    </View>
    )
}

const style =StyleSheet.create({
    blue:{
        backgroundColor: "#4E95FF",
        height: hp('70'),
        alignItems: "center",
        borderBottomLeftRadius: wp('20'),
        borderBottomRightRadius: wp('20')
    },
    white:{
        backgroundColor: "white",
        width: wp('90'),
        height: hp('70'),
        marginTop: hp('10'),
        borderRadius: 40,
        elevation: 5,
    },
    bg:{
        alignSelf:"center",
        marginTop:hp('18')
    },
    key:{
        marginTop:hp("-10"),
        alignSelf:"center"
    },
    password:{
        alignSelf:"center",
        marginTop:hp('10'),
        fontSize:15,
        fontFamily:Fonts.Lato_Semibold,
        color:"#3A3A3A"
        
    },
    successfully:{
        alignSelf:"center",
        fontSize:15,
        fontFamily:Fonts.Lato_Semibold,
        color:"#3A3A3A",
        marginTop:hp("1")
        
    },
    arrow:{
        marginRight: wp('80'),
        marginTop: hp('3')

    },

})

export default YourPassword;