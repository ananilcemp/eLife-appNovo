import React, { Component } from 'react';
import {Linking, ScrollView ,TouchableOpacity} from 'react-native';
import { Divider,ListItem } from 'react-native-elements';
import styles from '../styles/styles';
import * as firebase from 'firebase';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Fab} from 'react-native-paper';
 
 
class MedicinesList extends Component {
 
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('medicines');
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
      const { name, schedule, description } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        schedule,
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
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title onPress={() => this.props.navigation.navigate('MedicinesUpdateDelete', {
                        userkey: item.key
                      })}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle onPress={() => this.props.navigation.navigate('MedicinesUpdateDelete', {
                      userkey: item.key
                    })}>{item.description}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron onPress={() => this.props.navigation.navigate('MedicinesUpdateDelete', {
                    userkey: item.key
                  })}  />
                </ListItem>
              );
            })
          }
            <TouchableOpacity>
                <Icon name="plus-circle" size={50}  styles={styles.fab} onPress={() => {
          this.props.navigation.navigate('MedicinesAdd')}}></Icon>
              </TouchableOpacity>
       </ScrollView>
       
       
    );
  }
}
 
export default MedicinesList;