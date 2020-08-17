import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Modal from './components/Modal'

export default function App() {
  return (
    <View style={{marginTop: 30}}>

      <Header/>
      <Section1/>
      <Section2/>

      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', margin: 5}}>
        <Section3 heading="Top products by sale" data={{content:["Lays", "Rs. 10000", "Pepsi", "Rs. 10000", "Salt", "Rs. 10000", "Maaza", "Rs. 10000", "Coke", "Rs. 10000"]}}/>
        <Section3 heading="Top products by Quantity" data={{content:["Cash-60%", "Rs. 10000", "Card-30%", "Rs. 10000", "UPI-10%", "Rs. 10000", "Wallet-10%", "Rs. 10000", "Wallet-10%", "Rs. 10000"]}}/>
      </View>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', margin: 5}}>
        <Section3 heading="Top profitable products" data={{content:["Cash-60%", "Rs. 10000", "Card-30%", "Rs. 10000", "UPI-10%", "Rs. 10000", "Wallet-10%", "Rs. 10000", "Wallet-10%", "Rs. 10000"]}}/>
        <Section3 heading="Top products by sale" data={{content:["Cash-60%", "Rs. 10000", "Card-30%", "Rs. 10000", "UPI-10%", "Rs. 10000", "Wallet-10%", "Rs. 10000", "Wallet-10%", "Rs. 10000"]}}/>
      </View>

      <Modal/>
      
    </View>
  );
}
