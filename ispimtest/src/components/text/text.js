import React from 'react';
import {View, Text, Alert} from 'react-native';
import {
  WhiteSpace,
  WingBlank
} from '@ant-design/react-native';

class TextExample extends React.Component {
  render() {
    return (
      <View>
        <WingBlank
          style={{
          marginTop: 20,
          marginBottom: 5
        }}>
          <Text>样式基本与CSS一样</Text>
        </WingBlank>
        <WingBlank style={{
          marginBottom: 5
        }}>
          <Text style={{
            fontWeight: 'bold'
          }}>
            I am bold
            <Text style={{
              color: 'red'
            }}>
              and red
            </Text>
          </Text>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank style={{
          marginBottom: 5
        }}>
          <Text
            style={{
            textShadowColor: 'red'
          }}
            onPress={() => Alert.alert('点击效果', '我被点击了',)}
            onLongPress={() => Alert.alert('长按效果', '我被长按了',)}>
            试一下点击与长按
          </Text>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank style={{
          marginBottom: 5
        }}>
        <Text selectable={true}>
          可以长按复制
        </Text>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank style={{
          marginBottom: 5
        }}>
        <Text style={{
          fontFamily:'anticon'
        }}>使用iconfont&#xe64b;&#xe72e;&#xe72d;</Text>
        </WingBlank>
      </View>
    )
  }
}

export default TextExample;