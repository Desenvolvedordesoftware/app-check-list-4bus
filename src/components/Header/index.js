import React from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';

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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#17a',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 30,

        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    username: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    },

    buttonUser: {
        width: 60,
        height: 60,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60 / 2,
    }
})