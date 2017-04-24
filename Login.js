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


export default class Login extends Component {
  constructor(props) {
    super(props);
  
  }
  async login(self){
    
    var user=await AsyncStorage.getItem("User");
    var psw=await AsyncStorage.getItem("Password");
    if (user==self._user&&psw==self._passwd&&psw==self._passwd2){
      self.navigator.push({title:"Frame"})
    }
    if(user==null&&self._passwd==self._passwd2){
      await AsyncStorage.setItem("User",self._user);
      await AsyncStorage.setItem("Password",self._passwd); 
    }
    console.warn(user + '  ' +psw);
  }
  render() {
    return(
       <Navigator
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}
          initialRoute={{ title: 'Login' }}
          renderScene={(route, navigator) =>
          {
            
            switch (route.title){
              case 'Frame':
                return (<Frame navigator={navigator}/>)
              default:
                this.navigator=navigator
                return(
                <View style={[{padding:70}]}>
                  <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: '100%', height: '20%'}} />
                  <Image source={require("./img/happy.png")} style={{width: '100%', height: '20%'}} /> 
                  <Text style={{fontSize:20}}>Login</Text>
                  <View style={{padding:20}}>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>帳號 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._user=text;}} ></TextInput>
                    </View>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>密碼 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd=text;}} password={true}></TextInput>
                    </View>
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>確認密碼 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd2=text;}} ></TextInput>
                    </View>
                  </View>
                  <Button title="登入" onPress={this.login.bind(this.login,this)} />
                </View>)
            }
            

            
          }}
      />
    )

    async()=>{AsyncStorage.getItem("User");}

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

