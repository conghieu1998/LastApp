import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Logout from '../Main/Logout';

class Signup extends Component {
  render() {
    const showAlert = () => {
      Alert.alert('Đăng ký thành công!');
    };
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
        <View>
          <TextInput style={styles.input} placeholder="Nhập họ tên" />
          <TextInput style={styles.input} placeholder="Nhập tên tài khoản" />
          <TextInput style={styles.input} placeholder="Nhập email" />
          <TextInput style={styles.input} placeholder="Nhập mật khẩu" />
          <TextInput style={styles.input} placeholder="Nhập lại mật khẩu" />
          <TextInput style={styles.input} placeholder="Nhập số điện thoại" />
          <TouchableOpacity style={styles.signinnow} onPress={showAlert}>
            <Text style={styles.textnow}>ĐĂNG KÝ NGAY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.control}>
          <TouchableOpacity
            style={styles.signin}
            onPress={() => this.props.navigation.pop()}>
            <Text style={styles.textin}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signup}>
            <Text style={styles.textup}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
  wrapper: {
    flex: 1,
    backgroundColor: 'salmon',
    justifyContent: 'space-between',
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
    color: 'gainsboro',
  },
  textup: {
    fontSize: 20,
    color: 'salmon',
  },
});

const RootStack = createStackNavigator(
  {
    Home: {screen: Signup},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
export default createAppContainer(RootStack);
