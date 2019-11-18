import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from '../Main/Main';
import Authentication from './Authentication';
import Info from '../Info/Info';
import Login from '../Main/Login';
import Signup from './Signup';

class Signin extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <TouchableOpacity
            onPress={this.props.onOpen}
            onPress={() => this.props.navigation.pop()}>
            <Image
              style={styles.imagetop}
              source={require('../../../images/back.png')}
            />
          </TouchableOpacity>
          <View style={{}}>
            <Text style={styles.texttop}>Market Online</Text>
          </View>
          <Image
            style={styles.imagetop}
            source={require('../../../images/icon.png')}
          />
        </View>
        <View style={{flex: 1, backgroundColor: 'salmon'}}>
          <TextInput style={styles.input} placeholder="Nhập tài khoản" />
          <TextInput style={styles.input} placeholder="Nhập mật khẩu" />
          <TouchableOpacity
            style={styles.signinnow}
            onPress={() => this.props.navigation.push('Login')}>
            <Text style={styles.textnow}>ĐĂNG NHẬP NGAY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.control}>
          <TouchableOpacity style={styles.signin}>
            <Text style={styles.textin}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signup}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.textup}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'salmon',
    justifyContent: 'space-between',
  },
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
  top: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  imagetop: {
    height: 40,
    width: 40,
  },
  texttop: {
    fontSize: 30,
    color: '#fff',
  },
  control: {
    flexDirection: 'row',
  },
  signin: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 25,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 3,
  },
  signup: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 25,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 3,
  },
  textin: {
    fontSize: 20,
    color: 'salmon',
  },
  textup: {
    fontSize: 20,
    color: 'gainsboro',
  },
});
const RootStack = createStackNavigator(
  {
    Home: {screen: Signin},
    Login: {screen: Login},
    Signup: {screen: Signup},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(RootStack);
