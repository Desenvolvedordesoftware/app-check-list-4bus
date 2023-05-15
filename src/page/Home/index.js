
import React from 'react';
import { Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Movements from '../../components/Movements';
import { styles } from './styles';
import { list } from './dados'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Olá CAROLINE !" />

      
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Lista de Status Check-List</Text>
      </View>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
     <Menu />
    </View>
  );
}

