import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CarItemButton = (props) => {
    const { type, content, onPress } = props
    const bgColor = type === "primary" ? "#171A20CC" : "#FFFFFFF6"
    const txtColor = type === "primary" ? "#FFF" : "#171A20CC"
    return (
        <View style={styles.container}>
            <Pressable style={[styles.btn, { backgroundColor: bgColor }]}
                onPress={onPress}
            >
                <Text style={[styles.txt, { color: txtColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default CarItemButton

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10
    },
    btn: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,

    },
    txt: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: "uppercase"
    }
})