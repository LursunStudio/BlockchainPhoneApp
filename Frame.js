import React, { Component } from 'react';
import {
  Text,
  DrawerLayoutAndroid,
  View
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components'
import Main from './Main'
import Login from './Login'
import Build from './Buildacontract'
import Myaccount from './Myaccount'
//增加頁面
// Page1 是範例

export default class Frame extends Component {
    constructor(props) {
        super(props);
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
                <View> 
                    <Text style={{textAlign:'center',fontSize: 20, color: 'green',}}>健康</Text>
                    <Text style={{textAlign:'center',fontSize: 20, color: 'green',}}>生活</Text>
                    <Text style={{textAlign:'center',fontSize: 20, color: 'green',}}>娛樂</Text>
                    <Text style={{textAlign:'center',fontSize: 20, color: 'green',}}>教育</Text>
                </View>  
                )}} >  
                    <Navigator
                    configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                    initialRoute={{ title: 'Myaccount' }}
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
                        }
                        
                    }}
                    />
                </DrawerLayoutAndroid>
            </DrawerLayoutAndroid>

        )
  }
}
