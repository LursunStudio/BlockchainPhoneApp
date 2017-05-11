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
import Build from './Buildacontract.js';
import Myaccount from './Myaccount.js';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
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
              case 'Buildacontract':
                return (<Build navigator={navigator}/>)
              case 'Login':
                return (<Login navigator={navigator}/>)
              case 'Myaccount':
                return (<Myaccount navigator={navigator}/>)
            }
          }}
      />
      
    </DrawerLayoutAndroid>

            {/* Rest of the app comes ABOVE the action button component !*/}
            <ActionButton buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>

        </DrawerLayoutAndroid>
       
    )
  }
}

        

 const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 80,
    height: 22,
    color: 'white',
  },
});
 

