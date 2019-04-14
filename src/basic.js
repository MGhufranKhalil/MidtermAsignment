/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import Footer from './Footer';
 
export default class App extends Component {
  render() {
    return (
      <View  >
        <Header/>
            <Text style={{fontSize:20,fontWeight:"600",marginTop:60}}>Expereince</Text>
            <Text style={{fontSize:18}}> - Software Engineer </Text>
            <Text style={{fontSize:18}}>at octraves technology</Text>
        <Footer/>
      </View>
    );
  }
}
 
