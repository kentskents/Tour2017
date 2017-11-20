import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import Feather from 'react-native-vector-icons/Feather';
import DetailScreen from './detail';
import CloseCats from './close_cats';


const closeScreen = StackNavigator({
    /* 猫の一覧画面 */
    Main: {
        screen: CloseCats,
        navigationOptions:({navigation}) => ({
            title: "むろニャン！",
            headerTitleStyle:{ color: '#ffffff'},
            headerRight:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Feather name="menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10,backgroundColor: 'rgba(255, 191, 50, 1)'},
        })
    },
    /* 猫の詳細画面 */
    Detail: {
        screen: DetailScreen,
        navigationOptions: (props) => ({
            title: "ねこデータ",
            headerTitleStyle:{ color: '#ffffff'},
            headerStyle: { paddingRight: 10, paddingLeft: 10,backgroundColor: 'rgba(255, 191, 50, 1)'},
        })
    }
})

export default closeScreen;
