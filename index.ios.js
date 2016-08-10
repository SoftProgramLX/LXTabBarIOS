/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var Home = require('./Home');

import {
  StyleSheet,
  Text,
  AppRegistry,
  View,
  Image,
  ScrollView,
  TabBarIOS,
  NavigatorIOS,
  WebView,
} from 'react-native';

var TestTabBarIOS = React.createClass({
  getInitialState: function(){
    return {
      tab: 'home'
    };
  },
  select: function(tabName){
    this.setState({
      tab: tabName
    });
  },

  render: function(){
    return(
      <TabBarIOS style={styles.flex}>
        <TabBarIOS.Item
          title="首页"
          onPress={this.select.bind(this, 'home')}
          selected={this.state.tab === 'home'}>
          <NavigatorIOS
            style={{flex:1}}
            initialRoute={{
              component: Home,
              title: '首页',
              passProps: {},
            }}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="发现"
          onPress={this.select.bind(this, 'find')}
          selected={this.state.tab === 'find'}>
          <ScrollView style={styles.flex}>
          </ScrollView>     
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="我"
          onPress={this.select.bind(this, 'profile')}
          selected={this.state.tab === 'profile'}>
          <ScrollView style={styles.flex}>
          </ScrollView>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});


var styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  message:{
    alignItems:'center',
    marginLeft:5,
    marginRight:5,
  }
});


AppRegistry.registerComponent('TestTabBarIOS', () => TestTabBarIOS);



