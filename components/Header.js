import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Header(){
    return(
        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row', borderBottomColor:'gray', borderBottomWidth:1}}>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Icon name="bars" size={30} style={{margin: 10}}></Icon>
          <Text style={{margin: 10}}>React</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Icon name="map-marker" size={30} style={{margin: 10}}></Icon>
          <Icon name="bell" size={30} style={{margin: 10}}></Icon>
          <Icon name="user-circle" size={30} style={{margin: 10}}></Icon>
        </View>
        </View>
    )
}