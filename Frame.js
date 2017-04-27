import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToolbarAndroid,
  Button,
  Navigator,
  DrawerLayoutAndroid,
  AsyncStorage,
  TouchableHighlight

} from 'react-native';

//增加頁面
// Page1 是範例
import Login from './Login.js';
import Main from './Main.js';
import Page1 from './Page1.js';
import Hotcontract from './Hotcontract.js';
export default class Frame extends Component {
  
  constructor(props) {
    super(props);
  
  }
  onback(){
    const {navigator}=this.props;
    navigator.pop()
  }
  render() {
    return (
        <DrawerLayoutAndroid
        drawerWidth={200}  
        drawerPosition={DrawerLayoutAndroid.positions.Right}  
        renderNavigationView={() =>{return(
          //增加左滑東西
          <View > 
            <Text>123</Text>
          </View>  

        )}}>
        <DrawerLayoutAndroid
        drawerWidth={200}  
        drawerPosition={DrawerLayoutAndroid.positions.Left}  
        renderNavigationView={() =>{return(
          //增加右滑東西
          <View > 
            <Text style={{textAlign:'center',fontSize: 20, color: 'green',}}>健康</Text>
            <Text style={{textAlign:'center',fontSize: 20, color: 'green',}}>生活</Text>
            <Text style={{textAlign:'center',fontSize: 20, color: 'green',}}>娛樂</Text>
            <Text style={{textAlign:'center',fontSize: 20, color: 'green',}}>教育</Text>
          </View>  

        )}} >  
       
        <Navigator
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          initialRoute={{ title: 'Main' }}
          renderScene={(route, navigator) =>
          {
            switch (route.title){
              //增加頁面的地方
              case 'Main':
                return (<Main navigator={navigator}/>)
              case 'Page1'://範本
                return (<Page1 navigator={navigator}/>)
              case 'Hotcontract':
                return (<Hotcontract navigator={navigator}/>)  
              case 'buildacontract':
                return (<buildacontract navigator={navigator}/>)
            }
          }}
      />
    </DrawerLayoutAndroid>
        </DrawerLayoutAndroid>
       
    )
  }
}

        


const styles = StyleSheet.create({

});

