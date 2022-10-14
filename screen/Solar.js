import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarsList from '../components/CarsList'
import Solars from '../components/Solars'

const Solar = () => {
    return (
        <View>
            <CarsList Items={Solars} />
        </View>
    )
}

export default Solar

const styles = StyleSheet.create({})