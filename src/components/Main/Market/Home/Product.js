import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Dimensionapp} from '../../../../unit/Dimensionapp';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DetailsProduct from '../Product/Product';

class Products extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sản phẩm độc quyền</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => this.props.navigation.push('Goto')}>
            <Image
              style={styles.productImage}
              source={require('../../../../../images/prd.jpg')}
            />
            <Text style={styles.prdName}>Sườn Kalbi</Text>
            <Text style={styles.prdPrice}>165.500đ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productContainer}>
            <Image
              style={styles.productImage}
              source={require('../../../../../images/prd.jpg')}
            />
            <Text style={styles.prdName}>Sườn Kalbi</Text>
            <Text style={styles.prdPrice}>165.500đ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productContainer}>
            <Image
              style={styles.productImage}
              source={require('../../../../../images/prd.jpg')}
            />
            <Text style={styles.prdName}>Sườn Kalbi</Text>
            <Text style={styles.prdPrice}>165.500đ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productContainer}>
            <Image
              style={styles.productImage}
              source={require('../../../../../images/prd.jpg')}
            />
            <Text style={styles.prdName}>Sườn Kalbi</Text>
            <Text style={styles.prdPrice}>165.500đ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const widthprd = (Dimensionapp.getWidth() - 20) / 2;
const heightprd = widthprd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  title: {
    color: 'salmon',
    fontSize: 25,
  },
  productContainer: {
    width: (Dimensionapp.getWidth() - 20) / 2,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  productImage: {
    width: (Dimensionapp.getWidth() - 30) / 2,
    height: heightprd,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  prdName: {
    marginVertical: 5,
    color: 'salmon',
    paddingLeft: 10,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 20,
  },
  prdPrice: {
    marginBottom: 5,
    fontSize: 20,
    paddingLeft: 10,
    fontFamily: 'Avenir',
  },
});
const RootStack = createStackNavigator(
  {
    Home: Products,
    Goto: {screen: DetailsProduct},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(RootStack);
