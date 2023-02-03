import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { Colors } from '../../constants/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownPicker from '../../components/DropdownPicker/DropdownPicker';

const BusinessAccountSignup = () => {

    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const data = [
        { label: 'Taxi', value: 'Taxi' },
        { label: 'Tour Guide', value: 'Tour Guide' },
        { label: 'Car Rent', value: 'Car Rent' },
        { label: 'Hotel Reservation', value: 'Hotel Reservation' },
        { label: 'Business Advertisement', value: 'Business Advertisement' },
    ]

    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{flexGrow:1}} contentContainerStyle={styles.maincontent}>
            <View style={styles.container}>
                <Image source={require("../../assets/Logo.png")} resizeMode="contain" style={styles.image} />
                <View style={styles.subcontainer}>
                    <Text style={styles.loginHeading}>Business Account</Text>
                    <View style={styles.dropdowncontainer}>
                            <DropdownPicker
                                placeholder="Select Category"
                                open={open}
                                value={value}
                                data={data}
                                setOpen={setOpen}
                                setValue={setValue}

                            />
                    </View>
                    <View style={styles.inputContainer}>
                        <FontAwesome5 name={"user-alt"} color={Colors.PrimaryColor} />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter your name'
                            placeholderTextColor={Colors.PrimaryColor}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <FontAwesome5 name={"phone-alt"} color={Colors.PrimaryColor} />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter your phone'
                            keyboardType={"numeric"}
                            placeholderTextColor={Colors.PrimaryColor}

                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <FontAwesome5 name={"mail-bulk"} color={Colors.PrimaryColor} />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter your email'
                            keyboardType={"email-address"}
                            placeholderTextColor={Colors.PrimaryColor}

                        />
                    </View>
                    {value != null && value == "Taxi" && <View style={styles.inputContainer}>
                        <FontAwesome5 name={"car-side"} color={Colors.PrimaryColor} />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter your plate number'
                            keyboardType={"email-address"}
                            placeholderTextColor={Colors.PrimaryColor}

                        />
                    </View>
                    }
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntext}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {  navigation.goBack() }} style={styles.btn}>
                        <Text style={styles.btntext}>Personel Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default BusinessAccountSignup

