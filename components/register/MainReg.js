import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../global';
import {useWindowDimensions} from 'react-native';

export default function MainReg( {navigation} ) {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    goToLogin = () => {
        navigation.navigate('Login')
    }

    goToRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.text1}>
  
            <StatusBar style={{alignItems: ''}} />
            <View style={styles.touchable}>
            <Image source={require('../../../AppWithKirill2-master/assets/rib.png')}></Image>
          </View>
            <Image />
            <Text style = {styles.text2}>Поймай Свой Самый Лучший Трофей!</Text>
            <Text style = {styles.text7}>Не волнуйтесь, мы делаем всё возможое, чтобы осуществить вашу мечту</Text>
            
            <TouchableOpacity onPress={goToRegister} style={styles.text3}>
                <Text style={styles.text4}>Регистрация</Text>
            </TouchableOpacity>
                
            <TouchableOpacity onPress={goToLogin} style={styles.text5} >
                <Text style={styles.text6}>Войти</Text>
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    text1: {
        backgroundColor : '#A8A8A8',
        flex : 1 ,
        justifyContent : 'center',
        alignItems: 'center',
    },
    text2 : {
        fontSize : 25, 
        textAlign : 'center', 
        fontWeight: 700,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10
    },
    text3 : {
        left: hp("0%"),
        top: hp("10%"),
        height: hp("10%"),
        width: wp("50%"),
        fontWeight: '900',
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 30
    },
    text4 : {
        paddingTop: hp("2%"),
        left: hp("2%"),
        fontSize: 25,
        fontWeight: 700,
    },
    text5 : {
        backgroundColor:'#000000',
        borderRadius:30,
        borderWidth: 1,
        borderColor: '#000000',
        left: hp("0%"),
        top: hp("10%"),
        height: hp("10%"),
        width: wp("50%"),
        fontWeight: '900',
    },
    text6 : {
        paddingTop: hp("2%"),
        left: hp("8%"),
        fontSize: 25,
        fontWeight: 700,
        color : '#fff' 
    },
    text7: {
        fontSize: 12, 
        textAlign: 'center',
        paddingLeft: 80,
        paddingRight: 80,
        color: '#404040'
    },
  });