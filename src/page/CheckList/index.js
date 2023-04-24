
import React from 'react';
import { 
    Text,  
    FlatList,
    TouchableOpacity,
    View 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { listCheck } from './dadosCheckList';

import { styles } from './styles';

import { Feather } from 'react-native-vector-icons';
import NewCheckList from '../../components/NewCheckList';


export default function CheckList() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.contentTitle}>
                <Text style={styles.title}>Check-List</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Feather name="send" size={27} color={'#03b3d4'} />
                <Text style={styles.titleEnd}>Enviar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.listCheck}
                data={listCheck}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <NewCheckList data={item} />}
            />

        </View>
    );
}
