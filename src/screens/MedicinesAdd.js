import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { Button } from 'native-base';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import * as firebase from 'firebase';
import TimePicker from 'react-native-simple-time-picker';
Icon.loadFont();
 
export default class MedicinesAdd extends React.Component {
  
  //Cadastrar remédio
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('medicines');       //colecao onde o registro deve ser salvo
    this.state = {                                                  //atributos 
      name: '',
      hours:'',
      minutes:'',
      description: ''
    };
  }
 
  //pega o valor dos inputs
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  inputValueUpdateHour = (val, prop,val2,prop2) => {
    const state = this.state;
    if(val<9) val="0"+val;
    if(val2<9) val2="0"+val2;
    state[prop] = val;
    state[prop2] = val2;
    this.setState(state);
  }
 
  storeMedicine() {
    this.dbRef.add({
      name: this.state.name,
      description: this.state.description,
      hours: this.state.hours,
      minutes:this.state.minutes

    }).then((res) => {
      this.setState({
        name: '',
        hours:'',
        minutes:'',
        description:''
      });
      alert("Remédio salvo com sucesso!")
    })
      .catch((err) => {
        console.error("Erro encontrado: ", err);
        this.setState({
          isLoading: false,
        });
      });
  }
 
  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
      
      <KeyboardAvoidingView style={styles.container} enable>
        <View style={styles.containerTop}>
          <Image source={require('../images/medicines.jpeg')} style={styles.imageContacts} />
        </View>
        <View style={styles.containerBottom}>
          <TextInput style={styles.txtInput} placeholder="Nome" value={this.state.name} onChangeText={(val) => this.inputValueUpdate(val, 'name')} />
          <TextInput style={styles.txtInput} placeholder="Descrição" value={this.state.description} onChangeText={(val) => this.inputValueUpdate(val, 'description')} />
         
        <TimePicker
          onChange={(val1,val2) =>
            this.inputValueUpdateHour(val1,'hours',val2,'minutes')
          }
        />
        
         <Button style={styles.botaoLogin}
            full
            rounded
            success
            onPress={() => this.storeMedicine()}
          >
            <Text style={styles.txtLogin}>Salvar</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
