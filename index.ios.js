/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Button,
  Alert
} from 'react-native';

export default class PlatziMusic extends Component {
  onPress() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.red]}></View>
        <View style={[styles.box, styles.green]}></View>
        <View style={[styles.box, styles.blue]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box:{
    width: 150,
    height:200,
    backgroundColor: 'black'
  },
  red:{
    backgroundColor: 'red'
  },
  green:{
    flex: 1,
    backgroundColor: 'green'
  },
  blue:{
    backgroundColor: 'blue'
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
