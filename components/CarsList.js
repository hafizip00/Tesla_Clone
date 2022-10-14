import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CarItem from './CarItem'
import Header from './Header'

const CarsList = (props) => {
    const { Items } = props
    return (
        <View style={styles.container}>
            <Header />
            <FlatList data={Items}
                renderItem={({ item }) => <CarItem car={item} />}
                snapToAlignment="start"
                decelerationRate={"normal"}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get("window").height + 35}
            />
        </View>
    )
}

export default CarsList

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})