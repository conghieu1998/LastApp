import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Collection from './Collection';
import Product from './Product';
import Header from '../../Header';

export default class Home extends Component {
  openMenu () {
    const {onOpen} = this.props;
    onOpen ();
  }
  render () {
    const {types, products} = this.props;
    return (
      <View style={{flex:1}}>
        <View style={styles.topbar}>
          <Header onOpen1={this.openMenu.bind (this)} />
        </View>
        <ScrollView style={styles.home}>
          <Collection />
          <Product />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  home: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
});
