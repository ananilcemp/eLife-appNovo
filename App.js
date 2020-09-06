import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 

import Home from './src/screens/Home';                
import ContactsAdd from './src/screens/ContactsAdd';
import ContactsList from './src/screens/ContactsList';
import ContactsUpdateDelete from './src/screens/ContactsUpdateDelete';
import MedicinesList from './src/screens/MedicinesList';
import MedicinesAdd from './src/screens/MedicinesAdd';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import MedicinesUpdateDelete from './src/screens/MedicinesUpdateDelete';


import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCkcd18-v8VhzjVI97RzV_EUxvduY_1zsE",
  authDomain: "tfg2020-7ccf6.firebaseapp.com",
  databaseURL: "https://tfg2020-7ccf6.firebaseio.com",
  projectId: "tfg2020-7ccf6",
  storageBucket: "tfg2020-7ccf6.appspot.com",
  messagingSenderId: "508028221409",
  appId: "1:508028221409:web:e06c4f2eafae8de9ecc4a0",
  measurementId: "G-TLMHZK9XZ7"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

//criacao da stack de navegacao entre telas
const Nav = createStackNavigator({
  Login:{
    screen:Login,
    navigationOptions:{
      title:'Login'
    }
  },
  ForgotPassword:{
    screen:ForgotPassword,
    navigationOptions:{
      title: 'ForgotPassword'
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
      title:'Cadastrar Contatos'
    }
  },
  ContactsList:{
    screen:ContactsList,
    navigationOptions:{
      title:'Contatos de Emergência'
    }
  },
  ContactsUpdateDelete:{
    screen:ContactsUpdateDelete,
    navigationOptions:{
      title:'Detalhes do Contato'
    }
  },
  MedicinesList:{
    screen:MedicinesList,
    navigationOptions:{
      title:'Remédios Cadastrados'
    }
  },
  MedicinesAdd:{
    screen:MedicinesAdd,
    navigationOptions:{
      title:'Cadastrar Remédios'
    }
  },
  MedicinesUpdateDelete:{
    screen:MedicinesUpdateDelete,
    navigationOptions:{
      title:'Detalhes do Remédio'
    }
  }

  
})


const App = createAppContainer (Nav); 

export default App;

