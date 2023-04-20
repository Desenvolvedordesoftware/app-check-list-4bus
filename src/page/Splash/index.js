import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function Splash() {
    const navigation = useNavigation();

  return (
    <View style={styles.animationContainer}>
      <LottieView
        source={require('../../assets/splash.json')}
        style={{ width: '100%', backgroundColor: '#02b3d4' }}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate('Welcome')}
      />
      <View >
        <Text style={styles.text}>Carregando........</Text>
      </View>
    </View>
  );
}
