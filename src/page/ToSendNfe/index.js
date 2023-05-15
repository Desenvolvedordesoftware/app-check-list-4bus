import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function ToSendNfe() {
    const navigation = useNavigation();
    return (
        <View style={styles.container} >
            <View style={styles.content}>
                <Text style={styles.text} >Envio de documentos</Text>
                <View style={styles.buttonConten}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.buttonSave} >
                        <Animatable.Text
                            duration={2000}
                            animation="fadeInLeft"
                            style={styles.buttonTextSave}>Camera</Animatable.Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.buttonSave} >
                        <Animatable.Text
                            duration={2000}
                            animation="fadeInLeft"
                            style={styles.buttonTextSave}>Gravar</Animatable.Text>
                    </TouchableOpacity>
                </View>
            </View>

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
