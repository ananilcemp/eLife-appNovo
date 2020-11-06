import React, { Component } from 'react';
import * as firebase from 'firebase';
import Login from './Login';

import styles from '../styles/styles';
import { result } from 'lodash';
import { AsyncStorage, Alert, View, SafeAreaView, Text, ActivityIndicator, Dimensions, TextInput, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { DrawerItems, DrawerActions } from 'react-navigation-drawer';

export default class Logout extends React.Component {

    render(){
    return(

        <View style={{ flex: 1 }}>
            <SideMenu {...props} />
            <DrawerItems {...props} />
            <TouchableOpacity onPress={() =>
                Alert.alert(
                    'Log out',
                    'Do you want to logout?',
                    [
                        { text: 'Cancel', onPress: () => { this.props.navigation.dispatch(DrawerActions.closeDrawer()) } },
                        {
                            text: 'Confirm', onPress: () => {
                                AsyncStorage.clear();
                                props.navigation.navigate('Login')
                            }
                        },
                    ],
                    { cancelable: false }
                )
            }>
                <Text style={{ margin: 16, fontWeight: 'bold', color: 'red' }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
    }
}