import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Drawer from 'react-native-drawer'
import Menu from './Menu';
import Market from './Market/Market';

export default class Main extends Component {
    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };
      
    render() {
        return (
            <Drawer
                openDrawerOffset={0.2}
                tapToClose={true}
                ref={(ref)=>{this._drawer=ref}}
                content={<Menu/>}
            >
                <Market open={this.openControlPanel.bind(this)}/>
            </Drawer>            
        )
    }
}
