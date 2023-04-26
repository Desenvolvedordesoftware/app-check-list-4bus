import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function ToSendNfe() {
    const navigation = useNavigation();
    return (
        <View style={styles.container} >
            <Text style={styles.text} >Envio de documentos</Text>
            <Text style={styles.text} >Em desenvolvimento!</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Cam')}
                style={styles.button} >
                <Animatable.Text
                    duration={2000}
                    animation="fadeInLeft"
                    style={styles.buttonText}>Camera</Animatable.Text>
            </TouchableOpacity>

        </View>
    );
}
