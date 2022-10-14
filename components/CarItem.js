import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import CarItemButton from './CarItemButton'

const CarItem = (props) => {


    const { name, tagline, taglineCTA, image, } = props.car

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline + " "}
                    <Text style={styles.taglineCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.btnsContainer}>
                <CarItemButton type="primary" content="Custom Order" onPress={() => console.warn("Pressed")} />
                <CarItemButton type="secondary" content={"Existing Inventory"} onPress={() => console.warn("Pressed")} />
            </View>
        </View>
    )
}

export default CarItem

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: Dimensions.get("window").height + 35
    },
    titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        fontFamily: "Inter-SemiBold"
    },
    subTitle: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#5C5E62"
    },
    taglineCTA: {
        textDecorationLine: "underline"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        position: "absolute"
    },
    btnsContainer: {
        position: "absolute",
        bottom: 50,
        width: "100%"
    }
})