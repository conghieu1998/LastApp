import React, {Component} from 'react';
import {Text, View,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class Info extends Component {
  static navigationOptions = {
    header: null,
  };
  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View />
          <Text style={styles.headerTitle}>Thông tin người dùng</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
            <Image source={require('../../../images/next.png')} style={styles.backIconStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập họ và tên"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Nhập địa chỉ"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Nhập số điện thoại"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.signInContainer}>
            <Text style={styles.signInTextStyle}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' ,position:'absolute'},
    header: { flex: 1, backgroundColor: 'salmon', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 5 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 15 },
    backIconStyle: { width: 25, height: 25 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: 'salmon',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20,fontSize:17
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: 'salmon',
        borderRadius: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});
