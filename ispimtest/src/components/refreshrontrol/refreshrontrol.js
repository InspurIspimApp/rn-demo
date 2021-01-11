import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    RefreshControl,
    Dimensions,
} from 'react-native'
import data from './data'
const {width,height} = Dimensions.get('window')
export default class Root extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            isRefreshing:false,
        }
    }
    render(){
        return (
            <ScrollView
                style={styles.scrollStyle}
                refreshControl={
                    <RefreshControl
                     refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#bbb"
                      colors={['#ddd', '#0398ff']}
                        progressBackgroundColor='#fff'>
                    </RefreshControl>
                }>
                {
                    this.state.data.map((item,i) => {
                        return <Item key={i} data={item}></Item>
                    })
                }
            </ScrollView>
        )
    }
    componentDidMount(){
        this.setState({
            isRefreshing:true,
        })
        setTimeout(() => {
            this.setState({
                data:data.list,
                isRefreshing:false,
            })
        },1500)
    }
    _onRefresh(){
        this.setState({
            isRefreshing:true,
        })
        setTimeout(() => {
            this.setState({
                data:data.refresh.concat(this.state.data),
                isRefreshing:false,
            })
        },1500)
    }

}
class Item extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{this.props.data.name}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    scrollStyle:{
        backgroundColor:'#f3f3f3',
    },
    item:{
        flex:1,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        marginHorizontal:1,
    },
    text:{
        fontSize:14,
    },
})