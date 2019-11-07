import React, { Component } from 'react'
import { Text, View,SafeAreaView } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Main from './src/components/Main/Main'
import Authentication from './src/components/Authentication/Authentication'
import ListProduct from './src/components/Main/Market/Product/ListProduct'
import Order from './src/components/Order/Order'
import Info from './src/components/Info/Info'
import Product from './src/components/Main/Market/Product/Product'
import Viewcart from './src/components/Main/Market/Cart/Viewcart'
import Test from './src/components/Test'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Main/>
        {/* <Authentication/> */}
        {/* <Test/> */}
        {/* <ListProduct/> */}
        {/* <Order/> */}
        {/* <Info/> */}
        {/* <Product/> */}
        {/* <Viewcart/> */}
        {/* <Test/> */}
      </SafeAreaView>
    )
  }
}
