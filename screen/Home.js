import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import CarsList from '../components/CarsList';
import cars from '../components/cars';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null
    }
    return (
        <View style={styles.container}>
            <CarsList Items={cars} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
