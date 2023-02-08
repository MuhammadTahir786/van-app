import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { Colors } from '../../constants/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import DropdownPicker from '../../components/DropdownPicker/DropdownPicker';
import CountryPickerModal from '../../components/CountryPicker/CountryPicker';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const BusinessAccountSignup = () => {

    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [country, setCountry] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(true)

    const [countryValidation, setCountryValidation]=useState("")

    const data = [
        { label: 'Taxi', value: 'Taxi' },
        { label: 'Tour Guide', value: 'Tour Guide' },
        { label: 'Car Rent', value: 'Car Rent' },
        { label: 'Hotel Reservation', value: 'Hotel Reservation' },
        { label: 'Business Advertisement', value: 'Business Advertisement' },
    ]

    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={styles.maincontent}>
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
                                placeholder='Enter Name'
                                placeholderTextColor={Colors.PrimaryColor}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <FontAwesome5 name={"mail-bulk"} color={Colors.PrimaryColor} />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Email'
                                keyboardType={"email-address"}
                                placeholderTextColor={Colors.PrimaryColor}

                            />
                        </View>

                        <View style={styles.rowcontainer}>
                            <View style={{flex:1}}>                            
                            <CountryPickerModal
                                countryCode={countryCode}
                                setCountryCode={setCountryCode}
                                country={country}
                                setCountry={setCountry}
                                setCountryValidation={setCountryValidation}
                            />
                           {countryValidation && <ErrorMessage error={countryValidation}/>}
                            </View>

                            <View style={{ flex: 1 }}>
                                <View style={{ ...styles.rowinputcontainer,marginLeft:5, flex: 0, height: 50 }}>
                                    <FontAwesome5 name={"globe-americas"} color={Colors.PrimaryColor} style={{ marginLeft: 5 }} />
                                    <TextInput
                                        style={styles.rowtextInput}
                                        placeholder='Enter City'
                                        placeholderTextColor={Colors.PrimaryColor}

                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.rowcontainer}>
                            <View style={{ ...styles.rowinputcontainer, marginRight: 10 }}>
                                <FontAwesome5 name={"phone-alt"} color={Colors.PrimaryColor} style={{ marginLeft: 5 }} />
                                <TextInput
                                    style={styles.rowtextInput}
                                    placeholder='Enter Phone'
                                    keyboardType={"numeric"}
                                    placeholderTextColor={Colors.PrimaryColor}

                                />
                            </View>
                            <View style={styles.rowinputcontainer}>
                                <FontAwesome5 name={"user-alt"} color={Colors.PrimaryColor} style={{ marginLeft: 5 }} />
                                <TextInput
                                    style={styles.rowtextInput}
                                    placeholder='Enter Age'
                                    placeholderTextColor={Colors.PrimaryColor}
                                />
                            </View>
                        </View>

                        {value != null && value == "Taxi" && 
                        <>
                        <View style={styles.inputContainer}>
                            <FontAwesome5 name={"car-side"} color={Colors.PrimaryColor} />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Taxi Model'
                                placeholderTextColor={Colors.PrimaryColor}

                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <FontAwesome5 name={"car-side"} color={Colors.PrimaryColor} />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Hire Rate'
                                placeholderTextColor={Colors.PrimaryColor}

                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <FontAwesome5 name={"car-side"} color={Colors.PrimaryColor} />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Plate Number'
                                placeholderTextColor={Colors.PrimaryColor}

                            />
                        </View>
                        <View style={styles.descriptionbox}>
                            <MaterialIcons name={"description"} size={15} color={Colors.PrimaryColor} style={styles.descriptionicon} />
                            <TextInput
                                style={styles.textbox}
                                placeholder='Enter Breif Introduction'
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={8}
                                placeholderTextColor={Colors.PrimaryColor}

                            />
                        </View>
                        </>
                        }
                        <View style={{ ...styles.inputContainer, marginHorizontal: 20 }}>
                            <FontAwesome5 name={"lock"} color={Colors.PrimaryColor} />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Password'
                                secureTextEntry={passwordVisible}
                                placeholderTextColor={Colors.PrimaryColor}

                            />
                            <TouchableOpacity onPress={() => { setPasswordVisible(!passwordVisible) }}>
                                <FontAwesome5 name={passwordVisible ? "eye-slash" : "eye"} color={Colors.PrimaryColor} />
                            </TouchableOpacity>

                        </View>
                       
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btntext}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.btn}>
                            <Text style={styles.btntext}>Personel Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default BusinessAccountSignup

