import React, { useEffect, useState } from "react";;
import { Text, View, StyleSheet, Image, TextInput, FlatList, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from "../Assets/Fonts/Fonts";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import axios from 'axios';
import AntDesign from "react-native-vector-icons/AntDesign";
import {createDrawerNavigator} from "react-navigation-drawer";

const Home = (navigation) => {
   const Doctor = () => {
      const jex = [
         {
            path: require("../Assets/Images/message1.png")
         },
         {
            path: require("../Assets/Images/call.png")
         },
         {
            path: require("../Assets/Images/video.png")
         },
         {
            path: require("../Assets/Images/map.png")
         }
      ]

      const star = [
         {
            path: require("../Assets/Images/star.png")
         },
         {
            path: require("../Assets/Images/star.png")
         },
         {
            path: require("../Assets/Images/star.png")
         },
         {
            path: require("../Assets/Images/star.png")
         },
         {
            path: require("../Assets/Images/star.png")
         },
      ]

      const bio = [
         {
            name: "Patients",
            name1: "1.08K"
         },
         {
            name: "Experience",
            name1: item1.Experience
         },
         {
            name: "Review",
            name1: item1.Reviews 
         },
      ]

      return (
         <View style={{height: hp("100%")}}>
            <View style={style.blue} >
               
                  <TouchableOpacity onPress={() => Toggle()}>
                     <AntDesign style={style.arrow}
                        name="arrowleft"
                        size={30}
                        color="white"
                     ></AntDesign>
                  </TouchableOpacity>
               
               <View style={style.white}>
                  <Image source={require('../Assets/Images/jex.png')} style={style.Image}></Image>
                  <Text style={style.Pediatrician}>{item1.SpecialityName}</Text>
                  <Text style={style.Jex}>{item1.DoctorName}</Text>

                  <View>
                     <FlatList scrollEnabled={true} style={{ alignSelf: "center", marginTop: hp("2"), }}
                        horizontal
                        data={jex}
                        renderItem={({ item }) => (
                           <View>
                              <Image style={style.path} source={item.path} />
                           </View>
                        )}
                     />
                  </View>

                  <Text style={style.Health}>Good Health Hospitals, {item1.Degree}</Text>
                  <View>
                     <FlatList style={{ marginTop: hp("2"), marginLeft: wp('9') }}
                        horizontal
                        data={star}
                        renderItem={({ item }) => (
                           <View>
                              <Image style={style.path} source={item.path} />
                           </View>
                        )}
                     />
                  </View>

                  <Text style={style.About}>About</Text>
                  <Text style={style.p}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </Text>

                  <View>
                     <FlatList style={{ alignSelf: "center", marginTop: hp("2") }}
                        horizontal
                        data={bio}
                        renderItem={({ item }) => (
                           <View style={style.name}>
                              <Text style={{ color: "#929292", fontSize: 12, fontFamily: Fonts.Lato_Regular }}>{item.name}</Text>
                              <Text style={{ color: "#707070", fontSize: 14, fontFamily: Fonts.Lato_Semibold, alignSelf: "center" }}>{item.name1}{item.name == "Review" ? "K" : null}</Text>
                           </View>
                        )}
                     />
                  </View>
                  <TouchableOpacity style={style.tp} onPress={() => props.navigate("Appointment")}>
                     <Text style={style.book}>Book An Appointment</Text>
                  </TouchableOpacity>
               </View>



            </View>
            </View>
            )
   }

   useEffect(() => {
               jexAPI()
            }, [])

            const [api, setapi] = useState("")
            const [show, setshow] = useState(false)
            const [item1, setitem] = useState("")

   const Toggle = (item) => {
               setitem(item)
      setshow(!show)
   }

   const jexAPI = () => {
               axios.get('http://staging.webmynehost.com/hospital_demo/services/dashboard.php?format=json', {

               })
                  .then(function (response) {
                     console.log(response);
                     setapi(response.data.response)
                  })
                  .catch(function (error) {
                     console.log(error);
                  });
   }


            const user = [
            {
               title: "patient Bill",
            color: "#4E95FF",
            path: require('../Assets/Images/Bill.png'),
      },
            {
               title: "Occupancy",
            color: "#2AC999",
            path: require('../Assets/Images/Occupancy.png'),
      },
            {
               title: "charge List",
            color: "#0BAADC",
            path: require('../Assets/Images/List.png'),
      },
            {
               title: "contact",
            color: "#4EBE18",
            path: require('../Assets/Images/contact.png'),
      },
            {
               title: "patient",
            color: "#5F43EF",
            path: require("../Assets/Images/patient.png"),
      },
            ]

   // const doctor = [
   //    {
   //       path: require('../Assets/Images/Doctor.png'),
   //       title: "Cardiologist ",
   //       name: " Dr. Alan C Braverman"
   //    },
   //    {
   //       path: require('../Assets/Images/img.png'),
   //       title: "Urologist ",
   //       name: "Dr. Erica M Linkan",
   //    },
   //    {
   //       path: require('../Assets/Images/Doctor.png'),
   //       title: "Neurologist ",
   //       name: " Dr. David B Hopper",
   //    },
   //    {
   //       path: require('../Assets/Images/img.png'),
   //       title: "Pediatrician ",
   //       name: " Dr. John Doe",
   //    },
   //    {
   //       path: require('../Assets/Images/Doctor.png'),
   //       title: "Cardiologist",
   //       name: " Dr. Jex Ramani",
   //    },
   // ]


   const props = navigation.navigation

            const jex1 = require("../Assets/Images/jex.png")

            return (
               <View>
                  {show == true ? <Doctor/> : null}
            <ScrollView>
               <View>
                  <TouchableOpacity>
                  <Image style={style.menu} source={require("../Assets/Images/menu.png")}></Image>
                  </TouchableOpacity>

                  <View style={{ marginTop: hp('-3') }}>


                     <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={style.doctor}>Doctor{'\n'}Appointment</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                           <Image source={require("../Assets/Images/Mask.png")} style={style.mask} ></Image>
                        </View>
                     </View>

                     <View style={style.textinpute}>
                        <TextInput placeholder="Search e.g. Dr Louis" placeholderTextColor={"#BBBBBB"} style={style.search}></TextInput>
                        <View style={style.bg}>
                           <EvilIcons style={{ alignSelf: "center" }} name="search" size={25} color="#FFFFFF" />
                        </View>
                     </View>
                     <Text style={style.categories}>Categories</Text>

                     <View>

                        <FlatList
                           horizontal
                           showsHorizontalScrollIndicator={false}
                           data={user}
                           renderItem={({ item }) => (
                              <View style={[style.box, { backgroundColor: item.color }]}>
                                 <Image style={style.Imagejex} source={item.path} />
                                 <Text style={[style.Text]}>{item.title}</Text>
                              </View>
                           )}
                        />
                     </View>


                     <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                        <Text style={style.Top}>Top Doctors</Text>
                        <Text style={style.all}>See all</Text>
                     </View>

                     <View style={{marginTop:hp("1.5") , marginBottom:hp("8")}}>
                        <FlatList
                           data={api}
                           renderItem={({ item }) => {
                              return (
                                 <TouchableOpacity style={style.list} onPress={() => Toggle(item)}>
                                    <ImageBackground
                                       style={style.image1}
                                       borderRadius={10}
                                       source={jex1}>
                                       <View style={style.mark}></View>
                                    </ImageBackground>




                                    <View style={{ marginLeft: wp('5'), marginTop: hp('2.5') }}>
                                       <Text style={[style.text1]}>{item.SpecialityName != "" ? item.SpecialityName : "Speciality name not defined"}</Text>
                                       <Text style={[style.name1]}>{item.DoctorName != "" ? item.DoctorName : "Doctor name not defined"}</Text>
                                    </View>
                                 </TouchableOpacity>
                              )
                           }}
                        />
                     </View>

                  </View>
               </View>



            </ScrollView>
            </View>




            )
}

            const style = StyleSheet.create({
               doctor: {
               marginTop: hp('6'),
            marginLeft: wp('7'),
            fontSize: 20,
            fontFamily: Fonts.Lato_Heavy,
            color: "#3A3A3A"
   },
            mask: {
               marginTop: hp('1.5'),
            width: wp('15'),
            height: hp('15'),
            resizeMode: "contain",
            marginRight: wp('5')
   },
            search: {
               alignSelf: "center",
            width: wp('70'),
            paddingLeft: wp('3'),
            fontFamily: Fonts.Lato_Regulaar
   },

            bg: {
               height: hp('6'),
            width: wp('11'),
            borderRadius: hp('4'),
            backgroundColor: "#4E95FF",
            justifyContent: "center",
            alignSelf: "center"
   },

            textinpute: {
               flexDirection: "row",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 25,
            height: hp('7'),
            width: wp('85%'),
            marginTop: hp('3'),
            alignSelf: "center",
   },
            categories: {
               marginTop: hp(3),
            marginLeft: wp(7),
            fontSize: 20,
            fontFamily: Fonts.Lato_Semibold,
            color: "#3A3A3A"
   },
            box: {
               width: wp('28%'),
            height: hp('14%'),
            marginTop: hp('3%'),
            margin: wp('1%'),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginLeft: hp('3'),

   },
            Imagejex: {
               width: wp('10%'),
            height: hp('10%'),
            resizeMode: "contain",
            marginTop: hp('2'),


   },
            Text: {
               fontSize: 15,
            marginBottom: hp('3'),
            color: "white",
   },
            Top: {
               paddingLeft: wp('7'),
            fontSize: 20,
            fontFamily: Fonts.Lato_Semibold,
            color: "#3A3A3A"
   },
            all: {
               paddingRight: wp('7'),
            fontFamily: Fonts.Lato_Regular,
            fontSize: 14,
            color: "#3A3A3A"
   },
            list: {
               flexDirection: "row",
            backgroundColor: "white",
            elevation: 1,
            height: hp('10'),
            width: wp('85'),
            borderRadius: 10,
            margin: 10,
            alignSelf: "center",
   },
            image1: {
               resizeMode: "contain",
            width: wp('15'),
            height: hp('8'),
            borderRadius: 10,
            marginLeft: wp('5'),
            marginTop: hp('1'),

   },
            text1: {
               color: "#3A3A3A",
            textTransform: "capitalize",
            fontSize: 13,
            fontFamily: Fonts.Lato_Regular
   },
            name1: {
               color: "#3A3A3A",
            textTransform: "capitalize",
            fontSize: 14,
            fontFamily: Fonts.Lato_Bold
   },
            mark: {
               height: hp(2),
            width: hp(2),
            borderRadius: hp(2),
            backgroundColor: "#1FC429",
            alignSelf: "flex-end",
            borderWidth: 2,
            borderColor: "white"
   },
            menu: {
               resizeMode: "contain",
            height: hp('6'),
            width: wp('7'),
            marginLeft: wp('7'),
            marginTop: hp('2'),
   },

            blue: {
               backgroundColor: "#4E95FF",
            height: hp('70'),
            alignItems: "center",
            borderBottomLeftRadius: wp('20'),
            borderBottomRightRadius: wp('20')
   },
            arrow: {
               marginRight: wp("76"),
            marginTop: hp("3")
   },
            white: {
               alignSelf: "center",
            backgroundColor: "#FFFFFF",
            width: wp('90'),
            height: hp('80'),
            marginTop: hp('2'),
            borderRadius: 40,
            elevation: 5
   },
            Image: {
               resizeMode: "cover",
            width: wp('27'),
            height: hp('19'),
            borderRadius: 30,
            marginTop: hp('1'),
            alignSelf: "center"
   },
            Pediatrician: {
               textTransform:"capitalize",
               alignSelf: "center",
            marginTop: hp("2"),
            fontSize: 16,
            fontFamily: Fonts.Lato_Semibold,
            color: "#707070"
   },
            Jex: {
               textTransform:"capitalize",
               alignSelf: "center",
            marginTop: hp("1"),
            fontSize: 18,
            fontFamily: Fonts.Lato_Semibold,
            color: "#3A3A3A"
   },
            path: {
               margin: 4,
   },
            Health: {
               marginTop: hp('3'),
            marginLeft: wp('9'),
            fontSize: 14,
            fontFamily: Fonts.Lato_Semibold,
            color: "#707070"
   },
            About: {
               marginLeft: wp("9"),
            marginTop: hp("3"),
            fontSize: 14,
            fontFamily: Fonts.Lato_Semibold,
            color: "#707070"
   },
            p: {
               marginLeft: wp('8'),
            marginTop: hp("1"),
            color: "#777777",
            fontFamily: Fonts.Lato_Regular,
            fontSize: 13
   },
            name: {
               margin: 15,
            fontSize: 14,
            fontFamily: Fonts.Lato_Semibold,
            color: "#707070"
   },
            book: {
               fontSize: 18,
            fontFamily: Fonts.Lato_Semibold,
            color: "#FFFFFF"
   },
            tp: {
               alignSelf: "center",
            backgroundColor: "#4E95FF",
            width: wp('60'),
            alignItems: "center",
            justifyContent: "center",
            height: hp('6'),
            borderRadius: 24,
            marginTop: hp('2'),
   }



})

            export default Home;