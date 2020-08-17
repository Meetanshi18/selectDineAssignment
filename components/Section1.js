import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section1(){
    return(
    <View style={{margin: 5, justifyContent:'center', display:'flex', alignItems: 'center', borderWidth:1, borderRadius: 4, borderColor:'#E6E6E6', height: 180}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', lineHeight: 24}}>Rs. 10000</Text>
        <Text style={{fontSize: 14, fontWeight: '500', lineHeight: 24}}>Total amount earned</Text>

        <View style={{marginTop: 30, backgroundColor: '#F9F9F9', display:'flex', width:350, borderColor:'#ECECEC', borderWidth: 1, height:73, justifyContent:'center'}}>

          <View style={{...styles.textBox, borderBottomWidth:1, borderBottomColor:'#ECECEC'}}>
            <Text style={{color:'#079841', fontWeight:"bold"}}>Profit</Text>
            <Text style={{color:'#079841' , fontWeight:"bold"}}>Rs. 10000</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={{ fontWeight:"bold"}}>Revenue</Text>
            <Text style={{ fontWeight:"bold"}}>Rs. 10000</Text>
          </View>

        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    textBox:{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        height: 45, 
        alignItems:'center', 
        fontSize: 15, 
        fontWeight: '500', 
        lineHeight: 24,
        marginLeft:8,
        marginRight:8
    }
})