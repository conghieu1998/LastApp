import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,StyleSheet } from 'react-native'
import Header from '../../Header'
import {Dimensionapp} from '../../../../unit/Dimensionapp'


export default class Nganhhang extends Component {
    openMenu(){
        const {onOpen}=this.props;
        onOpen();
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Header onOpen1={this.openMenu.bind(this)}/>
                <View style={styles.container}>
                    <View style={{flexDirection:'row',justifyContent:'center',flexWrap:'wrap'}}>
                        <View style={styles.type}>
                            <Image style={styles.imgtype} source={require('../../../../../images/thit.jpg')} />
                            <Text style={styles.txttype}>Thịt và hải sản</Text>
                        </View>
                        <View style={styles.type}>
                            <Image style={styles.imgtype} source={require('../../../../../images/thit.jpg')} />
                            <Text style={styles.txttype}>Thịt và hải sản</Text>
                        </View>
                        <View style={styles.type}>
                            <Image style={styles.imgtype} source={require('../../../../../images/thit.jpg')} />
                            <Text style={styles.txttype}>Thịt và hải sản</Text>
                        </View>
                        <View style={styles.type}>
                            <Image style={styles.imgtype} source={require('../../../../../images/thit.jpg')} />
                            <Text style={styles.txttype}>Thịt và hải sản</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    container:{
        padding:10,
    },
    type:{
        borderBottomWidth:1,
        borderRightWidth:1,
        borderColor:'gray',
        paddingLeft:5,
        paddingRight:5,
    },
    imgtype:{
        width: Dimensionapp.getWidth()/2.5,
        height: Dimensionapp.getHeight()/5.5
    },
    txttype:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})

