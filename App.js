import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './screen/Home'
import Solar from './screen/Solar';
import Sigin from './screen/Sigin';
import Signup from './screen/SignUp';

const Drawer = createDrawerNavigator()
export default function App() {


  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: { marginTop: 30 },
        drawerItemStyle: { width: "100%" },
        drawerLabelStyle: { fontWeight: "bold", color: "black" },
        drawerActiveBackgroundColor: "gray",
        drawerContentContainerStyle: { alignItems: "center" },
      }}>
        <Drawer.Screen name='Home' component={Home} options={{
          drawerLabel: "Cars EV",
          // drawerPosition: "right"
        }} />
        <Drawer.Screen name='Solar' component={Solar} options={{
          drawerLabel: "Solar"
        }} />
        <Drawer.Screen name='Sign In' component={Sigin} options={{
          drawerLabel: "Sign In"
        }} />
        <Drawer.Screen name='Sign Up' component={Signup} />

      </Drawer.Navigator>
    </NavigationContainer>
  )



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
