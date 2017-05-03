import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToolbarAndroid,
  Navigator,
  Image

} from 'react-native';
import Button from 'react-native-button';

export default class Myaccount  extends Component {
  
      //畫面


  render() {
    return (
      
        <View style={{flex:1,paddingTop:60,paddingLeft:30,paddingRight:30}}>
          <View style={[styles.horizontal]}> 
            <View style={{padding:5,flex:1,height:'100%'}}>
              <Image source={require("./img/A01.jpg")} style={{width: 130, height: 130}}/> 
             </View>
            <View style={{padding:5,flex:1}}>
             <Image source={require("./img/A02.jpg")} style={{width: 130, height: 130}}/> 
            </View>
          </View>

          <View style={[styles.horizontal,{marginTop:50}]}> 

            <View style={{padding:10,flex:1}}>
               <Image source={require("./img/A04.jpg")} style={{width: 130, height: 130}}/> 
            </View>

            <View style={{padding:10,flex:1}}>
              <Image source={require("./img/A05.jpg")} style={{width: 130, height: 130}}/> 
            </View>

          </View>
        </View>
    )
  }
}

        


const styles = StyleSheet.create({
  horizontal:{
    flexDirection:'row',
    height:'20%',
    justifyContent:'center',
  },
});

