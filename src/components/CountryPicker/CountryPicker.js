import React, { useState } from 'react'
import { View, Text,ScrollView } from 'react-native'
import CountryPicker from "react-native-country-picker-modal";
import { Colors } from '../../constants/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CountryPickerModal = ({countryCode,setCountryCode,country,setCountry}) => {

    const [withCountryNameButton, setWithCountryNameButton] = useState(true,)
    const [withCountryNameText, setWithCountryNameText] = useState(true,)
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(true)
    const [withCallingCode, setWithCallingCode] = useState(true)

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country.name)
        console.log(country.name)
    }

    return (
        <View style={{ borderWidth: 1, width:"50%", borderColor: Colors.PrimaryColor, borderRadius: 10,marginRight:10 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, alignItems: "center", marginRight: 5 }}>
                {country == "" && <FontAwesome5 name={"globe-americas"} color={Colors.PrimaryColor} style={{ paddingRight: 10, paddingLeft: 5 }} />}
                <CountryPicker
                    placeholder={<Text style={{ color: Colors.PrimaryColor,fontSize:14 }}>Select Country</Text>}
                    theme={{ fontSize: 13, primaryColor: 'red', primaryColorVariant: '#eee', placeholderTextColor: 'red', onBackgroundTextColor: Colors.PrimaryColor }}
                    {...{
                        countryCode,
                        withFilter,
                        withFlag,
                        withCountryNameButton,
                        withCountryNameText,
                        withAlphaFilter,
                        withCallingCode,
                        withEmoji,
                        onSelect,
                    }} />
            </ScrollView>
        </View>
    )
}

export default CountryPickerModal