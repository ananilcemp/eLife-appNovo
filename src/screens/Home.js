import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import * as firebase from 'firebase';

import styles from '../styles/styles';
import { result } from 'lodash';

export default class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({
            result: '',
            dados: { BPM: 0, SPO2: 0, hora: '' }
        })
        //     this.state = {
        //         dados: {BPM: 0, SPO2: 0, hora:''}, };
    }

    sair = () => {
        firebase.auth().signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => {
                alert(error.message)
            })
    }

    componentDidMount() {
        /*firebase.database().ref('/Users/MGfTS2ahjlc9nbcFTSG/BPM').once('value')
            .then(snapshot => {
                this.setState({ result: snapshot.val() })
            })*/

        // firebase.database().ref('Users/-MGfTS2ahjlc9nbcFTSG/BPM').on('value', function (snapshot) {
        //     this.setState({ result: snapshot.val() })
        //     console.log(result)

        // })

        firebase
            .database()
            .ref('/Users/EEJ0359YT')
            .on('value', data => {
                this.setState({ dados: data.toJSON() });
                console.log(this.state.dados.BPM);
            });

        /*firebase
            .database()
            .ref('/Users/MGfTS2ahjlc9nbcFTSG')
            .once('value', data => {
                this.setState({ dados: data.toJSON() });
            })*/
    }




    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.result}</Text>
                <Text>{this.state.dados.BPM}</Text>
                <Text>{this.state.dados.SPO2}</Text>
                <Text>{this.state.dados.hora}</Text>
                <Button title="Sair" onPress={() => this.sair()} />

            </View>
        );
    }

}