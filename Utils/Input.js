import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const Input = (props) => {
    return (
        <View>
            <TextInput placeholder={props.placeholder} style={styles.email} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    email: {
        borderColor: "black",
        borderRadius: 30,
        borderWidth: 1,
        width: 380,
        paddingStart: 10,
        paddingVertical: 8,
        fontSize: 18,
        marginVertical: 10
    }
})