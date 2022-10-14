import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Input from '../Utils/Input'
import BlueButton from '../Utils/BlueButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.emailInput}>
                <Text style={styles.SiginHeading}>Sign Up</Text>
                <Input placeholder="example@gmial.com" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <BlueButton>
                    Create an Account
                </BlueButton>
                <View style={styles.loginOpt}>
                    <Text>already have an account. </Text>
                    <Pressable onPress={() => navigation.navigate("Sign In")}>
                        <Text style={styles.loginBtn}>Sign in</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }, SiginHeading: {
        fontWeight: "900",
        fontSize: 50,
        fontFamily: "Inter-SemiBold",
        marginVertical: 30
    },
    emailInput: {
        position: "absolute",
        top: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    loginOpt: {
        flexDirection: "row",
        marginTop: 14
    },
    loginBtn: {
        textDecorationLine: "underline",
        color: "#171A20CC",
        fontWeight: "bold",
    }
})