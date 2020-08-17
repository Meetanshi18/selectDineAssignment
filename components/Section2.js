import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section2(){
    return(
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', margin: 5}}>
            <View style = {styles.box}>
                <Text style={styles.textNum}>40</Text>
                <Text style={styles.text}>Customer Visit</Text>
            </View>
            <View style = {styles.box}>
                <Text style={styles.textNum}>90</Text>
                <Text style={styles.text}>Item Purchased</Text>
            </View>
            <View style = {styles.box}>
                <Text style={{fontSize:14, fontWeight:'bold', lineHeight: 24, color: '#FF9811'}}>Rs. 3000</Text>
                <Text style={{fontSize:12, fontWeight:'500', lineHeight: 24}}>Pending Payment</Text>
                <Text style={{fontSize:9, fontWeight:'500', lineHeight: 15, color: '#EF233C', borderWidth: 1, borderColor:'#EF233C', borderRadius:4, height:15}}>Send Rreminder</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:1,
        borderColor: '#E6E6E6', 
        borderRadius: 4,
        height: 78.63
    },
    textNum:{
        fontSize: 16,
        fontWeight:'bold',
        lineHeight: 24
    },
    text:{
        fontSize: 13,
        fontWeight:'500',
        lineHeight: 24
    }
})