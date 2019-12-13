import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Navigator,
} from 'react-native';
import Header from '../../Header';
import {Dimensionapp} from '../../../../unit/Dimensionapp';
import Product from '../Home/Product';

export default class Cuahang extends Component {
  openMenu() {
    const {onOpen} = this.props;
    onOpen();
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Header onOpen1={this.openMenu.bind(this)} />
        <Product />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingTop: 10,
  },
  mart: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRightColor: 'gray',
    marginTop: 10,
  },
  imgmart: {
    height: Dimensionapp.getHeight() / 5,
    width: Dimensionapp.getWidth() / 1.2,
  },
  txtmart: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
