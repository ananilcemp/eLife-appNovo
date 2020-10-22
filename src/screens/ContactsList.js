import React, { Component } from 'react';
import { Linking, ScrollView, TouchableOpacity, View } from 'react-native';
import { Divider, ListItem } from 'react-native-elements';
import styles from '../styles/styles';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';

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

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, phone, description, userId } = res.data();
      if(firebase.auth().currentUser.uid == res.data().userId)
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
      <View style={styles.containerList}>
        <ScrollView style={styles.containerList} >
          {
            this.state.userArr.map((item, i) => {
              return (
                <ListItem key={i} bottomDivider>
                  <Icon name="phone-square" size={35} color="#228b22" onPress={() => Linking.openURL(`tel:${item.phone}`)} />
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
                  })} />
                </ListItem>
              );
            })
          }

        </ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('ContactsAdd') }}
            style={styles.fab}
          >
            <Icon name="plus" size={30} color="#01a699" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ContactsList;