import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToolbarAndroid,
  Button,
  Alert,
  Navigator,
  Image,
  AsyncStorage

} from 'react-native';
import Frame from './Frame.js';
//import CheckBox from'react-native-checkbox';

export default class Login extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return(
       <Navigator
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}
          initialRoute={{ title: 'contract' }}
          renderScene={(route, navigator) =>{
            return(
                <View style={{flex:1,paddingTop:20,paddingLeft:40,paddingRight:40}}>  

                  <Text style={{fontSize:20}}>健康</Text>
                  <View style={{padding:20}}>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>發起人 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._user=text;}} ></TextInput>
                    </View>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>發起項目 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd=text;}} password={true}></TextInput>
                    </View>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>目前體重 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd2=text;}} ></TextInput>
                    </View>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>目標體重 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd2=text;}} ></TextInput>
                    </View>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>押金 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd2=text;}} ></TextInput>
                    </View>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>任務結束日 :</Text>
                    </View>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>請選擇 :</Text>
              

                    </View>
                  </View>

                </View>
              )}
      }
    />
 )

    

  }
}

        


const styles = StyleSheet.create({
  horizontal:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  centers:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },

  vertical:{

  },
  textcenter:{
    position: 'relative',
    
    textAlign:'center'
  }
});

