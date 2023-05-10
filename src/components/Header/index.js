import React from 'react';

import {
    View,
    StatusBar,
    TouchableOpacity,
    Modal,
    Text,
    Image
} from 'react-native';



import { styles } from './styles';

import * as Animatable from 'react-native-animatable';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 1 : 64;

export default function Header({ name }) {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.content} >
                <Animatable.Text
                    duration={2000}
                    animation="fadeInLeft"

                    style={styles.username}> {name} </Animatable.Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser} onPress={() => setModalOpen(!modalOpen)}>
                <Animatable.Image
                    animation="bounceInLeft" duration={2000}
                    source={require('../../../assets/photo-1.png')}
                    style={{ width: '90%', height: '90%', borderRadius: 60}}
                    resizeMode="contain"
                />
                </TouchableOpacity>
            </View>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalOpen(!modalOpen);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalViewContent}>
                        <View style={styles.photoView}>
                        <Image
                            animation="bounceInLeft" duration={2000}
                            source={require('../../../assets/photo-1.png')}
                            style={{ width: '90%', height: '90%', borderRadius: 60}}
                            resizeMode="contain"
                        />
                        </View>
                          <Text style={styles.modalProfile}>Perfil</Text>
                            <View style={styles.centeredView}>
                            <Text style={styles.modalText}>CAROLINE KRAMES</Text>
                            <Text style={styles.modalText}>Suporte Help Desk</Text>
                            <Text style={styles.modalText}>Data de Admissão: 17/01/2023</Text>
                          </View>
                        </View>
                        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => setModalOpen(!modalOpen)}>
                            
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}




