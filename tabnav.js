import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import MapView from 'react-native-maps';
// import { GiftedChat } from 'react-native-gifted-chat';
import FCM from "react-native-fcm";
import Entypo from 'react-native-vector-icons/Entypo';
import { TabNavigator, TabView } from 'react-navigation'
import stackNav from './stacknav';


const tabNav = TabNavigator({
    TabItem1: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel:"募集中",
            // tintColor: '#0087B7',
            // tabBarIcon: ({ tintColor }) => <Entypo name={"glass"} size={30} color={tintColor} />,
            // tabBarIcon: (<Entypo name={"glass"} size={30} color={#ebb207} />,
            titleStyle: {color: '#FFFFFF'}
            }
    },
    TabItem2: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel:"マッチング済み",
            tabBarIcon: ({ tintColor }) => <Entypo name={"glass"} size={30} color={tintColor} />
        }
    }
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#e97017',
            inactiveTintColor: 'rgb(250, 203, 100)',
            labelStyle: {
              fontSize: 20,
              // fontFamily: "arial unicode ms",
            },
            style: {
              backgroundColor: 'rgba(255, 243, 213, 1)'
            },
        }
});

export default tabNav;
