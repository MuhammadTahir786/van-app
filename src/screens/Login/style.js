import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: Colors.PrimaryColor,
        justifyContent: "center",
    },
    maincontent: {
        justifyContent: "center",
        flex: 1
    },
    container: {
        flex: 1,
        flexGrow:1,
        height:"100%",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        paddingBottom:20
    },
    image: {
        width: 200,
        height: 200
    },
    authtext: {
        color: Colors.PrimaryColor,
        textAlign: "center"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 35,
        bottom: 30
    },
    subcontainer: {

        width: "100%",
        backgroundColor: Colors.WhiteColor,
        paddingHorizontal: 10,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 15,

    },
    loginHeading: {
        fontWeight: "bold",
        color: Colors.PrimaryColor,
        fontSize: 20,
        textAlign: "center",
        marginVertical: 15
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.PrimaryColor,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        zIndex:0
    },
    textInput: {
        marginHorizontal: 10,
        height: 50,
        width: "100%",
        color: Colors.PrimaryColor
    },
    btn: {
        backgroundColor: Colors.PrimaryColor,
        alignSelf: "center",
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginTop: 10,
        borderRadius: 50,
        width: 250,
    },
    btntext: {
        fontSize: 15,
        color: Colors.WhiteColor,
        textAlign: "center",
    },
    dropdowncontainer:{
        zIndex:1,
        width:'100%',
        marginBottom:10
    }
})