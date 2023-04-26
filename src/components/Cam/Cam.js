import React, {useState, useEffect, useRef} from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Modal,
    Image 
} from 'react-native';

import { Camera } from 'expo-camera';

import { FontAwesome } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function Cam() {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturePhoto, setCapturePhoto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return (
    <View style={styles.text} >
       <Text>Acesso null!</Text>
    </View>
    )
  }

  if (hasPermission === false) {
    return (
    <View style={styles.text} >
       <Text>Acesso negado!</Text>
    </View>
    )
  }

  async function takePicture() {
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setCapturePhoto(data.uri);
      setModalVisible(true);
    }
  }

 return (
   <SafeAreaView style={styles.container} >
     <Camera
       style={{ flex: 1 }}
       type={type}
       ref={camRef}
     >
     <View style={{flex:1, backgroundColor:'transparent', flexDirection: 'row' }} >  
      <TouchableOpacity style={styles.button} onPress={takePicture} >
       <FontAwesome name="camera" size={30} color="#fff" />
      </TouchableOpacity>
     </View>
     </Camera>

    {capturePhoto &&

     <Modal 
      visible={modalVisible} 
      transparent={false} 
      animationType="slide"
      >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

        <Image
         style={{ width: '100%', height: '90%', borderRadius: 20 }}
         source={{ uri: capturePhoto }} 
        />

        <View style={styles.modal}>
        <TouchableOpacity style={styles.bottonModal} onPress={() => setModalVisible(false) } >
            <MaterialIcons name='autorenew' size={30} color='#fff'/>
            <Text style={styles.text}>Nova</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottonModal} onPress={() => navigation.navigate('ToSendNfe')} >
            <MaterialIcons name='save-alt' size={30} color='#fff'/>
            <Text style={styles.text}>Salvar</Text>
        </TouchableOpacity>
        </View>

      </View>
     </Modal>}

   </SafeAreaView>
  );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        fontSize: 20,
        color: '#fff',
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#02B3D4',
      margin: 20,
      borderRadius: 10,
      height: 50,
      width: 50,
      
    },
    modal: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap:70,
        marginTop: 10,
    },
    bottonModal: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 20,
        backgroundColor: '#02B3D4',
        borderRadius: 10,
        height: 50,
        width: 150,
        marginTop: 10,
        marginBottom: 10,
        gap:10
    },
});