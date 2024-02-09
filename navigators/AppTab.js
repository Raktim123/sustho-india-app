import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import ChatStack from './ChatStack';
import ProfileStack from './ProfileStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

const AppTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#0EB87B',
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="message1" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={ProfileStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SearchStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default AppTab