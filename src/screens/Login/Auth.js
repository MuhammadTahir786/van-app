import React,{useEffect, useState} from 'react'
import { StatusBar, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { Colors } from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Languages from '../../constants/Localization/localization';

const Auth = () => {


    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("en");

    const data = [
        { label: 'English', value: 'en' },
        { label: 'Urdu', value: 'ur' },
    ]




    return (
        <SafeAreaView style={styles.maincontainer}>
            <StatusBar animated={true} backgroundColor={Colors.PrimaryColor} barStyle="light-content" />
            <View style={styles.container}>
                <Image source={require("../../assets/Logo.png")} resizeMode="contain" style={styles.image} />
                <View style={styles.subcontainer}>
                    <Text style={styles.loginHeading}>Get Started</Text>
                    <Text style={styles.authtext}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                    <View style={styles.languagedropdowncontainer}>
                    <Text style={styles.languageHeading}>Select Language</Text>
                    <DropDownPicker
                            placeholder="Select Language"
                            open={open}
                            value={value}
                            items={data}
                            setOpen={setOpen}
                            setValue={setValue}
                            onChangeValue={Languages.setLanguage(value)}
                            placeholderStyle={{color:Colors.PrimaryColor}}
                            dropDownDirection="BOTTOM"
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
                            style={{ borderColor: Colors.PrimaryColor}}
                            dropDownContainerStyle={{ borderColor: Colors.PrimaryColor}}

                        />
                        </View>
                    <TouchableOpacity onPress={() => { navigation.navigate("PersonelAccount") }} style={styles.btn}>
                        <Text style={styles.btntext}>{Languages.auth_login_btn_txt}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntext}>{Languages.auth_signup_btn_txt}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Auth

