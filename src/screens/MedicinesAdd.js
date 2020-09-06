import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { Button } from 'native-base';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import * as firebase from 'firebase';
 
// import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
 
export default class MedicinesAdd extends React.Component {
  
  //Cadastrar remédio
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('medicines');       //colecao onde o registro deve ser salvo
    this.state = {                                                  //atributos 
      name: '',
      schedule: '',
      description: ''
    };
  }
 
  //pega o valor dos inputs
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
 
  storeMedicine() {
    this.dbRef.add({
      name: this.state.name,
      schedule: this.state.schedule,
      description: this.state.description,
    }).then((res) => {
      this.setState({
        name: '',
        schedule: '',
        description: '',
      });
      alert("Remédio salvo com sucesso!")
      // this.props.navigation.navigate('UserScreen')
    })
      .catch((err) => {
        console.error("Erro encontrado: ", err);
        this.setState({
          isLoading: false,
        });
      });
  }
 
  render() {
    return (
 
      <KeyboardAvoidingView style={styles.container} enable>
        <View style={styles.containerTop}>
          <Image source={require('../images/medicines.jpeg')} style={styles.imageContacts} />
        </View>
        <View style={styles.containerBottom}>
          <TextInput style={styles.txtInput} placeholder="Nome" value={this.state.name} onChangeText={(val) => this.inputValueUpdate(val, 'name')} />
          <TextInput style={styles.txtInput}  placeholder="Horário" value={this.state.schedule} onChangeText={(val) => this.inputValueUpdate(val, 'schedule')}/>
          <TextInput style={styles.txtInput} placeholder="Descrição" value={this.state.description} onChangeText={(val) => this.inputValueUpdate(val, 'description')} />
          <Button style={styles.botaoLogin}
            full
            rounded
            success
            onPress={() => this.storeMedicine()}
          >
            <Text style={styles.txtLogin}>Salvar</Text>
          </Button>
          {/* <Icon.Button
                name="checkcircle"
                backgroundColor="#228b22"
                size={30}
                borderRadius={50}
                onPress={() => alert('Cadastrar')}><Text style={styles.txtButton} >Salvar</Text>
                </Icon.Button> */}
        </View>
      </KeyboardAvoidingView>
    );
  }
}
// <TextInput style={styles.txtInput}  placeholder="Horário" value={this.state.schedule} onChangeText={(val) => this.inputValueUpdate(val, 'schedule')}/>
