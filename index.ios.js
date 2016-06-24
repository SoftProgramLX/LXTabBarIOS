/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Dimensions from 'Dimensions';

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

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var TestTabBarIOS = React.createClass({
  getInitialState: function(){
    return {
      tab: 'message'
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
          onPress={this.select.bind(this, 'message')}
          selected={this.state.tab === 'message'}>
          <NavigatorIOS
            style={{flex:1}}
            initialRoute={{
              component: List,
              title: '首页',
              passProps: {},
            }}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="发现"
          onPress={this.select.bind(this, 'phonelist')}
          selected={this.state.tab === 'phonelist'}>
          <ScrollView style={styles.flex}>
          </ScrollView>     
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="我"
          onPress={this.select.bind(this, 'star')}
          selected={this.state.tab === 'star'}>
          <ScrollView style={styles.flex}>
          </ScrollView>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

// 首页
var List = React.createClass({
  render: function(){
    return (
      <ScrollView style={styles.flex}>
        <Text style={styles.list_item} onPress={this.goTo}>☆ 点我哟1</Text>
        <Text style={styles.list_item} onPress={this.goTo}>☆ 点我哟2</Text>
        <Text style={styles.list_item} onPress={this.goTo}>☆ 点我哟3</Text>
      </ScrollView>
      );
  },
  goTo: function(){
    this.props.navigator.push({
      component: Detail,
      title: '详情',
      rightButtonTitle: '右Button',
      onRightButtonPress: function(){
        alert('点击了右Button');
      }
    });
  }
});

//首页详情
var Detail = React.createClass({
  render:function(){
    return (
      <ScrollView>
      <MargginBox>
        <BorderBox>
          <PaddingBox>
            <ElementBox>
            </ElementBox>
          </PaddingBox>
        </BorderBox>
      </MargginBox>
      </ScrollView>
    )
  }
});

var MargginBox = React.createClass({
  render:function(){
    return (
      <View style={[BoxStyles.margginBox]}>
        <Box  childName="borderBox"  height="height400" width="width400" boxName="margin" classBg="bgred">{this.props.children}</Box>
      </View>
    )
  }
});

var BorderBox = React.createClass({
  render:function(){
    return (
      <Box childName="paddingBox"  height="height300" width="width300" boxName="border" classBg="bggreen" >{this.props.children}</Box>
    )
  }
});

var PaddingBox = React.createClass({
  render:function(){
    return (
      <Box childName="elementBox"  height="height200" width="width200" boxName="padding" classBg="bgyellow" >{this.props.children}</Box>
    )
  }
});

var Box = React.createClass({
  render:function(){
    return (
      <View style={[BoxStyles.box,BoxStyles[this.props.width],BoxStyles[this.props.height]]}>
        <View  style={[BoxStyles.top,BoxStyles.height50,BoxStyles[this.props.classBg]]}><Text>top</Text></View>
        <View style={[BoxStyles[this.props.childName]]}>
          <View style={[BoxStyles.left,BoxStyles[this.props.classBg]]}><Text>left</Text></View>
            {this.props.children}
          <View style={[BoxStyles.right,BoxStyles[this.props.classBg]]}><Text>right</Text></View>
        </View>
        <View style={[BoxStyles.bottom,BoxStyles.height50,BoxStyles[this.props.classBg]]}><Text>bottom</Text></View>
        <View style={[BoxStyles.label]}><Text>{this.props.boxName}</Text></View>
      </View>
    )
  }
});

var ElementBox = React.createClass({
  render:function(){
    return (
      <View style={[BoxStyles.box,BoxStyles.height100]}>
        <View style={[BoxStyles.measureBox]}>
          <View style={[BoxStyles.right]}><Text>height</Text></View>
        </View>
        <View style={[BoxStyles.bottom,BoxStyles.height50]} ><Text>width</Text></View>
        <View style={[BoxStyles.label]}><Text>element</Text></View>
        <View style={[BoxStyles.widthdashed]}></View>
        <View style={[BoxStyles.heightdashed]}></View>
      </View>
    )
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
  },
  message_title:{
    fontSize:18,
    color: '#18B5FF',
    marginBottom:5,
  },
  list:{
    height:30,
    fontSize:15,
    marginLeft:10,
    marginTop:10,
  },
  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  },
});

var BoxStyles = StyleSheet.create({
  "height50": {
    height: 50,
  },
  "height400": {
    height: 400,
  },
  "height300": {
    height: 300,
  },
  "height200": {
    height: 200,
  },
  "height100": {
    height: 100,
  },
  "width400": {
    width: 400,
  },
  "width300": {
    width: 300,
  },
  "width200": {
    width: 200,
  },
  "width100": {
    width: 100,
  },
  "bgred": {
    backgroundColor: "#6AC5AC",
  },
  "bggreen": {
    backgroundColor: "#414142",
  },
  "bgyellow": {
    backgroundColor: "#D64078",
  },
  "box": {
    flexDirection: "column",
    flex: 1,
    position: "relative",
  },
  "label": {
    top: 0,
    left: 0,
    paddingTop: 0,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 0,
    position: "absolute",
    backgroundColor: "#FDC72F",
  },
  "top": {
    justifyContent: "center",
    alignItems: "center",
  },
  "bottom": {
    justifyContent: "center",
    alignItems: "center",
  },
  "right": {
    width: 50,
    justifyContent: "space-around",
    alignItems: "center",
  },
  "left": {
    width: 50,
    justifyContent: "space-around",
    alignItems: "center",
  },
  "heightdashed": {
    bottom: 0,
    top: 0,
    right: 20,
    borderLeftWidth: 1,
    position: "absolute",
    borderLeftColor: "#FDC72F"
  },
  "widthdashed": {
    bottom: 25,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    position: "absolute",
    borderTopColor: "#FDC72F"
  },
  "yellow": {
    color: "#FDC72F",
    fontWeight:"900",
  },
  "white": {
    color: "white",
    fontWeight:"900",
  },

  "margginBox":{
    "position": "absolute",
    "top": 50,
    "paddingLeft":7,
    "paddingRight":7,
  },
  "borderBox":{
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  "paddingBox":{
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  "elementBox":{
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  "measureBox":{
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems:"flex-end"
  }
})

AppRegistry.registerComponent('TestTabBarIOS', () => TestTabBarIOS);



