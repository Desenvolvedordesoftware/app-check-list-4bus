import React, {useState} from 'react';

import {
    View,
    TouchableOpacity,
    Modal,
    Text,
    Image
} from 'react-native';

import { styles } from './styles';

import * as Animatable from 'react-native-animatable';

export default function Header({ name }) {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.content} >
                <Animatable.Text
                    duration={2000}
                    animation="fadeInLeft"

                    style={styles.username}> {name} </Animatable.Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser} onPress={() => setOpen(true)}>
                <Animatable.Image
                    animation="bounceInLeft" duration={2000}
                    source={require('../../../assets/Logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
                </TouchableOpacity>

                <Modal
                style={styles.modal}
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={() => {
                    setOpen(false);
                }}
                >
                 <View style={styles.contentModal} >

                    <View style={styles.containerLogo}>
                        
                    <Animatable.Image
                    animation="bounceInLeft" duration={2000}
                    source={require('../../../assets/Motorista.png')}
                    style={styles.photoMot}
                    resizeMode="contain"/>
                   <Text style={styles.textModal}>MARCOS FERNANDO HAMES</Text>
                   <Text style={styles.textModal}>Operação de linhas</Text>
                   <Text style={styles.textModal}>Data de Admissão: 08/10/2022</Text>
                   </View>
                  <TouchableOpacity style={styles.bottonModal} onPress={() => setOpen(false)} >
                    <Text style={styles.text}>OK</Text>
                  </TouchableOpacity>
                </View>
                </Modal>
            </View>
        </View>
    );
}