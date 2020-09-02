import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text, View ,TextInput,Image, KeyboardAvoidingView} from 'react-native';
import styles from '../styles/styles';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default class ContactsAdd extends React.Component {
    render(){
      return (
      
       


        <KeyboardAvoidingView style={styles.container}  enable>
           <View style={styles.containerTop}>
                <Image source={require('../images/telefone.png')} style={styles.imageContacts} />
          </View>
          <View style={styles.containerBottom}>
            <TextInput style={styles.txtInput}  placeholder="Nome"/>
            <TextInput style={styles.txtInput}  placeholder="Telefone"/>
            <TextInput style={styles.txtInput}  placeholder="Descrição"/>
            <Icon.Button
                name="checkcircle"
                backgroundColor="#228b22"
                size={30}
                borderRadius={50}
                onPress={() => alert('Cadastrar')}><Text style={styles.txtButton} >Salvar</Text>
                </Icon.Button>
            
                
          </View>
          
        </KeyboardAvoidingView>
      );
      }
    
  }
  