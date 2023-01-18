import React, { useMemo } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from "./style"
import { Colors } from '../../constants/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const PersonelAccount = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={styles.maincontent}>

                <View style={styles.container}>
                    <Image source={require("../../assets/Logo.png")} resizeMode="contain" style={styles.image} />
                    <View style={styles.subcontainer}>
                        <Text style={styles.loginHeading}>Personel Account</Text>
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
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btntext}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("BusinessAccount") }} style={styles.btn}>
                            <Text style={styles.btntext}>Business Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonelAccount

