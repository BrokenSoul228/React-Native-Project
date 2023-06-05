import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../global';
import {useWindowDimensions} from 'react-native';

export default function Login( {navigation} ) {
 
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginPressed = () => {
      if (email !== '' && password !== '') {
        navigation.navigate('Main')
      }
    }

    return (
        <View style={styles.container}>
          
        <StatusBar style="auto" />

        <Image source={require('../../../AppWithKirill2-master/assets/rib.png')} style={{marginBottom:100 }}></Image>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View> 
          <TouchableOpacity style={styles.loginBtn} onPress = {loginPressed}>
            <Text style={styles.loginText}>Войти</Text>
          </TouchableOpacity>
        <View style={styles.assistance}>
          <Text style={{paddingLeft: 25}}>Нет аккаунта?</Text>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Регистрация</Text>
          </TouchableOpacity>
          <Text  style={{paddingLeft: 10}}>Забыли пароль?</Text>
          <TouchableOpacity>
            <Text style={styles.restore}>Восстановить</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A8A8A8',
      alignItems: "center",
      justifyContent: 'flex-end',
    },
  
    image: {
      marginBottom: 40,
    },
  
    inputView: {
      backgroundColor: "#fff",
      borderRadius: 10,
      width: "90%",
      height: 55,
      marginBottom: 30,
      
      alignItems: 'baseline',
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 0,
      paddingRight: 230
    },
    restore: {
      left: hp("18%"),
      bottom: hp("2.8%"),
      height: hp("3%"),
      width: wp("27%"),
      fontWeight: '900',
      
    },
    assistance: {
      right: hp("8.7%"),
    },

    forgot_button: {
      left: hp("18%"),
      bottom: hp("2.8%"),
      height: hp("3%"),
      width: wp("25%"),
      fontWeight: '900',
      
    },
    loginText: {
      fontWeight: 700,
    color: '#000000'
    },

    loginBtn: {
      width: "30%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 30,
      backgroundColor: "#fff",
      
    },
  });