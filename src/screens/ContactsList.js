import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from '../styles/styles';
import * as firebase from 'firebase';
import ActionButton from 'react-native-action-button';

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

  render() { 
    return (
      
      <ScrollView style={styles.containerList}style={styles.containerList}>
          {
            this.state.userArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.name+" ("+item.description+")"}
                  subtitle={item.phone}
                  onPress={() => {
                    this.props.navigation.navigate('ContactsUpdateDelete', {
                        userkey: item.key
                      });
                    // alert("Ligar para "+item.name+' ?')
                  }}/>
              );
            })
          }
          <ActionButton onPress={() => {
                    this.props.navigation.navigate('ContactsAdd')}}> </ActionButton>
        </ScrollView>
        
        

  
    );
       
    
  }
  
}

export default ContactsList;