import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {Dimensionapp} from '../../unit/Dimensionapp';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Signin from './Signin';
import Signup from './Signup';
import Main from '../Main/Main';

export default class Authentication extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {isSigin: true};
  }
  SignIn() {
    this.setState({isSigin: true});
  }
  SignUp() {
    this.setState({isSigin: false});
  }
  render() {
    const signinjsx = <Signin />;
    const signupjsx = <Signup />;
    const {isSigin} = this.state;
    const main = this.state.isSigin ? signinjsx : signupjsx;
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
        {main}
        <View style={styles.control}>
          <TouchableOpacity
            onPress={() => {
              this.SignIn();
            }}
            style={styles.signin}>
            <Text style={isSigin ? styles.textin : styles.textup}>
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.SignUp();
            }}
            style={styles.signup}>
            <Text style={!isSigin ? styles.textin : styles.textup}>
              ĐĂNG KÝ
            </Text>
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
    backgroundColor: 'red',
  },
  textnow: {
    fontSize: 20,
    color: '#fff',
  },
});
