import React from 'react';
import {Text, View} from 'react-native';
import { RootStackNavigation } from '../navigator';
import {Button} from '@ant-design/react-native'

interface IProps {
    navigation: RootStackNavigation
}

class Account extends React.Component<IProps> {

  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate("Detail", {
      id: 100
    });
  }

  render() {
    return (
      <View>
        <Text>Account</Text>
        <Button type="primary" onPress={this.onPress}>跳转到detail</Button>
      </View>
    );
  }
}

export default Account;