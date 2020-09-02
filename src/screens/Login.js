import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable'

import * as firebase from 'firebase';

const AnimatedContainer = Animatable.createAnimatableComponent(Container);



import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import { render } from 'react-dom';

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email, password) =>{
    try{
      if(this.state.password.length < 6){
        alert ("A senha deve conter no mínimo 6 caractéres.")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password);
    }catch(error){
      console.log(error.toString())
      return;
    }
  }

  loginUser = (email, password) =>{
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
        //Aqui vai a navegação para Home
      })

      function navigationContacts(){
        navigation.navigate('Home')
    }

    }catch(error){
      console.log(error.toString())
      return;
    }
  }

  render() {
    return (
      <AnimatedContainer style={styles.container}
        animation="bounceIn"
        useNativeDriver
      >
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Senha</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={styles.botaoLogin}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={styles.txtLogin}>Login</Text>
          </Button>
          <Button style={styles.botaoCadastrar}
            full
            rounded
            success
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={styles.txtCadastrar}>Cadastrar</Text>
          </Button>
        </Form>
      </AnimatedContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },

  botaoLogin: {
    margin: 10,
    marginTop: 40,
  },

  botaoCadastrar: {
    margin: 10,
    backgroundColor: '#4682B4',
  },

  txtLogin: {
    color: '#fff',
    fontSize: 18,
  },

  txtCadastrar: {
    color: '#fff',
    fontSize: 18,
  }
});
