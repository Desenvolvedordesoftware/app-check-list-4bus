
import React from 'react';
import { 
    StyleSheet, 
    Text,  
    FlatList,
    TouchableOpacity,
    View 
} from 'react-native';

import { Feather } from 'react-native-vector-icons';
import NewCheckList from '../../components/NewCheckList';

const listCheck = [
    { id: 1, items: 1, description: 'CNH Condutor', c: false, nc: false, na: false, observation_measurements: "TESTE" },
    { id: 2, items: 2, description: 'CRLV veículo', c: false, nc: false, na: true, observation_measurements: "" },
    { id: 3, items: 3, description: 'Licenças ANTT', c: true, nc: false, na: false, observation_measurements: "TESTE1" },
    { id: 4, items: 4, description: 'Mapa viagem', c: false, nc: false, na: true, observation_measurements: "" },
    { id: 5, items: 5, description: 'Laudo tacógrafo', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 6, items: 6, description: 'Seguro veículo', c: false, nc: true, na: true, observation_measurements: "" },
    { id: 7, items: 7, description: 'Limpeza externa', c: false, nc: false, na: false, observation_measurements: "TESTE2" },
    { id: 8, items: 8, description: 'Limpeza interna', c: false, nc: false, na: true, observation_measurements: "" },
    { id: 9, items: 9, description: 'Pretinho nos Pneus', c: true, nc: false, na: false, observation_measurements: "" },
    { id: 10, items: 10, description: 'Nível de óleo motor', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 11, items: 11, description: 'Nível água radiador', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 12, items: 12, description: 'Freios (principal e estacionario)', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 13, items: 13, description: 'Cambagem dos pneus', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 14, items: 14, description: 'Condições dos pneus', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 15, items: 15, description: 'Iluminação interna', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 16, items: 16, description: 'Iluminação externa', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 17, items: 17, description: 'Retrovisores', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 18, items: 18, description: 'Vidros', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 19, items: 19, description: 'Limpador de para Brisas', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 20, items: 20, description: 'Estepe / macaco / Triangulo', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 21, items: 21, description: 'Cintos de segurança', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 22, items: 22, description: 'Cortinas limpas e na posição', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 23, items: 23, description: 'Poltronas limpas e na posição', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 24, items: 24, description: 'Babeceiras limpas e na posição', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 25, items: 25, description: 'Banheiro limpo, funcionando e com água', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 26, items: 26, description: 'Geladeira limpa, funcionando e com água', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 27, items: 27, description: 'Itinerário eletrônico identificando a viagem', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 28, items: 28, description: 'Extintor de incêndio válido', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 29, items: 29, description: 'Internet funcionando', c: false, nc: false, na: false, observation_measurements: "" },
    { id: 30, items: 30, description: 'APP ativado', c: false, nc: false, na: false, observation_measurements: "" },
]

export default function CheckList() {
    return (
        <View style={styles.container}>

            <View style={styles.contentTitle}>
                <Text style={styles.title}>Check-List</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser} onPress={() => alert('Clicou')}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03b3d4',
    },
    contentTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 22,
        margin: 14,
    },
    titleEnd: {
        color: '#03b3d4',
        fontSize: 22,
        margin: 14,
    },
    listCheck: {
        marginStart: 14,
        marginEnd: 14,
    },
    buttonUser: { 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 150,
        height: 50,
        margin: 10,
    }
});