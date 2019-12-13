import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {Dimensionapp} from '../../../../unit/Dimensionapp';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {TextInput} from 'react-native-gesture-handler';
import Cart from '../Cart/Cart';

class Product extends Component {
  render() {
    console.log(this.props.navigation.getParam.e);
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
              source={require('../../../../../images/prd.jpg')}
              style={styles.productImageStyle}
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.titleContainer}>
              <Text style={styles.textBlack}>suong</Text>
              <Text style={styles.textHighlight}>165.000đ</Text>
              <Text style={styles.textSmoke}>500g/gói</Text>
            </View>
            <View style={styles.mart}>
              <Image
                style={styles.imgmart}
                source={require('../../../../../images/lotte.png')}
              />
              <Text style={styles.txtmart}>LotteMart</Text>
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
                <Text style={styles.txtinfos}>LotteMart</Text>
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

const styles = StyleSheet.create({
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
  titleContainer: {
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
    Home: Product,
    Cart: {screen: Cart},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(RootStack);
