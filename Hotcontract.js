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

export default class Hotcontract extends Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
        
        <View style={{flex:1,paddingTop:20,paddingLeft:40,paddingRight:40}}>  
        
          <View style={styles.centers}>
            <Text style={[{fontSize:20}]}>熱門合約</Text>
          </View>
          <View style={[styles.horizontal,{marginTop:60}]}> 
            <View style={{padding:10,flex:1,height:'100%'}}>
              <Button
                style={{align:'center',fontSize: 20,height:'100%', color: 'black',backgroundColor:'#4285f4',borderRadius:5}}>
                減肥
              </Button>
            </View>
            <View style={{padding:10,flex:1}}>
              <Button
                style={{ textAlign:'center',fontSize: 20,height:'100%', color: 'black',backgroundColor:'#ea4335',borderRadius:5}}>
                不抽煙
              </Button>
            </View>
          </View>
        




          <View style={[styles.horizontal]}> 
            
            <View style={{padding:10,flex:1}}>
              <Button
                style={{textAlign:'center',fontSize: 20,height:'100%', color: 'black',backgroundColor:'#34a853',borderRadius:5}}>
                準時聚會
              </Button>
            </View>

            <View style={{padding:10,flex:1}}>
              <Button
                style={{textAlign:'center', fontSize: 20,height:'100%', color: 'black',backgroundColor:'#fbbc05',borderRadius:5}}>
                期中平均
              </Button>
            </View>

            
          </View>


          <View style={[styles.horizontal]}> 

            <View style={{padding:10,flex:1}}>
              <Button
                style={{textAlign:'center',fontSize: 20,height:'100%', color: 'black',backgroundColor:'#34a853',borderRadius:5}}>
                一小時吃完10份雞排
              </Button>
            </View>

            <View style={{padding:10,flex:1}}>
              <Button
                style={{textAlign:'center', fontSize: 20,height:'100%', color: 'black',backgroundColor:'#fbbc05',borderRadius:5}}>
                一個月存2000元
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
  centers:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
});

