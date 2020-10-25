import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const logo = {
    uri : 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
}

const ScrollMe = () => {
    return (
        <ScrollView>
            <Text style={{ fontSize: 96}}>Scroll me plz</Text>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Text style={{ fontSize: 96 }}>If you like</Text>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Text style={{ fontSize: 80 }}>React Native</Text>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
        </ScrollView>
    )
}

export default ScrollMe;