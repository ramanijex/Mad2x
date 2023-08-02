import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Fonts from "../Assets/Fonts/Fonts";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import YourPassword from "./YourPassword ";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import notifee from '@notifee/react-native';

const Login = (navigation) => {
  const props = navigation.navigation;

  const [Username, setUsername] = useState("")
  const [Usernameerror, setUsernameerror] = useState("")

  const [Password, setPassword] = useState("")
  const [Passworderror, setPassworderror] = useState("")

  const [jex,setjex] = useState("")



  const Validation = () => {
    setUsernameerror("")
    setPassworderror("")

    if (Username == "") {
      setUsernameerror("username is requred")
    }
    if (Password == "") {
      setPassworderror("Password is requred")
    }
    if (Username !== "" && Password !== "") {

      loginAPI()
      onDisplayNotification()

    }

  }

  const loginAPI = () => {
    axios.get('http://staging.webmynehost.com/hospital_demo/services/login.php',
      {
        params: {
          uname: Username,
          pwd: Password
        }
      }
    )
      .then(async function (response) {
        console.log(response);
        if(response == "")
        {
          alert("something went wrong")
        }
        if (response.data.code == "Login successfully") {
          // alert(response.data.code)
          await AsyncStorage.setItem('ID',response.data.did)
          await AsyncStorage.setItem('email',response.config.params.uname)
          await AsyncStorage.setItem('pwd', response.config.params.pwd)
          props.navigate("Bottomtab")
        } else {
          alert(response.data.code)
        }
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  }

  
    async function onDisplayNotification() {
      await notifee. requestPermission()

      const channelId = await  notifee.createChannel({
        id: "default",
        name: "Default Channel",

      });

      await notifee.displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android:{
          channelId
        }
      })
    }
  


  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <View>
      <View style={style.blue}>
        <View style={style.white}>
          <Text style={style.login}>LOGIN </Text>

          <Text style={style.username}>User name</Text>
          <TextInput style={style.john}
            placeholder=" User name"
            placeholderTextColor={"#4E95FF"}
            value={Username}
            onChangeText={(Username) => setUsername(Username)}
          />

          {Usernameerror == "" ? (
            null
          ) : (
            <Text style={{paddingLeft:wp("14")}}>{Usernameerror}</Text>
          )}

          <Text style={style.Password}>Password</Text>
          <View style={style.TextInput}>

            <TextInput style={style.Password1}
              placeholder="Password"
              placeholderTextColor={"#4E95FF"}
              value={Password}
              onChangeText={(Password) => setPassword(Password)}
            />

            <View style={style.eye}>
              <TouchableOpacity>
              <Image source={require("../Assets/Images/eye.png")}></Image>
              </TouchableOpacity>
            </View>
          </View>

          {Passworderror == "" ? (
            null
          ) : (
            <Text style={{paddingLeft:wp("14")}}>{Passworderror}</Text>
          )}

          <TouchableOpacity >
            <Text style={style.forget}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.tp} onPress={() => Validation()}>



            <Text style={style.login1}>Login</Text>

          </TouchableOpacity>

          <View style={{ flexDirection: "row", marginTop: hp('10'), marginLeft: wp('17') }}>
            <Text style={style.account}>Don't have an account?</Text>


            <TouchableOpacity onPress={() => props.navigate("Signup")}>
              <Text style={{ color: "#4E95FF", fontFamily: Fonts.Lato_Semibold, marginTop: hp('10') }}  > Sign up</Text>
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
    borderBottomRightRadius: wp('20'),
  },

  white: {
    backgroundColor: "#FFFFFF",
    width: wp('90'),
    height: hp('70'),
    marginTop: hp('17'),
    borderRadius: 40,
    elevation: 5
  },

  login: {
    alignSelf: "center",
    marginTop: hp('5'),
    fontSize: 20,
    fontFamily: Fonts.Lato_Semibold
  },

  username: {
    marginLeft: wp('15'),
    fontSize: 15,
    marginTop: hp('5'),
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
    fontFamily: Fonts.Lato_Semibold
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
  Password: {
    paddingLeft: 60,
    fontSize: 15,
    marginTop: hp('6'),
    fontFamily: Fonts.Lato_Semibold
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

  forget: {
    marginLeft: wp('51'),
    marginTop: hp('2'),
    fontFamily: Fonts.Lato_Medium
  },

  login1: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: Fonts.Lato_Semibold
  },
  tp: {
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
  account: {
    marginTop: hp('10'),
    marginLeft: wp('3'),
    fontFamily: Fonts.Lato_Semibold
  }


})


export default Login;