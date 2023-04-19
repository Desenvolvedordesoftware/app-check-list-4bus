import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

 return (
   <View style={styles.container} >

    <View style={styles.containerLogo}>
        <Animatable.Image
          animation="bounceInLeft" duration={2000}
          source={require('../../../assets/Logo.png')}
          style={{ width: '100%' }}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02B3D4'
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
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