# LXTabBarIOS  
###练习使用ReactNative的常用组件与自定义组件
通过使用TabBarIOS组件拓展其功能构建了一个ReactNative项目。包含内容：熟练ReactNative的flex box布局，熟悉基本组件、自定义组件以及常用API 。

先看效果图：
<br>
![screen2.png](http://upload-images.jianshu.io/upload_images/301102-bd4536403037086f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
<br>
![screen1.png](http://upload-images.jianshu.io/upload_images/301102-010c7c9236abbb06.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
<br>

---

在index.ios.js中的主要代码：
```
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
```
这就是一个app的主要结构，在iOS中TabBarIOS充当着UITabBarController的角色。这里使用了自定义组件Home，需要导入var Home = require('./Home');
<br>

 * 自定义的首页组件Home，在Home.js文件的主要代码：<br>

```
var Home = React.createClass({
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
 module.exports = Home;
```
在iOS中相当于ViewController，也相当于在Android中的Activity。在文件结尾特别注意这句代码module.exports = Home;这是导出该类，才能让别的类可引用。这里用引用了Detail组件，在文件开头需导入该类var Detail = require('./Detail');
<br>

* 自定义的组件Detail主要代码：<br>

```
......
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

var BoxStyles = StyleSheet.create({
......
})

 module.exports = Detail;    
```
<br>

###特别注意：
1.在github下载了demo后直接运行会报错<br>
须cd到项目根目录，然后在终端运行npm install，这会需要耐心等待一点时间。有如下的效果则成功，在配置中。<br>
![screen3.png](http://upload-images.jianshu.io/upload_images/301102-64f360f640c0db5d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)<br>

2.运行到真机上的配置
```
jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
```
只需将AppDelegate.m文件上面代码中的localhost替换为电脑ip地址即可，如：192.168.1.10。<br>
获取电脑ip地址的简单办法，如下图。<br>
![screen4.png](http://upload-images.jianshu.io/upload_images/301102-7025d2b7778a8946.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)<br>

<br>
源码请点击[github地址](https://github.com/SoftProgramLX/LXTabBarIOS)下载。
---
QQ:2239344645    [我的github](https://github.com/SoftProgramLX?tab=repositories)<br>
