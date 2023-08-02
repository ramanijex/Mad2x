import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, Modal } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/AntDesign"
import Fonts from "../Assets/Fonts/Fonts";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const Profile = (navigation) => {
    const props = navigation.navigation;

    const [Image1, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")

    const [visibleModal, setVisibleModal] = useState(false)

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [mobile,setmobile] = useState("")
    const [age,setage] = useState("")
    const [address,setaddress] = useState("")


    const tackPhotofromcamera = async () => {
        // ImagePicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: true
        //   }).then(image => {
        //     console.log(image);
        //   });

        const image = await launchCamera();
        image.assets.map((item) => {
            console.log(item.uri)
            setVisibleModal(false)
            setImage(item.uri)
        })
    }



    const tackgallary = async () => {

        const image = await launchImageLibrary();
        image.assets.map((item) => {
            console.log(item.uri)
            setVisibleModal(false)
            setImage(item.uri)
        })
    }


    return (

        <View>
            <View style={style.blue}>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => props.navigate("Setting")}>
                        <AntDesign style={style.arrow}
                            name="arrowleft"
                            size={30}
                            color="white"
                        ></AntDesign>
                    </TouchableOpacity>
                    <Text style={style.Profile}>Profile</Text>
                    <TouchableOpacity>
                        <Image style={style.Image} source={require('../Assets/Images/Group.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={style.photo}>
                    <ImageBackground style={{ height: hp("15%"), resizeMode: "cover" }} borderRadius={20} source={{ uri: Image1 }}></ImageBackground>
                    <TouchableOpacity style={style.camara1} onPress={() => setVisibleModal(true)}>
                        <Image source={require("../Assets/Images/camara.png")} style={style.camara}></Image>
                    </TouchableOpacity>
                </View>



                <View style={style.white}>

                    <View style={{ marginTop: hp('7') }}>

                        <Text style={style.name}>Name</Text>
                        <TextInput style={style.John} placeholder="Name" placeholderTextColor={"#4E95FF"}></TextInput>

                        <Text style={style.name}>Email</Text>
                        <TextInput style={style.John} placeholder="Email" placeholderTextColor={"#4E95FF"}></TextInput>

                        <Text style={style.name}>Mobile Number</Text>
                        <TextInput style={style.John} placeholder="+Mobile Number" placeholderTextColor={"#4E95FF"}></TextInput>

                        <Text style={style.name}>Age</Text>
                        <TextInput style={style.John} placeholder=" Age" placeholderTextColor={"#4E95FF"}></TextInput>

                        <Text style={style.name}>Address</Text>
                        <TextInput style={style.John} placeholder=" Address" placeholderTextColor={"#4E95FF"}></TextInput>
                    </View>

                </View>

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => {
                    setVisibleModal(!visibleModal)
                    // alert.alert('Modal has been cloded');

                }}>

                <View style={{ backgroundColor: "#D5D8DC", height: hp("15"), width: wp("100"), marginTop: hp("85") }}>
                    <TouchableOpacity onPress={() => setVisibleModal(fales)}>
                        <AntDesign style={style.close}
                            name="close"
                            size={25}
                            color="black"
                        />
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>tackgallary()}>
                        <Image source={require("../Assets/Images/gallary.png")} style={style.gallary}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>tackPhotofromcamera()}>
                        <Image source={require("../Assets/Images/photo1.png")} style={style.jjj}></Image>
                    </TouchableOpacity>
                </View>

            </Modal>

        </View>

    )
}



const style = StyleSheet.create({
    blue: {
        backgroundColor: "#4E95FF",
        height: hp('70'),
        borderBottomLeftRadius: wp('20'),
        borderBottomRightRadius: wp('20'),
    },
    arrow: {
        marginLeft: wp('7'),
        marginTop: hp('3')

    },
    Profile: {
        marginRight: wp('50'),
        marginTop: hp('3.3'),
        fontSize: 18,
        color: "white",
    },
    Image: {
        marginRight: wp('8'),
        marginTop: hp('3.1')
    },
    white: {
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        width: wp('90'),
        height: hp('72'),
        marginTop: hp('11'),
        borderRadius: 40,
        elevation: 5
    },
    photo: {
        backgroundColor: "#FFFFFF",
        elevation: 5,
        height: hp('15'),
        width: wp('30'),
        position: "absolute",
        zIndex: 999,
        marginTop: hp('11'),
        marginLeft: wp(33.5),
        borderRadius: 20,
    },
    name: {
        marginTop: hp('2'),
        marginLeft: wp("9"),
        fontSize: 15,
        fontFamily: Fonts.Lato_Semibold
    },
    John: {
        backgroundColor: "#E8F1FF",
        marginTop: hp('1'),
        width: wp('70'),
        marginLeft: wp('9'),
        borderRadius: 10,
        paddingLeft: wp('4'),
        fontSize: 15,
        fontFamily: Fonts.Lato_Semibold
    },
    camara: {
        resizeMode: "contain",
        height: hp("3"),
        width: wp("5"),
        alignSelf: "center",

    },
    camara1: {
        height: hp("4"),
        width: wp("8"),
        borderRadius: wp("8"),
        borderWidth: 3,
        borderColor: "#4E95FF",
        backgroundColor: "white",
        justifyContent: "center",
        marginLeft: wp("23.5"),
        marginTop: hp("-16")

    },
    gallary: {
        width: wp("15"),
        height: hp('10'),
        resizeMode: "contain",
        marginTop: hp("-1"),
        marginLeft: wp("15")
    },
    jjj: {
        marginLeft: wp('65'),
        marginTop: hp('-10'),
        width: wp("15"),
        height: hp("10"),
        resizeMode: "contain"
    },
    close: {
        marginLeft: wp("90")
    }


})
export default Profile;