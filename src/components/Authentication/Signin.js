import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from '../Main/Main';
import Authentication from './Authentication';
import Info from '../Info/Info';
import Login from '../Main/Login';

class Signin extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'salmon'}}>
        <TextInput style={styles.input} placeholder="Nhập tài khoản" />
        <TextInput style={styles.input} placeholder="Nhập mật khẩu" />
        <TouchableOpacity
          style={styles.signinnow}
          onPress={() => this.props.navigation.push('Login')}>
          <Text style={styles.textnow}>ĐĂNG NHẬP NGAY</Text>
        </TouchableOpacity>
      </View>
    );;
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
  },
  signinnow: {
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  textnow: {
    fontSize: 20,
    color: '#fff',
  },
});
const RootStack =  createStackNavigator(
  {
    Home: {screen: Signin},
    Login: {screen: Login},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);;

export default createAppContainer(RootStack);
