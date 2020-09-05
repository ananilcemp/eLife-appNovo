import React, { Component } from 'react';
import { Linking, ScrollView, TouchableOpacity } from 'react-native';
import { Divider, ListItem } from 'react-native-elements';
import styles from '../styles/styles';
import * as firebase from 'firebase';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fab } from 'react-native-paper';
import { View } from 'react-native-animatable';


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

      <ScrollView style={styles.containerList} style={styles.containerList}>
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
       
        <View style={styles.viewTest}>

        
        <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       position: 'absolute',                                          
       bottom: 5,                                                    
       right: 10,
       height:70,
       backgroundColor:'#00BFFF',
       borderRadius:100,
     }}
 >
   <Icon name="plus"  size={30} color="#fff" />
  </TouchableOpacity>

  </View>
      </ScrollView>


    );
  }
}



export default ContactsList;