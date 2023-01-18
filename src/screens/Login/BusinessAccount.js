import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { Colors } from '../../constants/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const BusinessAccount = () => {

    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const data = [
        { label: 'Taxi', value: 'Taxi' },
        { label: 'Tour', value: 'Tour' },
        { label: 'Hotel', value: 'Hotel' },
        { label: 'Car Rent', value: 'Car Rent' },

    ]

    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{flexGrow:1}}>
            <View style={styles.container}>
                <Image source={require("../../assets/Logo.png")} resizeMode="contain" style={styles.image} />
                <View style={styles.subcontainer}>
                    <Text style={styles.loginHeading}>Business Account</Text>
                    <View style={styles.dropdowncontainer}>
                        <DropDownPicker
                            placeholder="Select Category"
                            open={open}
                            value={value}
                            items={data}
                            setOpen={setOpen}
                            setValue={setValue}
                            placeholderStyle={{color:Colors.PrimaryColor}}
                            ArrowDownIconComponent={() => {
                                return (
                                    <FontAwesome
                                        color={Colors.PrimaryColor}
                                        style={{ paddingHorizontal: 5 }}
                                        name="chevron-down"
                                    />
                                );
                            }}
                            ArrowUpIconComponent={() => {
                                return (
                                    <FontAwesome
                                        color={Colors.PrimaryColor}
                                        style={{ paddingHorizontal: 5 }}
                                        name="chevron-up"
                                    />
                                );
                            }}

                            TickIconComponent={() => {
                                return (
                                    <FontAwesome
                                        color={Colors.PrimaryColor}
                                        style={{ paddingHorizontal: 5 }}
                                        name="check"
                                    />
                                );
                            }}
                            arrowIconStyle={{ color: Colors.PrimaryColor }}
                            listItemLabelStyle={{ color: Colors.PrimaryColor }}
                            labelStyle={{ color: Colors.PrimaryColor }}
                            style={{ borderColor: Colors.PrimaryColor }}
                            dropDownContainerStyle={{ borderColor: Colors.PrimaryColor }}

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
                        <FontAwesome5 name={"mail-bulk"} color={Colors.PrimaryColor} />
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

export default BusinessAccount

