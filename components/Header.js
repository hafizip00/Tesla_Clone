import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Header = () => {

    const navigate = useNavigation()
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigate.openDrawer()}>
                <Image source={require("../assets/images/menu.png")} style={styles.menu} />
            </Pressable>
            <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        zIndex: 100,
        top: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: "contain"
    },
    menu: {
        width: 25,
        height: 25
    },
})