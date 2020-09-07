// screens/UserDetailScreen.js
 
import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import * as firebase from 'firebase';
import TimePicker from 'react-native-simple-time-picker';
 
class MedicinesUpdateDelete extends Component {
 
  constructor() {
    super();
    this.state = {
      name: '',
      hours: '',
      minutes:'',
      description: ''
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('medicines').doc(this.props.navigation.getParam('userkey'))
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          name: user.name,
          hours: user.hours,
          minutes:user.minutes,
          description: user.description
        });
      } else {
        console.log("Remédio não existe!");
      }
    });
  }
 
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

  updateMedicine() {
    this.setState({
      isLoading: true,
    });
    const updateDBRef = firebase.firestore().collection('medicines').doc(this.state.key);
    updateDBRef.set({
      name: this.state.name,
      hours: this.state.hours,
      minutes:this.state.minutes,
      description: this.state.description,
    }).then((docRef) => {
        alert("Remédio atualizado com sucesso!");
        this.props.navigation.navigate('MedicinesList')
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }
 
  deleteMedicine() {
    const dbRef = firebase.firestore().collection('medicines').doc(this.props.navigation.getParam('userkey'))
      dbRef.delete().then((res) => {
        alert("Remédio deletado com sucesso!");
        this.props.navigation.navigate('MedicinesList')
      })
  }
 
  openTwoButtonAlert=()=>{
    Alert.alert(
      'Apagar Remédio',
      'Você tem certeza?',
      [
        {text: 'Sim', onPress: () => this.deleteMedicine()},
        {text: 'Não', onPress: () => console.log('Nenhum remédio foi removido.'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }
 
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.txtInput}
              placeholder={'Nome'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.inputGroup}>
        <TimePicker
           selectedHours={this.state.hours}
           selectedMinutes={this.state.minutes}
          onChange={(val1,val2) =>
            this.inputValueUpdateHour(val1,'hours',val2,'minutes')
          }
        />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Descrição'}
              value={this.state.description}
              onChangeText={(val) => this.inputValueUpdate(val, 'description')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Atualizar'
            onPress={() => this.updateMedicine()} 
            color="#19AC52"
          />
          </View>
         <View>
          <Button style={styles.botaoLogin}
            full
            rounded
            success
            title='Apagar'
            onPress={this.openTwoButtonAlert}
            color="#E37399"
          />
        </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7, 
  }
})
 
export default MedicinesUpdateDelete;
