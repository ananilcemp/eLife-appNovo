import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text, View } from 'react-native';
import styles from '../styles/styles';

export default class AddRemedio extends React.Component {
    render(){
      return (
        <View style={styles.container}>
            <Text>Adicionar</Text>
          <StatusBar style="auto" />
        </View>
      );
      }
    
  }
  