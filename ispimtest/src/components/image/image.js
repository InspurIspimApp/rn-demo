import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  WhiteSpace,
  WingBlank
} from '@ant-design/react-native';

class ImageExample extends React.Component {
  render(){
    return (
      <View>
        <WingBlank>
          <WhiteSpace/>
          <Text>使用网络图片(需要指定样式)</Text>
          <Image style={{width:100,height:100}} source={{ uri:'http://static.xxt.cn/nb/m/base/img/top.png'}}></Image>
          <WhiteSpace />
          <Text>使用本地图片</Text>
          <Image source={require('./res/safe.png')}></Image>
        </WingBlank>
      </View>
    )
  }
}

export default ImageExample;