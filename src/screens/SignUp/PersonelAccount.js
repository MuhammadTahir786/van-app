import React, { useMemo,useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from "./style"
import { Colors } from '../../constants/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Languages from '../../constants/Localization/localization';
import CountryPickerModal from '../../components/CountryPicker/CountryPicker';

const PersonelAccountSignup = () => {

    const navigation = useNavigation();

    const [country,setCountry]=useState('')
    const [countryCode, setCountryCode] = useState('')
    const [passwordVisible,setPasswordVisible] = useState(true)


    //name
    //country
    //city
    // passport id
    //age
    // phone
    //email
    //password
    

    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={styles.maincontent}>
                <View style={styles.container}>
                    <Image source={require("../../assets/Logo.png")} resizeMode={'contain'}  style={styles.image} />
                    <View style={styles.subcontainer}>
                        <Text style={styles.loginHeading}>Personel Account</Text>
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
                            <CountryPickerModal
                                countryCode={countryCode}
                                setCountryCode={setCountryCode}
                                country={country}
                                setCountry={setCountry}
                            /> 
                            <View style={styles.rowinputcontainer}>
                                <FontAwesome5 name={"globe-americas"} color={Colors.PrimaryColor} style={{marginLeft:5}} />
                                <TextInput
                                    style={styles.rowtextInput}
                                    placeholder='Enter City'
                                    placeholderTextColor={Colors.PrimaryColor}

                                />
                            </View>
                        </View>

                        <View style={styles.rowcontainer}>
                            <View style={{...styles.rowinputcontainer,marginRight:10}}>
                                <FontAwesome5 name={"id-card"} color={Colors.PrimaryColor} style={{marginLeft:5}} />
                                <TextInput
                                    style={styles.rowtextInput}
                                    placeholder='Enter Passport'
                                    placeholderTextColor={Colors.PrimaryColor}

                                />
                            </View>
                            <View style={styles.rowinputcontainer}>
                                <FontAwesome5 name={"user-alt"} color={Colors.PrimaryColor} style={{marginLeft:5}} />
                                <TextInput
                                    style={styles.rowtextInput}
                                    placeholder='Enter Age'
                                    placeholderTextColor={Colors.PrimaryColor}
                                />
                            </View>
                        </View>
                        
                        <View style={styles.inputContainer}>
                            <FontAwesome5 name={"phone-alt"} color={Colors.PrimaryColor} />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Phone'
                                keyboardType={"numeric"}
                                placeholderTextColor={Colors.PrimaryColor}

                            />
                        </View>

                        <View style={{...styles.inputContainer,marginHorizontal:20}}>
                            <FontAwesome5 name={"lock"} color={Colors.PrimaryColor} />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Enter Password'
                                secureTextEntry={passwordVisible} 
                                placeholderTextColor={Colors.PrimaryColor}

                            />
                            <TouchableOpacity onPress={()=>{setPasswordVisible(!passwordVisible)}}>
                                <FontAwesome5 name={passwordVisible?"eye-slash":"eye"} color={Colors.PrimaryColor} />
                            </TouchableOpacity>

                        </View>
                                      
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btntext}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("BusinessAccountSignup") }} style={styles.btn}>
                            <Text style={styles.btntext}>Business Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonelAccountSignup

