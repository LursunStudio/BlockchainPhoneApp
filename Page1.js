import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToolbarAndroid,
  Button,
  Navigator

} from 'react-native';

export default class Page1 extends Component {
  render() {
    return (
      //畫面
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Page1!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button
          onPress={()=>{console.log("help")}}
          title="Learn More"
          color="#841584"
        />
      </View>
    );
  }
}

        


const styles = StyleSheet.create({
  //特效
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
