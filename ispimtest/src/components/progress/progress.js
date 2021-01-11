import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, Button, Progress } from '@ant-design/react-native';
export default class BasicProgressExample extends React.Component {
  constructor(props) {
    super(props);
    this.onAdd = () => {
      let p = this.state.percent + 10;
      if (this.state.percent >= 100) {
        p = 0;
      }
      this.setState({ percent: p });
    };
    this.state = {
      percent: 40,
    };
  }
  render() {
    const viewStyle = {
      marginTop: 80,
      flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    };
    return (<View>
      <Progress percent={100} position="fixed" />

      <View style={[viewStyle]}>
        <View style={{ marginRight: 10, height: 4, flex: 1 }}><Progress percent={this.state.percent} /></View>
        <Text>{this.state.percent}%</Text>
      </View>
      <Button style={{ width: 50, marginLeft: 10 }} type="ghost" size="small" onPress={this.onAdd}>(+-)10</Button>

      <WhiteSpace />
      <Progress percent={5} />

    </View>);
  }
}
