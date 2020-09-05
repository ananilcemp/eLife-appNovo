// screens/UserDetailScreen.js

import React, { Component } from 'react';
import { Alert, StyleSheet, TextInput, ScrollView, ActivityIndicator, View,Text } from 'react-native';
import * as firebase from 'firebase';
import styles from '../styles/styles';
import {Button} from 'native-base';


class ContactsUpdateDelete extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      description: ''
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('contacts').doc(this.props.navigation.getParam('userkey'))
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          name: user.name,
          phone: user.phone,
          description: user.description
        });
      } else {
        console.log("Contato não existe!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  updateContact() {
    this.setState({
      isLoading: true,
    });
    const updateDBRef = firebase.firestore().collection('contacts').doc(this.state.key);
    updateDBRef.set({
      name: this.state.name,
      phone: this.state.phone,
      description: this.state.description,
    }).then((docRef) => {
      this.setState({
        key: '',
        name: '',
        phone: '',
        description: '',
      });
      // this.props.navigation.navigate('ContactsList');
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  deleteContact() {
    const dbRef = firebase.firestore().collection('contacts').doc(this.props.navigation.getParam('userkey'))
      dbRef.delete().then((res) => {
          console.log('Contato apagado.')
          // this.props.navigation.navigate('ContactsList');
      })
  }

  openTwoButtonAlert=()=>{
    Alert.alert(
      'Apagar Contato de Emergência',
      'Você tem certeza?',
      [
        {text: 'Sim', onPress: () => this.deleteContact()},
        {text: 'Não', onPress: () => console.log('Nenhum item foi removido.'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }

  render() {
    // if(this.state.isLoading){
    //   return(
    //     <View style={styles.preloader}>
    //       <ActivityIndicator size="large" color="#9E9E9E"/>
    //     </View>
    //   )
    // }
    return (
      <ScrollView style={styles.containerForms}>
          <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Nome'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Telefone'}
              value={this.state.phone}
              onChangeText={(val) => this.inputValueUpdate(val, 'phone')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Descrição'}
              value={this.state.description}
              onChangeText={(val) => this.inputValueUpdate(val, 'description')}
          />
        </View>

        <Button style={styles.botaoLogin}
            full
            rounded
            success
            onPress={() => this.storeContact()}
          >
            <Text style={styles.txtLogin}>Salvar</Text>
          </Button>

          <Button style={styles.botaoApagar}
            full
            rounded
            success
            onPress={this.openTwoButtonAlert}
          >
            <Text style={styles.txtLogin}>Apagar</Text>
          </Button>

        </ScrollView>
      // <ScrollView style={styles.containerForms}>
      //   <View style={styles.inputGroup}>
      //     <TextInput
      //         placeholder={'Name'}
      //         value={this.state.name}
      //         onChangeText={(val) => this.inputValueUpdate(val, 'name')}
      //     />
      //   </View>
      //   <View style={styles.inputGroup}>
      //     <TextInput
      //         multiline={true}
      //         placeholder={'Telefone'}
      //         value={this.state.phone}
      //         onChangeText={(val) => this.inputValueUpdate(val, 'phone')}
      //     />
      //   </View>
      //   <View style={styles.inputGroup}>
      //     <TextInput
      //         placeholder={'Descrição'}
      //         value={this.state.description}
      //         onChangeText={(val) => this.inputValueUpdate(val, 'description')}
      //     />
      //   </View>
      //   <View >
      //     <Button 
      //       style={styles.botaoLogin}
      //       full
      //       rounded
      //       success
      //       title='Atualizar'
      //       onPress={() => this.updateContact()} 
      //       color="#19AC52"
      //     />
      //     </View>
          
      //    <View>
      //     <Button style={styles.botaoLogin}
      //       full
      //       rounded
      //       success
      //       title='Apagar'
      //       onPress={this.openTwoButtonAlert}
      //       color="#E37399"
      //     />
      //   </View>
      //   <View>
      //   <Button style={styles.botaoLogin}
      //       full
      //       rounded
      //       success
      //       title='Salvar'
      //       onPress={this.openTwoButtonAlert}
      //     >
      //       <Text style={styles.txtLogin}>Salvar</Text>
      //     </Button>
      //     </View>

      // </ScrollView>
    );
  }
}

export default ContactsUpdateDelete;