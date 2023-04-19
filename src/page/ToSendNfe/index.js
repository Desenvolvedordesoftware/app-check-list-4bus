import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import * as Animatable from'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function ToSendNfe() {
    const navigation = useNavigation();
 return (
   <View style={styles.container} >
    <Text style={styles.text} >Envio de documentos</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02B3D4',
    },
    text: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',    
        margin: 10,
        fontWeight: 'bold',
        justifyContent: 'center',
    },button: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 15,
        width: '70%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#02B3D4'
    }
});