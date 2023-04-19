
import React from'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    status: 'Realizado',
    date:'08/04/2023',
    type: 1 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 2,
    status: 'Realizado',
    date:'08/04/2023',
    type: 1 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 3,
    status: 'Pendente',
    date:'08/04/2023',
    type: 0 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 4,
    status: 'Realizado',
    date:'08/04/2023',
    type: 1 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 5,
    status: 'Realizado',
    date:'08/04/2023',
    type: 1 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 6,
    status: 'Pendente',
    date:'08/04/2023',
    type: 0 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 7,
    status: 'Realizado',
    date:'08/04/2023',
    type: 1 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 8,
    status: 'Realizado',
    date:'08/04/2023',
    type: 1 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 9,
    status: 'Pendente',
    date:'08/04/2023',
    type: 0 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 10,
    status: 'Realizado',
    date:'08/04/2023',
    type: 1 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 11,
    status: 'Realizado',
    date:'08/04/2023',
    type: 1 // 0 = Pendente - 1 = Realizado
  },
  {
    id: 12,
    status: 'Pendente',
    date:'08/04/2023',
    type: 0 // 0 = Pendente - 1 = Realizado
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Olá Wilson!" /> 

      <Menu/>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Lista de Status Check-List</Text>
      </View>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} /> }
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03b3d4',
  },
  contentTitle:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#fff',
    fontSize: 22,
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});