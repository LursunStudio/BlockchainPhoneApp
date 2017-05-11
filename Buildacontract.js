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
  Picker,
  AsyncStorage

} from 'react-native';
import Frame from './Frame.js';
import RadioButton from 'radio-button-react-native';




export default class Build extends Component {
  return(self){
    self.props.navigator.push({title:"Main"})
  }
  static propTypes = {
    startY: React.PropTypes.number.isRequired,
    startM: React.PropTypes.number.isRequired,
    startD: React.PropTypes.number.isRequired,
    endY: React.PropTypes.number.isRequired,
    pickerKey: React.PropTypes.string,
    onCallback: React.PropTypes.func.isRequired,

  };
  constructor(props) {
    super(props);
    this.state = {
            value: 0
        }
    let years = [];
    for(let i = this.props.startY;i <= this.props.endY; i++){
      years.push(i)
    }
     let months = [];
    for(let i = this.props.startM;i <= 12; i++){
      months.push(i)
    }
    let days = [];
    let Tdays = this.getDays(new Date(this.props.startY + '/' + this.props.startM));
    for(let i = this.props.startD;i <= Tdays; i++){
      days.push(i)
    }
    this.state = {
      years,
      months,
      days,
      selY:this.props.startY,
      selM:this.props.startM,
      selD:this.props.startD
    }
  }
  getDays(date){
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.getDate();
  }
handleOnPress(value){
    this.setState({value:value})
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
                      <View style={styles.container}>
                      <View style={styles.years}>
                      <Picker
            selectedValue={this.state.selY}
            onValueChange={(v) => {
              // 当前选择时间
              let selDate = new Date(v + '/' + this.state.selM);
              // 起始月份,起始第几天,选择月份,选择第几天
              let i = 1,j = 1,selM = this.state.selM,selD = this.state.selD;
              // 当前年份 <= 起始年份，如果小于起始年份，重置数据
              if(v <= this.props.startY){
                selDate = new Date(this.props.startY+'/'+this.props.startM+'/'+this.props.startD);
                i = this.props.startM;
                j = this.props.startD;
                selM = this.props.startM;
                selD = this.props.startD;
              }
              // 生成月份数组
              let months = [];
              for(;i <= 12; i++){
                months.push(i);
              }
              // 获取选择月份总共天数
              let Tdays = this.getDays(selDate);
              // 生成天数数组
              let days = [];
              for(;j <= Tdays; j++){
                days.push(j);
              }
              // 设置当前选中时间，对应月份，和天数进行更新
              this.setState({
                selY: v,
                selM,
                selD,
                months,
                days
              });
              // 返回当前选择的时间
              this.props.onCallback && this.props.onCallback({
                key:this.props.pickerKey,
                selY:v,
                selM,
                selD
              })
            }}>
            {
              this.state.years.map((year)=>{
                return <Picker.Item label={'' + year} value={year} key={year}/>
              })
            }
          </Picker>
          </View>
                    <View style={styles.months}>
                                <Picker
            selectedValue={this.state.selM}
            onValueChange={(v) => {
              // 已选年份，当前选择月份，已选天数
              let selY = this.state.selY,selM = v ,selD = this.state.selD;
              // 开始时间
              let startDate = new Date(this.props.startY+'/'+this.props.startM);
              // 当前选择时间
              let selDate = new Date(selY + '/' + selM);
              // 选择时间小于开始时间，则重置选择时间
              let i = 1;
              if(selDate <= startDate) {
                selDate = startDate;
                i = this.props.startD;
                selD = this.props.startD;
              }
              // 获取当前月份对应总共天数
              let Tdays = this.getDays(selDate);
              let days = [];
              for(;i <= Tdays; i++){
                days.push(i)
              }
              // 设置选择时间
              this.setState({
                selM: v,
                selD,
                days
              });
              // 返回选择时间
              this.props.onCallback && this.props.onCallback({
                key:this.props.pickerKey,
                selY,
                selM:v,
                selD,
              })
            }}
          >
            {
              this.state.months.map((month)=>{
                return <Picker.Item label={'' + month} value={month} key={month}/>
              })
            }
          </Picker>
          </View>
                     <View style={styles.days}>
                    <Picker
            selectedValue={this.state.selD}
            onValueChange={(v) => {
              this.setState({selD: v});
              let date = this.state.selY+ '/' + this.state.selM + '/' + v;
              this.props.onCallback && this.props.onCallback({
                key:this.props.pickerKey,
                selY:this.state.selY,
                selM:this.state.selM,
                selD:v
              })
            }}>
            {
              this.state.days.map((day)=>{
                return <Picker.Item label={'' + day} value={day} key={day}/>
              })
            }
          </Picker>
          </View >
          </View >
                    </View>                                      
                    <View style={styles.horizontal}>
                      <Text style={styles.textcenter}>請選擇 :</Text>
                    <RadioButton 
                    currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}/>
                    <Text style={styles.textcenter}> 公開　</Text>
                    <RadioButton 
                    currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}/>
                    <Text style={styles.textcenter}> 私人　</Text>
                    </View>
                    
                    
                  </View>
                  <View style={[styles.horizontal]}>
                    <View  style={{flex:1,padding:5}} >
                      <Button title="返回" onPress={this.return.bind(this.return,this)}/>
                    </View>
                    <View  style={{flex:1,padding:5}} >
                      <Button title="確認"/>
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
  },
  container:{
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  years:{
    flex:2,
  },
  months:{
    flex:1
  },
  days:{
    flex:1
  }
});

