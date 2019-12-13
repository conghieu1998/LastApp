import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import {Dimensionapp} from '../../../../unit/Dimensionapp';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import global from '../../../Global/global';
import NumberFormat from 'react-number-format';

const url = 'http://localhost:8080/Market/images/product/';

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
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sản phẩm độc quyền</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.body}>
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
              <NumberFormat
                value={e.price}
                displayType={'text'}
                thousandSeparator={true}
                renderText={value => (
                  <Text style={styles.prdPrice}>{value}đ</Text>
                )}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
class detailProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topProducts: [],
      cartArray: [],
    };
    global.addProductToCart = this.addProductToCart.bind(this);
  }
  addProductToCarts(product) {
    this.setState({cartArray: this.state.cartArray.concat(product)});
  }
  addProductToCart() {
    const {product} = this.props;
    global.addProductToCart(product);
  }
  cart() {
    this.addProductToCart.bind(this);
    alert(JSON.stringify(this.state.cartArray.length));
  }
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.cardStyle}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Image
                style={styles.backStyle}
                source={require('../../../../../images/back-salmon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Alert.alert('Thông báo', 'Thêm vào giỏ hàng thành công', [
                  {
                    text: 'Tiếp tục mua hàng',
                    onPress: () => this.props.navigation.pop(),
                  },
                  {
                    text: 'Ok',
                    onPress: () => this.cart(),
                  },
                ])
              }>
              <Image
                style={styles.cartStyle}
                source={require('../../../../../images/cart-select.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: `${url}${this.props.navigation.state.params.e.image[0]}`,
              }}
              style={styles.productImageStyle}
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.titleContainer1}>
              <Text style={styles.textBlack}>
                {this.props.navigation.state.params.e.name}
              </Text>
              <NumberFormat
                value={this.props.navigation.state.params.e.price}
                displayType={'text'}
                thousandSeparator={true}
                renderText={value => (
                  <Text style={styles.textHighlight}>{value}đ</Text>
                )}
              />
              <Text style={styles.textSmoke}>
                {this.props.navigation.state.params.e.info}
              </Text>
            </View>
            <View style={styles.mart}>
              <Image
                resizeMode="center"
                style={styles.imgmart}
                source={{
                  uri: `${url}${
                    this.props.navigation.state.params.e.imageMarket[0]
                  }`,
                }}
              />
              <Text style={styles.txtmart}>
                {this.props.navigation.state.params.e.nameMarket}
              </Text>
            </View>
            <View style={styles.info}>
              <View style={styles.infos}>
                <Text style={styles.txtinfo}>Giờ giao trong ngày</Text>
                <Text style={styles.txtinfos}>Sáng 9h-11h / Chiều 3h-5h</Text>
              </View>
              <View style={styles.infos}>
                <Text style={styles.txtinfo}>Cần đặt trước</Text>
                <Text style={styles.txtinfos}>1 giờ</Text>
              </View>
              <View style={styles.infos}>
                <Text style={styles.txtinfo}>Nhãn hiệu</Text>
                <Text style={styles.txtinfos}>
                  {this.props.navigation.state.params.e.nameMarket}
                </Text>
              </View>
              <View style={styles.infos}>
                <Text style={styles.txtinfo}>Giá hiện tại</Text>
                <Text style={styles.txtinfos}>Bằng giá cửa hàng</Text>
              </View>
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.descStyle}>
                Ghi chú: Sản phẩm thực tế có thể hơi khác so với hình ảnh hiển
                thị.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  wrapper: {
    flex: 1,
    backgroundColor: '#D6D6D6',
  },
  cardStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
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
  productStyle: {
    width: Dimensionapp.getWidth() / 2,
    height: Dimensionapp.getWidth() / 2,
  },
  footer: {
    flex: 6,
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textMain: {},
  textBlack: {
    fontFamily: 'Avenir',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3F3F46',
  },
  textSmoke: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#9A9A9A',
  },
  textHighlight: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: 'salmon',
    fontWeight: 'bold',
  },
  titleContainer1: {
    padding: 20,
    alignItems: 'center',
  },
  descContainer: {
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  descStyle: {
    color: '#AFAFAF',
  },
  linkStyle: {
    color: '#7D59C8',
  },
  productImageStyle: {
    width: Dimensionapp.getWidth() - 50,
    height: Dimensionapp.getHeight() / 4,
  },
  mainRight: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingLeft: 20,
  },
  txtColor: {
    color: '#C21C70',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtMaterial: {
    color: '#C21C70',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  info: {
    padding: 20,
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  txtinfo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtinfos: {
    color: 'salmon',
    fontWeight: 'bold',
  },
  mart: {
    padding: 20,
    borderColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  imgmart: {
    height: 60,
    width: 60,
  },
  txtmart: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
const RootStack = createStackNavigator(
  {
    Home: Products,
    Goto: {screen: detailProduct},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(RootStack);
