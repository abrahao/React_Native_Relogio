import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {date: new Date()}

    setInterval(
      () => {this.setState({date: new Date()})},
      1000
    );
  }
    render(){
    return(
      <Text style={styles.relogio}> Hora: {this.state.date.toLocaleTimeString()} </Text>
    )
  }
}

export default class App extends Component{ 
  render(){
  return (
    <View style={styles.container}>
      <Clock/>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81DAF5'
  },
  relogio: {
    height: 55,
    backgroundColor: '#D8F781',
    fontSize: 40,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#0404B4'
  }
})