import React from 'react';
import {Text, View, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {RootStackNavigation} from '../navigator';
import {Button, List, SearchBar} from '@ant-design/react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../models/index';
import demoList from 'demoList';

const mapStateToProps = ({home, loading}: RootState) => ({
  num: home.num,
  loading: loading.effects['home/asyncAdd'],
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  state = {
    searchText: '',
    demoList: demoList,
    fontLoaded: false,
  };

  async componentDidMount() {
    StatusBar.setBarStyle('light-content');
    this.search(this.state.searchText);
  }

  onPressRow(rowData: any) {
    const {navigate} = this.props.navigation;
    if (rowData.title) {
      navigate(rowData.title);
    } else {
      console.error('demoList.js 中配置的组件必须要有 title');
    }
  }

  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  search = (text: any) => {
    const regex = new RegExp(String(text), 'i');
    const filter = (component: {title: string}) => regex.test(component.title);

    this.setState({
      demoList: demoList.filter(filter),
      searchText: text,
    });
  };

  handleAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {
        num: 10,
      },
    });
  };

  asyncAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {
        num: 3,
      },
    });
  };

  render() {
    const {num, loading} = this.props;
    console.log(this.props);
    return (
      // <View>
      //   <Text>Homeddd{num}</Text>
      //   <Text>{loading ? '加载中' : ''}</Text>
      //   <Button type="primary" onPress={this.handleAdd}>
      //     加
      //   </Button>
      //   <Button type="primary" onPress={this.asyncAdd}>
      //     异步加
      //   </Button>
      //   <Button type="primary" onPress={this.onPress}>
      //     跳转到detail111
      //   </Button>
      <View style={styles.container}>
        <Text style={styles.logoText}>react-native demos</Text>
        <Text>Homeddd{num}</Text>
        <Text>{loading ? '加载中' : ''}</Text>
        <Button type="primary" onPress={this.handleAdd}>
          加
        </Button>
        <Button type="primary" onPress={this.asyncAdd}>
          异步加
        </Button>
        <Button type="primary" onPress={this.onPress}>
          跳转到detail111
        </Button>
        <SearchBar
          onChange={(text) => {
            this.search(text);
          }}
        />
        <ScrollView>
          <List style={styles.list}>
            {demoList.map((el) => (
              <List.Item
                thumb={el.icon}
                onPress={() => {
                  this.onPressRow(el);
                }}
                arrow="horizontal"
                key={el.title}>{`${el.title} ${el.description}`}</List.Item>
            ))}
          </List>
        </ScrollView>
      </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
    width: 108,
    height: 108,
    alignSelf: 'center',
    marginTop: 45,
  },
  logoText: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 15,
    color: '#28B5F5',
  },
  logoTextSub: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 12,
    color: '#626262',
  },
  list: {
    marginTop: 20,
    marginBottom: 0,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  version: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
  },
  iconStyle: {
    fontFamily: 'anticon',
  },
});
export default connector(Home);
