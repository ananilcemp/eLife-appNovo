import React, { Component } from 'react';
import {Text, View,Button } from 'react-native';
import * as firebase from 'firebase';
// import ActionButton from 'react-native-action-button';

import styles from '../styles/styles';


export default function Home ({navigation}){
    //navegacao para a pagina de contatos
    function navigationContacts(){
        navigation.navigate('ContactsList')
    }
    function navigationMedicines(){
        navigation.navigate('MedicinesList')
    }
    function sair(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            navigation.navigate('Login')
          }).catch(function(error) {
            // An error happened.
          });
    }
    return(
        <View style={styles.container}>
            <Button title="Sair" onPress={sair}/>
        </View>
    );

}

