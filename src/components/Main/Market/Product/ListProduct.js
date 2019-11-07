import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView,
    TouchableOpacity} from 'react-native';
import {Dimensionapp} from '../../../../unit/Dimensionapp'

export default class ListProduct extends Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'gainsboro'}}>
        <View style={styles.container}>
          <ScrollView style={styles.wrapper}>
            <View style={styles.header} >
                <Image style={styles.imgback} source={require('../../../../../images/back-salmon.png')}/>
                <Text style={styles.txtback}>Danh sách sản phẩm</Text>
                <View style={{width:40}} />
            </View>
            <View style={styles.prdContainer}>
                <Image style={styles.imgprd} source={require('../../../../../images/prd.jpg')}/>
                <View style={styles.infoprd}>
                <Text style={styles.txtmart}>LotteMart</Text>
                <Text style={styles.txtnameprd}>Sườn Kalbi</Text>
                <Text style={styles.txtprice}>165.500đ</Text>
                <Text style={styles.txttrl}>500g</Text>
                <TouchableOpacity>
                    <Text>Xem chi tiết</Text>
                </TouchableOpacity>
                </View>
                
            </View>
            <View style={styles.prdContainer}>
                <Image style={styles.imgprd} source={require('../../../../../images/prd.jpg')}/>
                <View style={styles.infoprd}>
                <Text style={styles.txtmart}>LotteMart</Text>
                <Text style={styles.txtnameprd}>Sườn Kalbi</Text>
                <Text style={styles.txtprice}>165.500đ</Text>
                <Text style={styles.txttrl}>500g</Text>
                <TouchableOpacity>
                    <Text>Xem chi tiết</Text>
                </TouchableOpacity>
                </View>
                
            </View>
            <View style={styles.prdContainer}>
                <Image style={styles.imgprd} source={require('../../../../../images/prd.jpg')}/>
                <View style={styles.infoprd}>
                <Text style={styles.txtmart}>LotteMart</Text>
                <Text style={styles.txtnameprd}>Sườn Kalbi</Text>
                <Text style={styles.txtprice}>165.500đ</Text>
                <Text style={styles.txttrl}>500g</Text>
                <TouchableOpacity>
                    <Text>Xem chi tiết</Text>
                </TouchableOpacity>
                </View>
                
            </View>
            <View style={styles.prdContainer}>
                <Image style={styles.imgprd} source={require('../../../../../images/prd.jpg')}/>
                <View style={styles.infoprd}>
                <Text style={styles.txtmart}>LotteMart</Text>
                <Text style={styles.txtnameprd}>Sườn Kalbi</Text>
                <Text style={styles.txtprice}>165.500đ</Text>
                <Text style={styles.txttrl}>500g</Text>
                <TouchableOpacity>
                    <Text>Xem chi tiết</Text>
                </TouchableOpacity>
                </View>
                
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:'gainsboro',
    padding: 10,
  },
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  header:{
      height:50,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  imgback:{
    width:40,height:40
  },
  txtback:{
      fontSize:25,
      color:'salmon'
  },
  prdContainer:{
    flexDirection:'row',padding:10,
    borderTopWidth:1,
    borderTopColor:'gray'
  },
  imgprd:{
      alignContent:'center',
      width: Dimensionapp.getWidth()/2,
      height: Dimensionapp.getHeight()/4
  },
  infoprd:{
      justifyContent:'space-around',padding:10
  },
  info:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  txtnameprd:{
      fontSize:20,
      color:'salmon',
      fontWeight:'bold'
  },
  txtprice:{
      fontSize:18,
      fontWeight:'bold'
  }

});
