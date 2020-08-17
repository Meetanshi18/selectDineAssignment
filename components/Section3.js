import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section3(props) {
    return (
        <View style={styles.boxContainer}> 
            <Text style={styles.headingbox}>{props.heading}</Text>
            <View style={styles.box}>
                <Text>{props.data.content[0]}</Text>
                <Text>{props.data.content[1]}</Text>
            </View>
            <View style={styles.box}>
                <Text>{props.data.content[2]}</Text>
                <Text>{props.data.content[3]}</Text>
            </View>
            <View style={styles.box}>
                <Text>{props.data.content[4]}</Text>
                <Text>{props.data.content[5]}</Text>
            </View>
            <View style={styles.box}>
                <Text>{props.data.content[6]}</Text>
                <Text>{props.data.content[7]}</Text>
            </View>
            <View style={styles.box}>
                <Text>{props.data.content[8]}</Text>
                <Text>{props.data.content[9]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer:{
        flex:1,
        margin: 2,
        height: 200,
        borderWidth:1,
        borderColor:'#E6E6E6',
        borderRadius:4
    },
    box:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height: 200/6,
        fontSize: 9,
        lineHeight: 24,
        fontWeight:'normal',
        paddingLeft:10,
        paddingRight:10,
        borderBottomWidth:1,
        borderColor:'#E6E6E6',
        borderRadius:4,
        alignItems:'center'
    },
    headingbox:{
        fontSize: 14, 
        fontWeight:'bold', 
        lineHeight:24,
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height: 200/6,
        borderBottomWidth:1,
        borderColor:'#E6E6E6',
        borderRadius:4,
        alignItems:'center',
        paddingLeft: 5
    }
})