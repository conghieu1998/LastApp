import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Header from '../../Header';
import {Dimensionapp} from '../../../../unit/Dimensionapp';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const url = 'http://localhost:8080/Market/images/product/';

class Nganhhang extends Component {
  openMenu() {
    const {onOpen} = this.props;
    onOpen();
  }
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      topProducts: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:8080/Market/')
      .then(res => res.json())
      .then(resJSON => {
        const {type, product} = resJSON;
        console.log(product);
        this.setState({types: type, topProducts: product});
      });
  }
  render() {
    const {types} = this.state;
    return (
      <View style={styles.wrapper}>
        <Header onOpen1={this.openMenu.bind(this)} />
        <ScrollView contentContainerStyle={styles.container}>
          {types.map(e => (
            <TouchableOpacity
              style={styles.type}
              onPress={() => this.props.navigation.navigate('Goto', {e})}
              key={e.id}>
              <Image
                resizeMode="center"
                style={styles.imgtype}
                source={{uri: `${url}${e.image[0]}`}}
              />
              <Text style={styles.txttype}>{e.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

class Products extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      topProducts: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:8080/Market/')
      .then(res => res.json())
      .then(resJSON => {
        const {type, product} = resJSON;
        console.log(product);
        this.setState({types: type, topProducts: product});
      });
  }
  render() {
    const {topProducts} = this.state;
    return (
      <View style={styles.container1}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Image
                style={styles.backStyle}
                source={require('../../../../../images/back-salmon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 9}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sản phẩm theo loại</Text>
          </View>
          <ScrollView contentContainerStyle={styles.body}>
            {topProducts.map(e => (
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() => this.props.navigation.navigate('Goto', {e})}
                key={e.id}>
                <Image
                  style={styles.productImage}
                  source={{uri: `${url}${e.image[0]}`}}
                />
                <Text style={styles.prdName}>{e.name}</Text>
                <Text style={styles.prdPrice}>{e.price}đ</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const widthprd = (Dimensionapp.getWidth() - 20) / 2;
const heightprd = widthprd;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  type: {
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 5,
  },
  imgtype: {
    width: Dimensionapp.getWidth() / 2.5,
    height: Dimensionapp.getHeight() / 5.5,
  },
  txttype: {
    marginVertical: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  container1: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  cartStyle: {
    width: 35,
    height: 35,
  },
  backStyle: {
    width: 35,
    height: 35,
  },
});
const RootStack = createStackNavigator(
  {
    Home: Nganhhang,
    Goto: {screen: Products},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(RootStack);
