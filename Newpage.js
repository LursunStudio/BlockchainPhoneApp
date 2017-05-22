import React, { Component } from 'react';
import Button from 'react-native-button';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Newpage extends Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
        
        <View style={{flex:1,paddingTop:20,paddingLeft:40,paddingRight:40}}>  
          <View style={styles.Left}>
            <Text style={[{fontSize:20}]}>目前體重：</Text>
          </View>
          <View style={[styles.horizontal,{marginTop:60}]}> 
            <View style={{padding:10,height:'100%'}}>
             <Text style={[{fontSize:20}]}>目標體重：</Text> 
            </View>
            <View style={{padding:10,flex:1}}>
              
            </View>
          </View>
        




          <View style={[styles.horizontal]}> 
            
            <View style={{padding:10,flex:1}}>
              
            </View>

            <View style={{padding:10,flex:1}}>
              
            </View>

            
          </View>


          <View style={[styles.horizontal]}> 
            <View style={{padding:10,flex:1}}>
              
            </View>

            <View style={{padding:10,flex:1}}>
              
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

