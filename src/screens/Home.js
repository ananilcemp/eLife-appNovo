import React, { Component } from 'react';
import {Text, View,Button } from 'react-native';
// import ActionButton from 'react-native-action-button';

import styles from '../styles/styles';

export default function Home ({navigation}){
    //navegacao para a pagina de contatos
    function navigationContacts(){
        navigation.navigate('ContactsList')
    }
    function navigationMedicines(){
        navigation.navigate('MedicinesAdd')
    }
    return(
        <View style={styles.container}>
            {/* <Text>Bem vindo ao Home!</Text> */}
            <Button title="Contatos" onPress={navigationContacts}/>
            
            <Button title="Remédios" onPress={navigationMedicines}/>
        </View>
    );

}
