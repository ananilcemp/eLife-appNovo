import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';                
import ContactsAdd from './src/screens/ContactsAdd';
import Login from './src/screens/Login';

import * as firebase from 'firebase';


//Initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1fdB4jtUUWaO97zXjsWROW5uQPt7csaU",
  authDomain: "react-native-firebase-94486.firebaseapp.com",
  databaseURL: "https://react-native-firebase-94486.firebaseio.com",
  projectId: "react-native-firebase-94486",
  storageBucket: "react-native-firebase-94486.appspot.com",
};



  firebase.initializeApp(firebaseConfig);


//criacao da stack de navegacao entre telas
const Nav = createStackNavigator({
  Login:{
    screen:Login,
    navigationOptions:{
      title:'Login'
    }
  },
  Home:{    
    screen:Home,
    navigationOptions:{
      title:'Home'
    }
  },
  ContactsAdd:{
    screen:ContactsAdd,
    navigationOptions:{
      title:'Contatos'
    }
  }
  
})

//adiciona a stack em um container
const App = createAppContainer (Nav); 

export default App;

