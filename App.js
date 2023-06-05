import { useState } from 'react'
import MainReg from './components/register/MainReg'
import Register from './components/register/Register'
import Login from './components/register/Login'
import Main from './components/Main'
import Maps from './components/Maps'
import MapList from './components/MapList'
import Plus from './components/Plus'
import Profile from './components/Profile'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const StackReg = createNativeStackNavigator();

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [registered, setRegistered] = useState(false)

  

  loginPressed = () => {
    setRegistered(true)
  }

  if(registered === false) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <StackReg.Screen 
              name = 'MainReg'
              component = {MainReg}
              options = {{
                title: 'MainReg', 
                headerShown: false
              }}
            />
            <StackReg.Screen 
              name = 'Login'
              component = {Login}
              options = {{
                title: 'Login', 
                headerShown: false
              }}
            />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name = 'Main'
            component = {Main}
            options = {{
              title: 'Main', 
              headerShown: false
            }}
          />
          <Stack.Screen 
            name = 'Maps'
            component = {Maps}
            options = {{
              title: 'Maps',
              headerShown: false
            }}
          />
          <Stack.Screen 
            name = 'MapList'
            component = {MapList}
            options = {{
              title: 'MapList',
              headerShown: false
            }}
          />
          <Stack.Screen 
            name = 'Profile'
            component = {Profile}
            options = {{
              title: 'Profile',
              headerShown: false
            }}
          />
          <Stack.Screen 
            name = 'Plus'
            component = {Plus}
            options = {{
              title: 'Plus',
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
