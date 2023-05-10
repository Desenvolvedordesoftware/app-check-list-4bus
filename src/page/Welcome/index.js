import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="bounceInLeft" duration={2000}
                    source={require('../../../assets/Logo.png')}
                    style={styles.Logo}
                    resizeMode="contain"
                />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                style={styles.button} >
                <Animatable.Text
                    duration={2000}
                    animation="fadeInLeft"
                    style={styles.buttonText}>Acessar</Animatable.Text>
            </TouchableOpacity>

        </View>
    );
}
