import React, { Component } from 'react';
import {Text, View,Button } from 'react-native';
// import ActionButton from 'react-native-action-button';

import styles from '../styles/styles';

export default function Home ({navigation}){
    //navegacao para a pagina de contatos
    function navigationContacts(){
        navigation.navigate('ContactsAdd')
    }
    return(
        <View style={styles.container}>
            {/* <Text>Bem vindo ao Home!</Text> */}
            <Button title="Contatos" onPress={navigationContacts}/>
        </View>
    );

}





// import React from 'react';
// import { View, Button, Text } from 'react-native';

// const Page1 = ({ navigation }) => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Home ;D</Text>
//     <Button 
//       title="Cadastrar contatos"
//       onPress={() => navigation.navigate('ContactsAdd') }
//     />
//   </View>
// );

// Page1.navigationOptions = {
//   title: 'Home',
// }

// export default Page1;