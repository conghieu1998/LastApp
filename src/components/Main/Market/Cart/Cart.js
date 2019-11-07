import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Viewcart from './Viewcart'

export default class Cart extends Component {
    openMenu(){
        const {onOpen}=this.props;
        onOpen();
    }
    render() {
        return (
            <Viewcart/>
        )
    }
}
