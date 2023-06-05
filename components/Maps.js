import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {useWindowDimensions} from 'react-native';
import { hp, wp } from '../components/global'

export default function Maps( {navigation} ) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const goToMain = () => {
    navigation.navigate('Main')
  }

  const goToProfile = () => {
    navigation.navigate('Profile')
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
      <Text>Maps</Text>
      </View>
      
      <View style = {styles.footer}>
        <TouchableOpacity style = {styles.map} onPress={goToMain}>
          <View style={styles.touchable}>
            <Image source={require('../../AppWithKirill2-master/assets/maps.png')}></Image>
            <Text style={styles.text_in_touchable}>     Карта</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.mapList} onPress={goToMapList}>
          <View style={styles.touchable}>
            <Image source={require('../../AppWithKirill2-master/assets/maplist.png')}></Image>
            <Text style={styles.text_in_touchable}>Карты дна</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.plus} onPress={goToPlus}>
          <View style={styles.touchable}>
            <Image style = {{top: hp("0.6%")}} source={require('../../AppWithKirill2-master/assets/plus.png')}></Image>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.myMaps}>
          <View style={styles.touchable}>
            <Image source={require('../../AppWithKirill2-master/assets/mymaps.png')}></Image>
            <Text style={styles.text_in_touchable}>Мои карты</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.profile} onPress={goToProfile}>
          <View style={styles.touchable}>
            <Image source={require('../../AppWithKirill2-master/assets/profile.png')}></Image>
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
});
