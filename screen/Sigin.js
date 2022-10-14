import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useFonts } from 'expo-font'
import BlueButton from '../Utils/BlueButton'
import Input from '../Utils/Input'

import { useNavigation } from '@react-navigation/native'

const Sigin = () => {

    const navigation = useNavigation()

    const [fontsLoaded] = useFonts({
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null
    }
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.emailInput}>
                <Text style={styles.SiginHeading}>Sign In</Text>
                <Input placeholder="example@gmial.com" />
                <Input placeholder="Password" />
                <BlueButton>Log in</BlueButton>
                <View style={styles.newUserOpt}>
                    <Text>Create a New Account? </Text>
                    <Pressable onPress={() => navigation.navigate("Sign Up")}><Text
                        style={styles.signUpBtn}
                    >Sign Up</Text></Pressable>
                </View>
            </View>
        </View>
    )
}

export default Sigin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    emailInput: {
        position: "absolute",
        top: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    SiginHeading: {
        fontWeight: "900",
        fontSize: 50,
        fontFamily: "Inter-SemiBold",
        marginVertical: 30
    },
    newUserOpt: {
        flexDirection: "row",
        marginTop: 20
    },
    signUpBtn: {
        color: "#171A20CC",
        textDecorationLine: "underline",
        fontWeight: "900"
    }

})