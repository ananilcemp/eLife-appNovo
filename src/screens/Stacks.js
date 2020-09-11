import ContactsAdd from './ContactsAdd';
import ContactsList from './ContactsList';
import ContactsUpdateDelete from './ContactsUpdateDelete';
import MedicinesList from './MedicinesList';
import MedicinesAdd from './MedicinesAdd';
import MedicinesUpdateDelete from './MedicinesUpdateDelete';
import Home from './Home';  
 
import {createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
 
const contactsStack = createStackNavigator({
    ContactsList: {
        screen: ContactsList,
        navigationOptions: {
            title: 'Contatos de Emergência'
        }
    },
    ContactsAdd: {
        screen: ContactsAdd,
        navigationOptions: {
            title: 'Cadastrar Contatos'
        }
    },
    ContactsUpdateDelete: {
        screen: ContactsUpdateDelete,
        navigationOptions: {
            title: 'Detalhes do Contato'
        }
    }
});
 
const medicinesStack = createStackNavigator({
    MedicinesList: {
        screen: MedicinesList,
        navigationOptions: {
            title: 'Lista de Remédios'
        }
    },
    MedicinesAdd: {
        screen: MedicinesAdd,
        navigationOptions: {
            title: 'Cadastrar Remédios'
        }
    },
    MedicinesUpdateDelete: {
        screen: MedicinesUpdateDelete,
        navigationOptions: {
            title: 'Detalhes do Remédio'
        }
    }
});
 


const homeStack = createStackNavigator({
    Home:{    
      screen:Home,
      navigationOptions:{
        title:'Home',
        button:'Logout'

      }
    }
  });
const Nav2 = createBottomTabNavigator({
    Home:{    
        screen:homeStack,
        navigationOptions:{
          title:'Home',
        }
      },
    ContactsList: {
        screen: contactsStack,
        navigationOptions: {
            title: 'Contatos de Emergência'
        }
    },
    MedicinesList: {
        screen: medicinesStack,
        navigationOptions: {
            title: 'Remédios'
        }
    }
});
 
const Teste = createAppContainer (Nav2); 
 
export default Teste;

