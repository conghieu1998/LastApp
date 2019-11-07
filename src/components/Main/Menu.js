import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Logout from './Logout';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Info from '../Info/Info';
import Authentication from '../Authentication/Authentication';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'salmon'}}>
        <View style={styles.body}>
          <View style={{padding: 10}}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
              source={require('../../../images/hieu.jpg')}
            />
            <Text style={styles.text}>Bạch Công Hiếu</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.btnSignin}>
              <Text style={styles.btnTxtSign}>Thông tin đơn hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSignin}
              onPress={() => this.props.navigation.push('Info')}>
              <Text style={styles.btnTxtSign}>Thông tin người dùng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSignin}
              onPress={() => this.props.navigation.pop()}>
              <Text style={styles.btnTxtSign}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
          <View />
        </View>
      </View>
    );
  }
}

class Menu extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {isLogin: false};
  }

  render() {
    const logout = (
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.push('Login')}>
          <Text style={styles.btnTxt}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    );
    const login = Login;
    const main = this.state.isLogin ? login : logout;
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageInfo}
          source={require('../../../images/userinfo.png')}
        />
        {main}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    borderRightWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
  },
  imageInfo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  btn: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  btnTxt: {
    color: 'salmon',
    fontSize: 20,
  },
  btnSignin: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  btnTxtSign: {
    color: 'salmon',
    fontSize: 16,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 17,
  },
});

// const StackMenu = createStackNavigator({})
const RootStack = createStackNavigator({
    Home: Menu,
    Login: {screen: Authentication},
    Info: Info,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(RootStack);
