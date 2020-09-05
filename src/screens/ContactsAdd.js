import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text, View ,TextInput,Image, KeyboardAvoidingView} from 'react-native';
import {Button} from 'native-base';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import * as firebase from 'firebase';

// import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default class ContactsAdd extends React.Component {
    //Cadastrar contato
    constructor() {
      super();
      this.dbRef = firebase.firestore().collection('contacts');       //colecao onde o registro deve ser salvo
      this.state = {                                                  //atributos 
        name: '',
        phone: '',
        description: ''
      };
    }

    //pega o valor dos inputs
    inputValueUpdate = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }

    
    storeContact() {   
      this.dbRef.add({
        name: this.state.name,
        phone: this.state.phone,
        description: this.state.description,
      }).then((res) => {
        this.setState({
          name: '',
          phone: '',
          description: '',
        });
        alert("Contato salvo com sucesso!")
        // this.props.navigation.navigate('UserScreen')
      })
      .catch((err) => {
        console.error("Erro encontrado: ", err);
        this.setState({
          isLoading: false,
        });
      });     
    }

    render(){
      return (
        <KeyboardAvoidingView style={styles.containerLogin}  enable>
           <View style={styles.containerTop}>
                <Image source={require('../images/telefone.png')} style={styles.imageContacts} />
          </View>
          <View style={styles.containerBottom}>
            <TextInput style={styles.txtInput}  placeholder="Nome" value={this.state.name} onChangeText={(val) => this.inputValueUpdate(val, 'name')}/>
            <TextInput style={styles.txtInput}  placeholder="Telefone" value={this.state.phone} onChangeText={(val) => this.inputValueUpdate(val, 'phone')}/>
            <TextInput style={styles.txtInput}  placeholder="Descrição" value={this.state.description} onChangeText={(val) => this.inputValueUpdate(val, 'description')}/>
            
            <Button style={styles.botaoLogin}
            full
            rounded
            success
            onPress={() =>this.storeContact()}
          >
            <Text style={styles.txtLogin}>Salvar</Text>
          </Button>
            
            
            
            {/* <Button style={styles.botaoLogin}
            full
            rounded
            success
            onPress={() =>this.storeContact()}
            >
            <Text style={styles.txtLogin}>Salvar</Text>
            </Button> */}
          </View> 
        </KeyboardAvoidingView>
      );
      }
    
  }
  