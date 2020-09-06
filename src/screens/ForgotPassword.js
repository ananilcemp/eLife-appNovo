import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as firebase from 'firebase';
import styles from '../styles/styles';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AnimatedContainer = Animatable.createAnimatableComponent(Container);

class ForgotPassword extends Component {

    constructor(props) {
        super(props)
    
        this.state = ({
          email: '',
        })
      }

      changePassword = (email) => {
        // tratar os error igual no botão login
        firebase.auth().sendPasswordResetEmail(email)
        alert("Enviamos um email de alteração de senha, verifique sua caixa de entrada")
        this.props.navigation.navigate('Login')        
      }

  render() {
    return (
        <AnimatedContainer style={styles.containerFP}
        animation="bounceInUp"
        useNativeDriver
      >
        <Form>
          <Item floatingLabel>
            <Label>Digite o email que deseja recuperar</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>

          <Button style={styles.botaoFP}
            full
            rounded
            success
            onPress={() => this.changePassword(this.state.email, this.state.password)}
          >
            <Text style={styles.txtFP}>Alterar Senha</Text>
          </Button>
        </Form>
      </AnimatedContainer>
    )
  }
}

export default ForgotPassword