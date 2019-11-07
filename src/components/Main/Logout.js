import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Authentication from '../Authentication/Authentication';
import Login from './Login'

class Logout extends Component {
  static navigationOptions = {
    header: null,
  };
  render () {
    return (
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.btnTxt}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
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
});

const RootStack =createStackNavigator({
    Home: Logout,
    
})

export default createAppContainer(RootStack);
