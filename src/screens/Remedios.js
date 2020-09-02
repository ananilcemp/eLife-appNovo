import React, { Component } from 'react';
import {Text, View,Button } from 'react-native';
import styles from '../styles/styles';

export default function Remedios ({navigation}){
    function navigationAdd(){
        navigation.navigate('AddRemedio')
    }
      return (
        <View style={styles.container}>
            <Button title="Adicionar remédio" onPress={navigationAdd}/> 
        </View>
      );
}

  