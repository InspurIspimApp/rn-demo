/* tslint:disable:no-console */
// import React from 'react';
// import {Image, Text, View} from 'react-native';
// import {NoticeBar, WhiteSpace, Button} from '@ant-design/react-native';
// import Config from 'react-native-config';
// import {NavigationContainer} from '@react-navigation/native';
// export default class NoticeBarExample extends React.Component {
//   render() {
//     const customIcon = (
//       <Image
//         // tslint:disable-next-line:jsx-no-multiline-js
//         source={{
//           uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png',
//         }}
//         style={{width: 12, height: 12}}
//       />
//     );
//     return (
//       <NavigationContainer>
//         <View style={{marginTop: 10}}>
//           <WhiteSpace size="lg" />
//           <Button type="primary">{Config.API_URL}</Button>
//           <Button loading>loading button</Button>
//           <NoticeBar
//             onPress={async () => {
//               alert(22);
//               try {
//                 let response = await fetch(
//                   'http://10.59.6.152/ued/restore-api/getRestoreInfo',
//                 );
//                 alert(JSON.stringify(response));
//                 console.log(response);
//               } catch (error) {
//                 alert(error);
//                 console.error(error);
//               }
//             }}
//             marqueeProps={{loop: true, style: {fontSize: 12, color: 'red'}}}>
//             Notice: The arrival time of incomes and transfers of Yu 'E Bao will
//             be delayed during National Day.
//           </NoticeBar>
//           <WhiteSpace size="lg" />
//           <NoticeBar mode="closable" onPress={() => alert('will close')}>
//             Notice: The arrival time of incomes and transfers of Yu 'E Bao will
//             be delayed during National Day.
//           </NoticeBar>
//           <WhiteSpace size="lg" />
//           <NoticeBar mode="closable" icon={customIcon}>
//             Customized icon.
//           </NoticeBar>
//           <WhiteSpace size="lg" />
//           <NoticeBar mode="link" onPress={() => alert('link')}>
//             Notice: The arrival time of incomes and transfers of Yu 'E Bao will
//             be delayed during National Day.
//           </NoticeBar>
//           <WhiteSpace size="lg" />
//           <NoticeBar mode="link">
//             Notice: The arrival time of incomes and transfers of Yu 'E Bao will
//             be delayed during National Day.
//           </NoticeBar>
//           <WhiteSpace size="lg" />
//           <NoticeBar mode="closable" icon={undefined}>
//             Remove the default icon.
//           </NoticeBar>
//           <WhiteSpace size="lg" />
//           <NoticeBar
//             mode="closable"
//             action={<Text style={{color: '#a1a1a1'}}>不再提示</Text>}>
//             Closable demo for `actionText`.
//           </NoticeBar>
//           <WhiteSpace size="lg" />
//           <NoticeBar mode="link" action={<Text>去看看</Text>}>
//             Link demo for `actionText`.
//           </NoticeBar>
//         </View>
//       </NavigationContainer>
//     );
//   }
// }
import React from 'react';
import Navigator from './navigator/index';
import {Provider} from 'react-redux'
import store from './config/dva'

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator></Navigator>
      </Provider>
    )
  }
}
