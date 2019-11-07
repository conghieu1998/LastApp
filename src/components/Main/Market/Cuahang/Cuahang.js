import React, {Component} from 'react';
import {Text, View,TouchableOpacity,Image,StyleSheet,ScrollView} from 'react-native';
import Header from '../../Header';
import {Dimensionapp} from '../../../../unit/Dimensionapp'

export default class Cuahang extends Component {
  openMenu () {
    const {onOpen} = this.props;
    onOpen ();
  }
  render () {
    return (
      <View style={styles.wrapper}>
        <Header onOpen1={this.openMenu.bind (this)} />
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.mart}>
              <Image style={styles.imgmart} source={require('../../../../../images/lotte.png')}/>
              <Text style={styles.txtmart}>LotteMart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mart}>
              <Image style={styles.imgmart} source={require('../../../../../images/lotte.png')}/>
              <Text style={styles.txtmart}>LotteMart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mart}>
              <Image style={styles.imgmart} source={require('../../../../../images/lotte.png')}/>
              <Text style={styles.txtmart}>LotteMart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mart}>
              <Image style={styles.imgmart} source={require('../../../../../images/lotte.png')}/>
              <Text style={styles.txtmart}>LotteMart</Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
    paddingTop:10,
  },
  mart:{
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderRightColor:'gray',
    marginTop:10
  },
  imgmart:{
    height:Dimensionapp.getHeight()/5,
    width: Dimensionapp.getWidth()/1.2
  },
  txtmart:{
    fontSize:25,
    fontWeight:'bold'
  }
})
