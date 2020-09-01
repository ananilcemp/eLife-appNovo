import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text, View ,TextInput} from 'react-native';
import styles from '../styles/styles';

export default class ContactsAdd extends React.Component {
    render(){
      return (
        <View style={styles.container}>
          <TextInput style={styles.txtInput}  placeholder="Nome"/>
          {/* <Text>Contatos!</Text> */}
          {/* <StatusBar style="auto" /> */}
        </View>
      );
      }
    
  }
  