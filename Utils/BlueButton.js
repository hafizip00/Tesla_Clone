import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BlueButton = (props) => {
    return (
        <View>
            <TouchableOpacity style={{ ...styles.btn, ...props.style }}>
                <Text style={styles.txt}>{props.children}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default BlueButton

const styles = StyleSheet.create({
    btn: {
        marginTop: 12,
        borderRadius: 30,
        backgroundColor: "#171A20CC",
        width: 300,
        paddingVertical: 16,
        fontSize: 16,
        display: "flex",
        alignItems: "center"
    },
    txt: {
        color: "#FFF",
        textTransform: "uppercase"
    }
})