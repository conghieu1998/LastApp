import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Dimensionapp} from '../../unit/Dimensionapp';

export default class Header extends Component {
  render() {
    return (
      <View style={{justifyContent: 'space-around', backgroundColor: 'salmon'}}>
        <View style={styles.top}>
          <TouchableOpacity onPress={this.props.onOpen1}>
            <Image
              style={styles.imagetop}
              source={require('../../../images/icon-menu.png')}
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
        <View style={styles.viewinput}>
          <TextInput
            maxLength={50}
            style={styles.input}
            placeholder="Bạn cần mua gì cho hôm nay"
            placeholderTextColor={'black'}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    textAlign: 'center',
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    height: Dimensionapp.getHeight() / 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  viewinput: {
    padding: 10,
  },
});
