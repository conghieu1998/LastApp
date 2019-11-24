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

export default class Viewcart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fee: 495000,
      feeShip: 20000,
    };
  }
  render() {
    const showAlert = () => {
      Alert.alert('Thông báo', 'Bạn có muốn thông báo không?', [
        {
          text: `Thanh toán`,
          onPress: () => {
            Alert.alert(`Thông báo`, `Thanh toán thành công`, [{text: `Ok`}]);
          },
        },
        {text: 'Huỷ'},
      ]);
    };
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.headertop}>
            <View />
            <Text style={styles.txtheader}>Giỏ hàng</Text>
            <TouchableOpacity>
              <Image
                style={styles.imgheader}
                source={require('../../../../../images/delete-white.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerbottom}>
            <Text>Giao sớm nhất</Text>
            <Text>Ngày mai, 9h-11h</Text>
          </View>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.product}>
            <Image
              style={styles.imgprd}
              source={require('../../../../../images/prd.jpg')}
            />
            <View style={{marginTop: 15}}>
              <Text style={styles.txtnameprd}>Sườn Kalbi</Text>
              <Text style={styles.txtquaility}>1(500g/gói)</Text>
            </View>
            <Text style={styles.txtprice}>165.000đ</Text>
          </View>
          <View style={styles.product}>
            <Image
              style={styles.imgprd}
              source={require('../../../../../images/prd.jpg')}
            />
            <View style={{marginTop: 15}}>
              <Text style={styles.txtnameprd}>Sườn Kalbi</Text>
              <Text style={styles.txtquaility}>1(500g/gói)</Text>
            </View>
            <Text style={styles.txtprice}>165.000đ</Text>
          </View>
          <View style={styles.product}>
            <Image
              style={styles.imgprd}
              source={require('../../../../../images/prd.jpg')}
            />
            <View style={{marginTop: 15}}>
              <Text style={styles.txtnameprd}>Sườn Kalbi</Text>
              <Text style={styles.txtquaility}>1(500g/gói)</Text>
            </View>
            <Text style={styles.txtprice}>165.000đ</Text>
          </View>
          <View style={styles.product}>
            <Image
              style={styles.imgprd}
              source={require('../../../../../images/prd.jpg')}
            />
            <View style={{marginTop: 15}}>
              <Text style={styles.txtnameprd}>Sườn Kalbi</Text>
              <Text style={styles.txtquaility}>1(500g/gói)</Text>
            </View>
            <Text style={styles.txtprice}>165.000đ</Text>
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <View style={styles.price}>
            <View>
              <View style={styles.priceprd}>
                <Text style={styles.txtnameprice}>Tiền hàng</Text>
              </View>

              <Text style={styles.txtpricesum}>{this.state.fee}</Text>
            </View>
            <View>
              <View style={styles.priceprd}>
                <Text style={styles.txtnameprice}>Tiền ship</Text>
              </View>

              <Text style={styles.txtpricesum}>{this.state.feeShip}</Text>
            </View>
            <View>
              <View style={styles.priceprd}>
                <Text style={styles.txtnameprice}>Tổng cộng</Text>
              </View>

              <Text style={styles.txtpricesum}>
                {+this.state.fee + +this.state.feeShip}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.order} onPress={showAlert}>
            <Text style={styles.txtorder}>Thanh toán ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    height: Dimensionapp.getHeight() / 10,
  },
  headertop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'salmon',
  },
  imgheader: {
    height: 35,
    width: 35,
  },
  txtheader: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerbottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'chartreuse',
  },
  container: {
    backgroundColor: '#fff',
    margin: 10,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgprd: {
    height: Dimensionapp.getHeight() / 6,
    width: Dimensionapp.getHeight() / 6,
  },
  txtnameprd: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtquaility: {
    color: 'gray',
    marginTop: 10,
  },
  txtprice: {
    fontSize: 18,
    color: 'salmon',
    fontWeight: 'bold',
    marginTop: 15,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  priceprd: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  txtnameprice: {
    fontSize: 18,
    color: 'gray',
    padding: 5,
  },
  txtpricesum: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  order: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
    marginBottom: 20,
  },
  txtorder: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});
