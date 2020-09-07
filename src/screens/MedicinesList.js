import React, { Component } from 'react';
import {ScrollView ,TouchableOpacity,View} from 'react-native';
import {ListItem } from 'react-native-elements';
import styles from '../styles/styles';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      const { name, hours,minutes, description } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        hours,
        minutes,
        description,
      });
    });
    this.setState({
      userArr
   });
  }
 
  render() { 
    return (
      <View style={styles.containerList}>
        <ScrollView style={styles.containerList}>
            {
              this.state.userArr.map((item, i) => {
                return (
                  <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title onPress={() => this.props.navigation.navigate('MedicinesUpdateDelete', {
                          userkey: item.key
                        })}>{item.name} - {item.hours}:{item.minutes}</ListItem.Title>
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
        </ScrollView>
        <View>
             <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('MedicinesAdd') }}
            style={styles.fab}
          >
            <Icon name="plus" size={30} color="#01a699" />
          </TouchableOpacity>
          </View>
      </View>
        
       
    );
  }
}
 
export default MedicinesList;