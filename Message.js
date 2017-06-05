import React, { Component } from 'react';
//import Button from 'react-native-button';
import {
    Text,
    View,
    StyleSheet, 
  TextInput,
  Button,
  Picker, 
} from 'react-native';

export default class Message extends Component {
    constructor(props) {
        super(props);
    }
      message(self){
        self.props.navigator.push({title:"Contract"})
    }
    render() {
        return (
           <View style={[styles.horizontal]}>
                <Text >發起人 :</Text>
                <View  style={{flex:1,padding:5}} >
                        <Button title="返回" onPress={this.message.bind(this.message,this)}/>
        </View>
           </View>
           
        );
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
  },
  container:{
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

});
