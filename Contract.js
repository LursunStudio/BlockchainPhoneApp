import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Picker,
} from 'react-native';
import RadioButton from 'radio-button-react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'



export default class Contract extends Component {
    state = {
        isDateTimePickerVisible: false
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date)
        this._hideDateTimePicker()
    }

    constructor(props) {
        super(props);
    }
    handleOnPress(value){
        this.setState({value:value});
    }
    render() {
        return(
            <View style={{flex:1,paddingTop:20,paddingLeft:40,paddingRight:40}}>  
                <View style={styles.horizontal}>         
                    <Text style={{fontSize:20}} > 公開合約　</Text>
                    </View>
                <Text style={{fontSize:20}}>健康</Text>
                    <View style={{padding:20}}>
                        <View style={styles.horizontal}>
                            <Text style={styles.textcenter}>發起人 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._user=text;}} >陳大牛</TextInput>
                        </View>
                        <View style={styles.horizontal}>
                            <Text style={styles.textcenter}>發起項目 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd=text;}} password={true}>減肥</TextInput>
                        </View>
                        <View style={styles.horizontal}>
                            <Text style={styles.textcenter}>目前體重 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd2=text;}} >100</TextInput>
                        </View>
                        <View style={styles.horizontal}>
                            <Text style={styles.textcenter}>目標體重 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd2=text;}} >95</TextInput>
                        </View>
                        <View style={styles.horizontal}>
                            <Text style={styles.textcenter}>押金 :</Text><TextInput style={{flex:1}} onChangeText={(text) => {this._passwd2=text;}} >100</TextInput>
                        </View>
                        <View style={styles.horizontal}>
                            <Text style={styles.textcenter}>任務結束日 :2017/06/30</Text>
                       
                    </View >
                    </View>                                      
                    
                   
                <View style={[styles.horizontal]}>
                    <View  style={{flex:1,padding:5}} >
                        <Button title="返回" onPress={()=>(this.props.navigator.pop())}/>
                    </View>
                    <View  style={{flex:1,padding:5}} >
                      <Button title="確認" onPress={()=>(this.props.navigator.pop())} />
                        {/*尚未寫好確認事件*/}
                    </View>
                </View>
             </View>
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
  },
  container:{
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

});

