import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import styles from '../styles/styles';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
<<<<<<< HEAD
import { Image } from 'react-native';


import * as firebase from 'firebase';


const AnimatedContainer = Animatable.createAnimatableComponent(Container);



=======
import * as firebase from 'firebase';
>>>>>>> d3968d3acb788ad1925b550e6c0847e68d8548b2
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import { render } from 'react-dom';

const AnimatedContainer = Animatable.createAnimatableComponent(Container);

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("A senha deve conter no mínimo 6 caractéres.")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString())
      return;
    }
  }
  loginUser = (email, password) => {

    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Home'))
        .catch(error => {
          if (error.message === 'The password is invalid or the user does not have a password.') {
            alert("Verifique sua senha!")
          }
          else if (error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
            alert("Esse email ainda não foi cadastrado ou foi deletado. Por favor insira outro email ou clique no botão cadastrar")
          }
          else if(error.message === 'The email address is badly formatted.'){
            alert("O email não foi inserido ou está mal formatado.")
          }
          else{
            alert(error.message)
          }

        })
    } catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <AnimatedContainer style={styles.containerLogin}
        animation="bounceIn"
        useNativeDriver
      >
        <Form>
          <View style={styles.logoView}>
            <Image source={require('../images/eLife_Logo.png')} style={styles.logo} />
          </View>
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
