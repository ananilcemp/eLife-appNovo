import React, { Component } from 'react';
import {Linking, ScrollView ,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';
import styles from '../styles/styles';
import * as firebase from 'firebase';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Fab} from 'react-native-paper';


class ContactsList extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('contacts');
    this.state = {
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, phone, description } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        phone,
        description,
      });
    });
    this.setState({
      userArr
   });
  }

  //funcao para fazer chamada telefonica
  makeCall = (number) => {
    const args = {
        number: number, 
        Prompt: true 
    }
   call(args).catch(console.error)
}

  render() { 
    return (
      
      <ScrollView style={styles.containerList}style={styles.containerList}>
          {
            this.state.userArr.map((item, i) => {
              return (
                <ListItem key={i} bottomDivider>
                  <Icon name="phone-square" size={35} color="#228b22"  onPress={() =>  Linking.openURL(`tel:${item.phone}`)}/>
                  <ListItem.Content>
                    <ListItem.Title onPress={() => this.props.navigation.navigate('ContactsUpdateDelete', {
                        userkey: item.key
                      })}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle onPress={() => this.props.navigation.navigate('ContactsUpdateDelete', {
                      userkey: item.key
                    })}>{item.description}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron onPress={() => this.props.navigation.navigate('ContactsUpdateDelete', {
                    userkey: item.key
                  })}  />
                </ListItem>
              );
            })
          }
            <TouchableOpacity>
                <Icon name="plus-circle" size={50}  styles={styles.fab} onPress={() => {
          this.props.navigation.navigate('ContactsAdd')}}></Icon>
              </TouchableOpacity>
          {/* <Fab color="red" aria-label="add" onPress={() => {
              this.props.navigation.navigate('ContactsAdd')}}>
              
          </Fab> */}
          
        
          
       </ScrollView>
       
       
    );
  }
}



export default ContactsList;