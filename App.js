import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';                
import ContactsAdd from './src/screens/ContactsAdd';
import Remedios from './src/screens/Remedios';

//criacao da stack de navegacao entre telas
const Nav = createStackNavigator({
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
  },
  Remedios:{
    screen:Remedios,
    navigationOptions:{
      title:'Remédios'
    }
  }
})

//adiciona a stack em um container
const App = createAppContainer (Nav); 

export default App;

