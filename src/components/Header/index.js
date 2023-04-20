import React from 'react';

import {
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import * as Animatable from 'react-native-animatable';

import { Feather } from 'react-native-vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 1 : 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content} >
                <Animatable.Text
                    duration={2000}
                    animation="fadeInLeft"

                    style={styles.username}> {name} </Animatable.Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser} onPress={() => alert('Clicou')}>
                    <Feather name="user" size={27} color={"#fff"} />
                </TouchableOpacity>
            </View>
        </View>
    );
}