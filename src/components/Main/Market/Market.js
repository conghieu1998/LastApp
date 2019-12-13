import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Cuahang from './Cuahang/Cuahang';
import Nganhhang from './Nganhhang/Nganhhang';
import Taikhoan from './Taikhoan/Taikhoan';
import {Dimensionapp} from '../../../unit/Dimensionapp';
import Header from '../Header';

export default class Market extends Component {
  openMenu() {
    const {open} = this.props;
    open();
  }
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'cuahang', types: [], topProducts: []};
  }
  render() {
    const {types, selectedTab, topProducts} = this.state;
    return (
      <View style={{flex: 1}}>
        {/* <View style={styles.topbar}>
                    <Header onOpen={this.openMenu.bind(this)}/>
                </View> */}
        <TabNavigator tabBarStyle={{height: 55}}>
          <TabNavigator.Item
            titleStyle={{fontSize: 15}}
            selected={selectedTab === 'home'}
            title="Khám phá"
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../../../../images/khampha.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.image}
                source={require('../../../../images/khampha-select.png')}
              />
            )}
            onPress={() => this.setState({selectedTab: 'home'})}>
            <Home onOpen={this.openMenu.bind(this)} />
          </TabNavigator.Item>
          <TabNavigator.Item
            titleStyle={{fontSize: 15}}
            selected={selectedTab === 'cuahang'}
            title="Sản phẩm"
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../../../../images/store.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.image}
                source={require('../../../../images/store-select.png')}
              />
            )}
            onPress={() => this.setState({selectedTab: 'cuahang'})}>
            <Cuahang onOpen={this.openMenu.bind(this)} />
          </TabNavigator.Item>
          <TabNavigator.Item
            titleStyle={{fontSize: 15}}
            selected={selectedTab === 'nganhhang'}
            title="Ngành hàng"
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../../../../images/fish.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.image}
                source={require('../../../../images/fish-select.png')}
              />
            )}
            onPress={() => this.setState({selectedTab: 'nganhhang'})}>
            <Nganhhang onOpen={this.openMenu.bind(this)} />
          </TabNavigator.Item>
          <TabNavigator.Item
            titleStyle={{fontSize: 15}}
            selected={selectedTab === 'cart'}
            title="Giỏ hàng"
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../../../../images/cart.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image source={require('../../../../images/cart-select.png')} />
            )}
            badgeText="1"
            onPress={() => this.setState({selectedTab: 'cart'})}>
            <Cart />
          </TabNavigator.Item>
          <TabNavigator.Item
            titleStyle={{fontSize: 15}}
            selected={selectedTab === 'user'}
            title="Giao hàng"
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../../../../images/truck-black.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.image}
                source={require('../../../../images/icons8-truck-100.png')}
              />
            )}
            onPress={() => this.setState({selectedTab: 'user'})}>
            <Taikhoan />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 32,
    width: 32,
  },
  topbar: {
    height: Dimensionapp.getHeight() / 8,
    backgroundColor: 'salmon',
  },
});
