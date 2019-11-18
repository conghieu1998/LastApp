import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Info from '../Info/Info';

class Login extends Component {
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
          <View style={styles.body}>
            <View style={{padding: 10, justifyContent: 'center'}}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  justifyContent: 'center',
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
                onPress={() => this.props.navigation.push('Goto')}>
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
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    justifyContent: 'center',
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
});

const RootStack = createStackNavigator(
  {
    Home: Login,
    Goto: {screen: Info},
  },

  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(RootStack);
