import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TextInput,
    Button
} from "react-native";

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>

            <Modal animationType="slide" transparent={true} visible={modalVisible}      >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "white" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View>
                                <Text style={{fontSize:20, marginTop:10, marginBottom:10}}>Choose your location</Text>
                                <TextInput placeholder="HSR Layout" style={{marginTop:10, borderWidth:1, borderColor:'#E6E6E6', height: 40}}></TextInput>
                                <TextInput placeholder="Banjara Hills" style={{marginBottom:10, borderWidth:1, borderColor:'#E6E6E6', height: 40, marginTop:5}}></TextInput>
                                <View style={{height:50, backgroundColor:'#EF233C', borderRadius:4, justifyContent:'center', marginTop: 10}}>
                                    <Text style={{color:'white', textAlign:'center', fontSize: 20}}>Confirm</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    openButton: {
        width:'100%',
        padding: 10,
        elevation: 2,
        height: 250,
        // justifyContent:'space-evenly'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default App;
