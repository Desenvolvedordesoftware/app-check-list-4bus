import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >

            <Animatable.View animation="bounceInLeft" duration={2000} style={styles.containerHeader} >
                <Text style={styles.message}>Bem-vindo</Text>
            </Animatable.View>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="bounceInLeft" duration={2000}
                    source={require('../../../assets/Logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View animation="bounceInUp" duration={2000} style={styles.containerFrom} >
                <Text style={styles.title}>CPF</Text>
                <TextInput
                    placeholder='Digite seu CPF'
                    style={styles.input} />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input} />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.button} >
                    <Animatable.Text
                        duration={2000}
                        animation="fadeInLeft"
                        style={styles.buttonText}>Entrar</Animatable.Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02B3D4',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerFrom: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#02B3D4',
        height: 40,
        marginBottom: 10,
        fontSize: 16,
    },
    button: {
        position: 'relative',
        backgroundColor: '#02B3D4',
        borderRadius: 50,
        paddingVertical: 15,
        width: '70%',
        alignSelf: 'center',
        bottom: '-15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});