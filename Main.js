import React, { Component } from 'react';
import Button from 'react-native-button';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToolbarAndroid,
  TouchableOpacity,
  Navigator,
  DrawerLayoutAndroid,
  AsyncStorage,
  Image

} from 'react-native';

export default class Main extends Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={{flex:1,paddingTop:70,paddingLeft:40,paddingRight:40}}>
          <View style={[styles.horizontal]}> 
            <View style={{padding:10,flex:1,height:'100%'}}>
              <Button
                style={{align:'center',fontSize: 20,height:'100%', color: 'green',backgroundColor:'#4285f4',borderRadius:5}}>
                參與案件
              </Button>
            </View>
            <View style={{padding:10,flex:1}}>
              <Button
                style={{ textAlign:'center',fontSize: 20,height:'100%', color: 'green',backgroundColor:'#ea4335',borderRadius:5}}>
                所有公開案件
              </Button>
            </View>
          </View>
          <View style={[styles.horizontal]}> 
            <View style={{padding:10,flex:1}}>
              <Button
                style={{textAlign:'center',fontSize: 20,height:'100%', color: 'green',backgroundColor:'#34a853',borderRadius:5}}>
                我的最愛
              </Button>
            </View>
            <View style={{padding:10,flex:1}}>
              <Button
                style={{textAlign:'center', fontSize: 20,height:'100%', color: 'green',backgroundColor:'#fbbc05',borderRadius:5}}>
                建立案件
              </Button>
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

