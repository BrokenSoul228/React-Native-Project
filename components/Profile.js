import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {useWindowDimensions} from 'react-native';
import { hp, wp } from '../components/global'

export default function Main( {navigation} ) {
  
  

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const goToMain = () => {
    navigation.navigate('Main')
  }

  const goToMaps = () => {
    navigation.navigate('Maps')
  }

  const goToPlus = () => {
    navigation.navigate('Plus')
  }

  const goToMapList = () => {
    navigation.navigate('MapList')
  }

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <View style = {styles.mainpage}>
        <Text style = {styles.profilePage}> Привет, Андрей </Text>
        <View style = {styles.topmenu}>
        <Text style = {styles.balance}> Ваш баланс: </Text>
        <Image style ={styles.coin} source={require('../assets/coin.png')}></Image>
        <Text style = {{top: hp("7%"),
    right: hp("12%"),
    height: hp("10%"),
    width: wp("15%"),}}> Валюта </Text>
        <View style ={styles.wallet}>
          <View style={styles.walletborder}>
          <Image source={require('../assets/wallet.png')}></Image>
          </View>        
        </View>
        </View>
        <View style = {styles.allmenu}>
        <TouchableOpacity style ={styles.navigation}>
          <View style = {{ width: 450, height: 40}}>
          <Text style = {{color: '#333'}}> Пополнить баланса </Text>
          <Image style = {styles.bigger} source={require('../assets/bigger.png')}></Image>
          <Image style = {styles.images} source={require('../assets/upbalance.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.navigation}>
          <View style = {{ width: 450, height: 40}}>
          <Text style={{paddingRight: 68, color: '#333'}}> Мои карты </Text>
          <Image style = {styles.bigger} source={require('../assets/bigger.png')}></Image>
          <Image style = {styles.images} source={require('../assets/download.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.navigation}>
          <View style = {{ width: 450, height: 40}}>
          <Text style={{marginRight: 10, color: '#333'}}> Мои точки </Text>
          <Image style = {styles.bigger} source={require('../assets/bigger.png')}></Image>
          <Image style = {styles.images} source={require('../assets/point.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.navigation}>
          <View style = {{ width: 450, height: 40}}>
          <Text style={{paddingRight: 60, color: '#333'}}> Мои скидки </Text>
          <Image style = {styles.bigger} source={require('../assets/bigger.png')}></Image>
          <Image style = {styles.images} source={require('../assets/sale.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.navigation}>
          <View style = {{ width: 450, height: 40}}>
          <Text style={{paddingRight: 60, color: '#333'}}> Мой рейтинг</Text>
          <Image style = {styles.bigger} source={require('../assets/bigger.png')}></Image>
          <Image style = {styles.images} source={require('../assets/rating.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.navigation}>
          <View style = {{ width: 450, height: 40}}>
          <Text style={{marginLeft: -7, right: -7, color: '#333'}}> Начисленные баллы </Text>
          <Image style = {styles.bigger} source={require('../assets/bigger.png')}></Image>
          <Image style = {styles.images} source={require('../assets/score.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.navigation}>
          <View style = {{ width: 450, height: 40}}>
          <Text style={{paddingRight: 70, color: '#333'}}> Настройки </Text>
          <Image style = {styles.bigger} source={require('../assets/bigger.png')}></Image>
          <Image style = {styles.images} source={require('../assets/settings.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.navigation}>
          <View style = {{ width: 450, height: 40,}}>
          <Text style={{left: 55, marginLeft: -56, color: '#333'}}> Данный банковской карты</Text>
          <Image style = {styles.bigger} source={require('../assets/bigger.png')}></Image>
          <Image style = {styles.images} source={require('../assets/card.png')}></Image>
          </View>
        </TouchableOpacity>
        </View>
     
      </View>

      <View style = {styles.footer}>
        <TouchableOpacity style = {styles.map} onPress={goToMain}>
          <View style={styles.touchable}>
            <Image source={require('../assets/maps.png')}></Image>
            <Text style={styles.text_in_touchable}>     Карта</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.mapList} onPress={goToMapList}>
          <View style={styles.touchable}>
            <Image source={require('../assets/maplist.png')}></Image>
            <Text style={styles.text_in_touchable}>Карты дна</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.plus} onPress={goToPlus}>
          <View style={styles.touchable}>
            <Image style = {{top: hp("0.6%")}} source={require('../assets/plus.png')}></Image>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.myMaps} onPress={goToMaps}>
          <View style={styles.touchable}>
            <Image source={require('../assets/mymaps.png')}></Image>
            <Text style={styles.text_in_touchable}>Мои карты</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.profile}>
          <View style={styles.touchable}>
            <Image source={require('../assets/profile.png')}></Image>
            <Text style={styles.text_in_touchable}>  Профиль</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  map: {
    width: '100%',
    height: '100%',
  },

  footer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: "space-around",
    flexDirection: 'row',
    alignItems: 'center'
  },

  mainpage: {
    flex: 1,
    flexGrow: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  touchable: {
    left: hp("0%"),
    bottom: hp("0.2%"),
    height: hp("7%"),
    paddingTop: hp("0.5%"),
    paddingLeft: hp("2%"),
    paddingRight: hp("7%"),
    width: wp("1%"),
    backgroundColor: '#48484848',
    borderRadius: 10
    
  },

  text_in_touchable: {
    textAlign: 'auto',
    right: hp("3.13%"),
    fontSize: 10,
    fontWeight: 700,
    opacity: 0.7,
    paddingLeft:hp("1%"),
    height: hp("2%"),
    width: wp("17.6%"),
    marginLeft: hp("1%"),
    marginRight: hp("100%"),
    
  },

  map: {
    opacity: 0.8
  },

  mapList: {
    opacity: 0.8
  },

  plus: {
    opacity: 0.8
  },

  myMaps: {
    opacity: 0.8
  },

  profile: {
    opacity: 0.8
  },
  profilePage : {
    fontSize: 26,
    color : '#000000',
    marginBottom: hp("1%"),
    height: hp("6%"),
    justifyContent: "center",
    width: wp("70%"),
  },
  walletborder: {
    opacity: 0.8
  },

  wallet: {
    right: hp("18%"),
    bottom: hp("11%"),
    height: hp("6%"),
    width: wp("40%"),
     
  },
  
  balance : {
    top: hp("8%"),
    right: ("23%"),
    height: hp("5%"),
    width: wp("40%"),
    

  },
  coin : {
    top: hp("10%"),
    right: hp("17%"),
    height: hp("2%"),
    width: wp("2%"),
    padding: hp("1.5%"),

  },
  navigation: {
    paddingTop: hp("1.3%"),
    paddingBottom: hp("4.5%"),
    height: hp("1%"),
    width: wp("70%"),
    borderWidth: 1,
    borderRadius: 5,
  },
  images: {
    bottom: hp("6.5%"),
    right: hp("7%"),
    height: hp("1%"),
    width: wp("1%"),
    padding: hp("2%"),
  },
  bigger: {
    bottom: hp("3%"),
    left: hp("40%"),
    height: hp("1%"),
    width: wp("1%"),
    padding: hp("1.5%"),
  },
  allmenu: {
    bottom: hp("9%"),
  },
  topmenu: {
    bottom: hp("6%"),
    left: hp("4%"),
  },
});
