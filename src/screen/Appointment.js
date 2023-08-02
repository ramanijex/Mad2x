import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from "../Assets/Fonts/Fonts";
import AntDesign from "react-native-vector-icons/AntDesign";
import CalendarStrip from 'react-native-calendar-strip';
import { Dropdown } from 'react-native-element-dropdown';

const Appointment = (navigation) => {
    const props =navigation.navigation;

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [Year, setYear] = useState(null);
    const [inFocus, setInFocus] = useState(false);

    const month = [
        { label: ' january', },
        { label: ' february' },
        { label: 'march' },
        { label: 'april', },
        { label: 'May', },
        { label: 'June', },
        { label: 'July', },
        { label: 'August', },
        { label: 'September', },
        { label: 'October', },
        { label: "November", },
        { label: 'December', },
    ];

    const year = [
        { year: '2021 ', },
        { year: ' 2022' },
        { year: '2023' },
        { year: '2024', },
        { year: '2025', },
        { year: '2026', },
        { year: '2027', },
        { year: '2028', },
        { year: '2029', },
        { year: '2030', },
        { year: "2031", },
        { year: '2031', },
    ]


    const slot1 = [
        {
            time: "10:10 AM"
        },
        {
            time: "10:30 AM"
        },
        {
            time: "10:50 AM"
        },
        {
            time: "11:10AM"
        },
        {
            time: "11:10 AM"
        },
    ]

    const slot2 = [
        {
            time: "02:10 PM"
        },

        {
            time: "02:30 PM"
        },

        {
            time: "03:00 PM"
        }
    ]

    const slot3 = [
        {
            time: "06:30 PM"
        },

        {
            time: "07:00 PM"
        },

        {
            time: "07:30 PM"
        },

        {
            time: "07:50 PM"
        },

        {
            time: "08:20 PM"
        }
    ]

    return (
        <View>
            <View style={{ backgroundColor: "#FFFFFF" }}>
                <TouchableOpacity onPress={() => props.navigate("Doctor")}>
                <AntDesign style={style.arrow}
                    name="arrowleft"
                    size={30}
                    color="black"
                />
                </TouchableOpacity>
                <Text style={style.Appointment}>Appointment</Text>

                <View style={{flexDirection:"row" , marginTop:hp('2')}}>
                    <Dropdown style={style.Dropdown}

                        data={month}
                        labelField="label"
                        value={value}
                        placeholder="Month"
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false)
                        }}

                        containerStyle={{ width: wp('29') }}
                        selectedTextStyle={{ color: "#707070", fontSize: 16, fontFamily: Fonts.Lato_Bold }}

                    />


                    <Dropdown style={{width:wp('17') , marginLeft:wp('10')}}
                        data={year}
                        labelField="year"
                        value={Year}
                        placeholder="Year"
                        onChange={item => {
                            setYear(item.year);
                            setInFocus(false)
                        }}
                        
                        containerStyle={{ width: wp('29') }}
                        selectedTextStyle={{ color: "#707070", fontSize: 16, fontFamily: Fonts.Lato_Bold }}

                    />
                </View>

                <CalendarStrip
                    calendarAnimation={{ type: "sequence", duration: 30 }}
                    style={{ height: 200, paddingTop: 20, paddingBottom: 100, marginBottom: hp('-3%') }}
                    highlightDateContainerStyle={{ backgroundColor: "#4E95FF", height: hp("7%"), width: wp("10%"), borderRadius: 10 }}
                    showMonth={false}
                    calendarColor={'white'}
                    dateNumberStyle={{ color: '#929292', fontSize: 14, fontFamily: Fonts.Lato_Regulaar }}
                    dateNameStyle={{ color: '#707070', fontSize: 14, fontFamily: Fonts.Lato_Bold }}
                    highlightDateNumberStyle={{ color: 'white', fontSize: 14, fontFamily: Fonts.Lato_Regulaar }}
                    highlightDateNameStyle={{ color: 'white', fontSize: 14, fontFamily: Fonts.Lato_Bold }}
                    iconContainer={{ flex: 0.1 }}

                />


                <View style={style.body}>
                    <Text style={style.morning}>Morning Slots</Text>
                    <View>
                        <FlatList style={{ marginTop: hp("1"), }}
                            data={slot1}
                            // horizontal
                            numColumns={'3'}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor: "#FFFFFF", margin: 10, width: wp("25"), height: hp("4"), alignItems: "center", justifyContent: "center", borderRadius: 5, marginRight: wp("8") }}>
                                    <Text style={style.time}>{item.time}</Text>
                                </View>
                            )}
                        />
                    </View>


                    <View>
                        <Text style={style.Afternoon}>Afternoon Slots</Text>
                    </View>
                    <View style={{ height: hp('8') }}>
                        <FlatList style={{ marginTop: hp("1"), }}
                            data={slot2}
                            // horizontal
                            numColumns={"3"}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor: "#FFFFFF", margin: 10, width: wp("25"), height: hp("4"), alignItems: "center", justifyContent: "center", borderRadius: 5, marginRight: wp("8") }}>
                                    <Text>{item.time}</Text>
                                </View>
                            )}
                        />

                    </View>
                    <View>
                        <Text style={style.Evening}>Evening Slots</Text>
                    </View>
                    <View>
                        <FlatList style={{ marginTop: hp("1"), }}
                            data={slot3}
                            // horizontal
                            numColumns={'3'}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor: "#FFFFFF", margin: 10, width: wp("25"), height: hp("4"), alignItems: "center", justifyContent: "center", borderRadius: 5, marginRight: wp("8") }}>
                                    <Text>{item.time}</Text>
                                </View>
                            )}
                        />

                        <TouchableOpacity style={style.touch}>
                            <Text style={style.book}>Book An Appointment</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    arrow: {
        marginTop: hp('3'),
        marginLeft: wp('7'),

    },
    Appointment: {
        color: "#3A3A3A",
        marginLeft: wp("18"),
        marginTop: hp("-3.4"),
        fontSize: 20,
        fontFamily: Fonts.Lato_Semibold,

    },
    body: {
        backgroundColor: "#E8F1FF",
        height: hp('73'),
        marginTop: hp('-5')
    },
    morning: {
        marginTop: hp('1.5'),
        marginLeft: wp("5"),
        fontSize: 15,
        fontFamily: Fonts.Lato_Bold,
        color: "#707070"

    },
    time: {

    },
    Afternoon: {
        marginTop: hp('3'),
        marginLeft: wp("5"),
        fontSize: 15,
        fontFamily: Fonts.Lato_Bold,
        color: "#707070"
    },
    Evening: {
        marginTop: hp('2'),
        marginLeft: wp("5"),
        fontSize: 15,
        fontFamily: Fonts.Lato_Bold,
        color: "#707070"
    },
    book: {
        color: "white",
        fontFamily: Fonts.Lato_Semibold,
        fontSize: 18,

    },
    touch: {
        marginTop: hp('8'),
        alignSelf: "center",
        backgroundColor: "#4E95FF",
        width: wp('60'),
        alignItems: "center",
        justifyContent: "center",
        height: hp('6'),
        borderRadius: 24
    },
    Dropdown: {
        width: wp('25'),
        marginLeft: wp('10')
    }

})

export default Appointment;