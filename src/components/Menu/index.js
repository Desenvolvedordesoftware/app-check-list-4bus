import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
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
        <Text style={styles.labelButtom} >Enviar NF-e</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.actionButtom} >
        <View style={styles.areaButtom} >
          <AntDesign name="profile" size={40} color='#fff' />
        </View>
        <Text style={styles.labelButtom} >Perfil</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 15,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  actionButtom: {
    alignItems: 'center',
    marginRight: 10,
  },
  areaButtom: {
    backgroundColor: '#02b3d4',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButtom: {
    marginTop: 4,
    width: 70,
    textAlign: 'center',
  }
})