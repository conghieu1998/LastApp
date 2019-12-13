import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Main from './src/components/Main/Main';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Main />
      </SafeAreaView>
    );
  }
}
