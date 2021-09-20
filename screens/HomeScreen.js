import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             home:"welcome home"
        }
    }
    
    render() {
        return (
            <View>
                <Text> {this.state.home} </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({

})
