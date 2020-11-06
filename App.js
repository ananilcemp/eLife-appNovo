
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
import _ from 'lodash'; 
 
import firebase from 'firebase';
import 'firebase/firestore';
 
import Home from './src/screens/Home';                
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import Stacks from './src/screens/Stacks';

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
const Nav = createSwitchNavigator({
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
  Stacks:{    
    screen:Stacks,
    navigationOptions:{
      title:'Teste'
    }
  }
})
 
YellowBox.ignoreWarnings(['Setting a timer']);
    const _console = _.clone(console);
    console.warn = message => {
        if (message.indexOf('Setting a timer') <= -1) {
            _console.warn(message);
        }
};
 
const App = createAppContainer (Nav); 
 
export default App;


