import React, { Component } from 'react';
import {
  Text,
  DrawerLayoutAndroid,
  View,
  AppRegistry,
  Alert,

  StyleSheet
} from 'react-native';
import Button from 'react-native-button';
import { Navigator } from 'react-native-deprecated-custom-components'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from './Main'
import Login from './Login'
import Build from './Buildacontract'
import Myaccount from './Myaccount'
import Hotcontract from './Hotcontract'
import Newpage from './Newpage'
import Contract from './Contract'
import Message from './Message'


//增加頁面
// Page1 是範例

export default class Frame extends Component {
    constructor(props) {
        super(props);
    }
     confirm(self){
        self.props.navigator.push({title:"Build"})
    }
    tip(self) {
        self.props.navigator.push({title:'Build'})
     Alert.alert('提示', '將要訪問建立合約頁面', [
         {text: '取消',},
         {text: '確認',
         onPress: function(self) {             
            self.props.navigator.push({title:'Build'})
         }
       },
     ])
   }
    render() {
        return (
                <DrawerLayoutAndroid
                drawerWidth={200}  
                drawerPosition={DrawerLayoutAndroid.positions.Left}  
                renderNavigationView={() =>{return(
                //增加右滑東西
                <View> 
                    <Button style={{marginTop: 6,textAlign:'center', fontSize: 20,width:100,height:100, color: 'black',backgroundColor:'#ff8888',borderRadius:50}}>相片</Button>
                    <Button style={{marginTop: 6,textAlign:'center', fontSize: 20,height:40, color: 'black',backgroundColor:'#ffffff',borderRadius:0}}>健康</Button>
                    <Button style={{marginTop: 6,textAlign:'center', fontSize: 20,height:40, color: 'black',backgroundColor:'#ffffff',borderRadius:0}}>生活</Button>
                    <Button style={{marginTop: 6,textAlign:'center', fontSize: 20,height:40, color: 'black',backgroundColor:'#ffffff',borderRadius:0}}>娛樂</Button>
                    <Button style={{marginTop: 6,textAlign:'center', fontSize: 20,height:40, color: 'black',backgroundColor:'#ffffff',borderRadius:0}}>教育</Button>
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
                            return (<Main navigator={navigator} />)
                        case 'Login':
                            return (<Login navigator={navigator} />)
                        case 'Build':
                            return (<Build navigator={navigator} />)
                        case 'Myaccount':
                            return (<Myaccount navigator={navigator} />)
                        case 'Hotcontract':
                            return (<Hotcontract navigator={navigator} />)
                        case'Newpage':
                            return(<Newpage navigator={navigator}/>)
                        case 'Contract':
                            return (<Contract navigator={navigator} />)
                        case 'Message':
                            return (<Message navigator={navigator} />)
                        }
                        
                    }}
                    />
                    <ActionButton onPress={this.tip.bind(this.tip,this)} buttonColor="rgba(231,76,60,1)">       
        </ActionButton>
                </DrawerLayoutAndroid>
          

        )
  }
   
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});