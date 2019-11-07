import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

export default class Signup extends Component {

    render() {
    const showAlert = () => {
      Alert.alert('Đăng ký thành công!');;
    };;
    return (
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