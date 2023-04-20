import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={styles.container} >
            <Text style={styles.text} >Perfil</Text>
            <Text style={styles.text} >Em desenvolvimento!</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.button} >
                <Animatable.Text
                    duration={2000}
                    animation="fadeInLeft"
                    style={styles.buttonText}>Voltar</Animatable.Text>
            </TouchableOpacity>

        </View>
    );
}

