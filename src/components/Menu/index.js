import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} >
      <TouchableOpacity
        onPress={() => navigation.navigate('CheckList')}
        style={styles.actionButtom} >
        <View style={styles.areaButtom} >
          <MaterialIcons name="post-add" size={40} color='#fff' />
        </View>
        <Text style={styles.labelButtom} >Check-List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ToSendNfe')}
        style={styles.actionButtom} >
        <View style={styles.areaButtom} >
          <FontAwesome5 name="file-invoice-dollar" size={40} color='#fff' />
        </View>
        <Text style={styles.labelButtom} >Enviar Doc</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.actionButtom} >
        <View style={styles.areaButtom} >
          <MaterialIcons name="more-time" size={40} color='#fff' />
        </View>
        <Text style={styles.labelButtom} >Banco Horas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Config')}
        style={styles.actionButtom} >
        <View style={styles.areaButtom} >
          <AntDesign name="setting" size={40} color='#fff' />
        </View>
        <Text style={styles.labelButtom} >Config.</Text>
      </TouchableOpacity>
    </View>
  );
}

