import React, {Component} from 'react';;
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';;
import {Dimensionapp} from '../../unit/Dimensionapp';;

export default class Order extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={{width: 35}} />
          <Text style={styles.headerTitle}>Thông tin mua hàng</Text>
          <TouchableOpacity>
            <Image
              style={styles.imgicon}
              source={require('../../../images/next.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.viewcontainer}>
                <Text style={styles.id}>Mã đơn hàng:</Text>
                <Text style={styles.txtid}>ORN123</Text>
              </View>
              <View style={styles.viewcontainer}>
                <Text style={styles.id}>Thời gian đặt hàng:</Text>
                <Text style={styles.txttime}>30/10/2019 12:00:00</Text>
              </View>
              <View style={styles.viewcontainer}>
                <Text style={styles.id}>Tình trạng:</Text>
                <Text style={styles.txtid}>Đã giao</Text>
              </View>
              <View style={styles.viewcontainer}>
                <Text style={styles.id}>Giá đơn hàng:</Text>
                <Text style={styles.txtprice}>1.000.000đ</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.viewcontainer}>
                <Text style={styles.id}>Mã đơn hàng:</Text>
                <Text style={styles.txtid}>ORN567</Text>
              </View>
              <View style={styles.viewcontainer}>
                <Text style={styles.id}>Thời gian đặt hàng:</Text>
                <Text style={styles.txttime}>30/10/2019 00:00:00</Text>
              </View>
              <View style={styles.viewcontainer}>
                <Text style={styles.id}>Tình trạng:</Text>
                <Text style={styles.txtid}>Chưa giao</Text>
              </View>
              <View style={styles.viewcontainer}>
                <Text style={styles.id}>Giá đơn hàng:</Text>
                <Text style={styles.txtprice}>10.000.000đ</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontSize: 25,
  },
  imgicon: {
    width: 35,
    height: 35,
  },
  body: {
    flex: 10,
    backgroundColor: 'gainsboro',
  },
  container: {
    height: Dimensionapp.getWidth() / 3,
    backgroundColor: '#fff',
    margin: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around',
  },
  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtid: {
    color: 'salmon',
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtprice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});;
