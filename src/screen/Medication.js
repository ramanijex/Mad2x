import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/AntDesign"
import Fonts from "../Assets/Fonts/Fonts";

const Medication = (navigation) => {
    const props = navigation.navigation;

    const jex = [
        {
            path: require('../Assets/Images/Heart.png'),
            name: "56",
            name1: "Heart Rate"
        },
        {
            path: require('../Assets/Images/Blood.png'),
            name: '120/80 ',
            name1: 'Blood Pressure',
        },
        {
            path: require('../Assets/Images/Weight.png'),
            name: '118 ',
            name1: 'Weight',
        },
        {
            path: require('../Assets/Images/Height.png'),
            name: "5'3",
            name1: "ft Height",
        },
        {
            path: require('../Assets/Images/Pulse.png'),
            name: "136",
            name1: "Pulse Rate",
        },
        {
            path: require('../Assets/Images/Calories.png'),
            name: ' Calories',
            name1: 'Calories',
        },
    ]

        const jex1 = [
            {
                path: require('../Assets/Images/Message.png'),
                name: "Message",
                
            },
            {
                path:require('../Assets/Images/notification.png'),
                name: "Notification"
            },
            {
                path: require('../Assets/Images/Pills.png'),
                name: "Pills Reminder ",
            },
            {
                path: require('../Assets/Images/Blogs.png'),
                name: "Our Blogs",
            },
        ]

    return (
        <View>
            <View style={style.blue}>
                <TouchableOpacity onPress={() => props.navigate("Home")}>
                <AntDesign style={style.arrow}
                    name="arrowleft"
                    size={30}
                    color="white"
                />
                </TouchableOpacity>
                <View>
                    <Image style={style.Image} source={require('../Assets/Images/jex.png')}></Image>
                </View>
                <Text style={style.jex}>Jex Ramani</Text>
                <Text style={style.years}>21 Years</Text>
                <Text style={style.indian}>Indian</Text>

                <TouchableOpacity>
                    <View style={style.white}>
                        <Text style={style.profile}>My Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>

        
            <FlatList style={{ marginTop: hp('4%'), marginLeft: wp('4%') }}
                data={jex}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ alignItems: "center", flexDirection: "row",flex:1, justifyContent:"space-evenly",marginBottom:hp('4.5%') }}>
                        <View style={style.jj}>
                            <Image style={style.imagelist} source={item.path} />
                        </View>
                        <View style={{ marginLeft: wp('4%') }}>
                            <Text style={style.num}>{item.name}</Text>
                            <Text style={style.name}>{item.name1}</Text>
                        </View>
                    </View>
                )}
            />


            <View style={{height:hp('42') , backgroundColor:"#E8F1FF"}}>
                <FlatList
                numColumns={'2'}
                data={jex1}
                renderItem={({item}) =>(
                    <TouchableOpacity style={style.touch}>
                        <View style={{alignItems:"center" , justifyContent:"center" ,}}>
                            <Image style={style.path} source={item.path}/>
                            <Text style={style.Text}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                />

                
            </View>


        </View>
    )
}
const style = StyleSheet.create({
    blue: {
        backgroundColor: "#4E95FF",
        height: hp('21'),
        alignItems: "center",
    },
    arrow: {
        marginRight: wp('80'),
        marginTop: hp('2')
    },
    Image: {
        resizeMode: "cover",
        width: wp('20'),
        height: hp('10'),
        borderRadius: 40,
        marginRight: wp('60'),
    },
    jex: {
        marginTop: hp('-9'),
        marginRight: wp('11'),
        fontSize: 18,
        fontFamily: Fonts.Lato_Semibold,
        color: "white"
    },
    years: {
        marginRight: wp("20"),
        fontSize: 14,
        color: "white",
        fontFamily: Fonts.Lato_Light
    },
    indian: {
        marginRight: wp('23'),
        fontSize: 14,
        color: "white",
        fontFamily: Fonts.Lato_Light
    },
    white: {
        width: wp('25'),
        height: hp('4.5'),
        backgroundColor: "#FFFFFF",
        borderRadius: 9,
        marginLeft: wp('60'),
        marginTop: hp('-7 '),
    },
    profile: {
        alignSelf: "center",
        marginTop: hp('1'),
        color: '#4E95FF',
        fontSize: 14,
        fontFamily: Fonts.Lato_Semibold
    },
    jj:{
        backgroundColor:"#4E95FF",
        width:wp('10'),
        height:hp('5%'),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20
    },
    imagelist:{
        resizeMode:"contain",
        height:hp('2.5'),
        width:wp('5%'),
    },
    name:{
        color:"#515151",
        fontSize:16,
        fontFamily:Fonts.Lato_Semibold,
        width:wp('30%'),
    },
    num:{
        color:"#515151",
        fontSize:16,
        fontFamily:Fonts.Lato_Semibold,
        width:wp('20%'),
    },
    touch:{
        flexDirection:"row",
        backgroundColor:"white",
        elevation:1,
        height:hp('15'),
        width:wp('46%'),
        margin:8,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
    },
    path:{
        resizeMode:"contain",
        height:hp('5'),
        width:wp('10'),
    },
   Text:{
    color:"#515151",
    fontSize:16,
    fontFamily:Fonts.Lato_Semibold,
    alignSelf:"center",
    marginTop:hp('1'),
   },
   
})
export default Medication;