import React, { Component } from 'react';
<<<<<<< HEAD
import { Linking, ScrollView, TouchableOpacity } from 'react-native';
=======
import { Linking, ScrollView, TouchableOpacity, View } from 'react-native';
>>>>>>> d3968d3acb788ad1925b550e6c0847e68d8548b2
import { Divider, ListItem } from 'react-native-elements';
import styles from '../styles/styles';
import * as firebase from 'firebase';
// import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
<<<<<<< HEAD
import { Fab } from 'react-native-paper';
import { View } from 'react-native-animatable';

=======
// import { Fab } from 'react-native-paper';
>>>>>>> d3968d3acb788ad1925b550e6c0847e68d8548b2

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
<<<<<<< HEAD

=======
>>>>>>> d3968d3acb788ad1925b550e6c0847e68d8548b2
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
<<<<<<< HEAD
       
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


=======
        <View>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('ContactsAdd') }}
            style={styles.fab}
          >
            <Icon name="plus" size={30} color="#01a699" />
          </TouchableOpacity>
        </View>
      </ScrollView>
>>>>>>> d3968d3acb788ad1925b550e6c0847e68d8548b2
    );
  }
}

export default ContactsList;