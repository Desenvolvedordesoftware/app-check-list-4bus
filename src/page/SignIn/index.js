import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles';

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
                    style={styles.Logo}
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
