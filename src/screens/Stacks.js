import React from 'react';
import ContactsAdd from './ContactsAdd';
import ContactsList from './ContactsList';
import ContactsUpdateDelete from './ContactsUpdateDelete';
import MedicinesList from './MedicinesList';
import MedicinesAdd from './MedicinesAdd';
import MedicinesUpdateDelete from './MedicinesUpdateDelete';
import Logout from './Logout';
import Home from './Home'; 
import Icon from 'react-native-vector-icons/AntDesign';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

Icon.loadFont();

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
        // button:'Logout'
      }
    }
  });

const logoutStack = createStackNavigator({
    Logout:{
        screen: Logout,
        navigationOptions: {
            title: 'Logout'
        }
    }
});

const Nav2 = createMaterialBottomTabNavigator({

    Home:{    
        screen:homeStack,
        navigationOptions: () => ({
            title: 'Home',
            tabBarIcon: ({ tintColor }) => 
              <Icon name="home" size={20} active={tintColor === '#fff'}/>,
            tabBarOptions: {activeTintColor: '#ffffff'}
        }),
      },

    ContactsList: {
        screen: contactsStack,
        navigationOptions: () => ({
            title: 'Contatos',
            tabBarIcon: ({ tintColor }) => 
              <Icon name="phone" size={20} active={tintColor === '#fff'}/>,
            tabBarOptions: {activeTintColor: '#ffffff'}
        })
    },

    MedicinesList: {
        screen: medicinesStack,
         navigationOptions: () => ({
            title: 'Remédios',
            tabBarIcon: ({ tintColor }) => 
              <Icon name="medicinebox" size={20} active={tintColor === '#fff'}/>,
            tabBarOptions: {activeTintColor: '#ffffff'}
        }),
    },

    Logout: {
        screen: logoutStack,
         navigationOptions: () => ({
            title: 'Logout',
            tabBarIcon: ({ tintColor }) => 
              <Icon name="logout" size={20} active={tintColor === '#fff'}/>,
            tabBarOptions: {activeTintColor: '#ffffff'}
        }),
    },
},
    {
        barStyle: {
          backgroundColor: '#93c47d',
        },
    },
);
 
const Teste = createAppContainer (Nav2); 
 
export default Teste;

