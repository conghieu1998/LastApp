import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Dimensionapp} from '../../../../unit/Dimensionapp';
import Swiper from 'react-native-swiper';
import SwiperFlatList from 'react-native-swiper-flatlist';

export default class Collection extends Component {
  render() {
    const {wrapper, text, image} = styles;
    return (
      <View style={wrapper}>
        <View>
          <Text style={text}>Tuần Tưng Bừng</Text>
        </View>
        <View style={{padding: 10}}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={2}
            showPagination>
            <Image
              style={image}
              source={require('../../../../../images/collection.jpg')}
            />
            <Image
              style={image}
              source={require('../../../../../images/collection1.jpg')}
            />
            <Image
              style={image}
              source={require('../../../../../images/collection2.jpg')}
            />
            <Image
              style={image}
              source={require('../../../../../images/collection3.jpg')}
            />
            <Image
              style={image}
              source={require('../../../../../images/collection4.jpg')}
            />
          </SwiperFlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensionapp.getHeight() / 3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  text: {
    fontSize: 25,
    color: 'salmon',
    textAlign: 'center',
  },
  image: {
    width: Dimensionapp.getWidth() - 20,
    height: Dimensionapp.getHeight() / 4,
  },
});
