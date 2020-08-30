import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import styles from './src/styles/styles';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao eLife!</Text>
      <StatusBar style="auto" />
       <ActionButton 
          buttonColor='blue'
          // onPress = {()=>this.props.navigation.navigate('ContactsAddScreen')}     //redireciona para o formulario de cadastro de contatos de emergencia
        />
    </View>
  );
}

