import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
    return (
<View style = {styles.container}>
    <TextInput placeholder= 'Seach here..'/>
</View>
    )
}

const styles= StyleSheet.create({
constainer : {
    width: '100%', 
    height: 50,
    backgroundColor: '#fff', 
    borderRadius: 8,
},
searchInput: {
    width: '100%',
    height:'100%',
    paddingLeft: 8,
    fontSize: 16,
},
})

export default SearchBar;