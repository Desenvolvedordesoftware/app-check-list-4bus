

import { StyleSheet, StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 64;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02B3D4',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 7,

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

        
        borderColor: '#fff',
        borderWidth: 1,

        shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 10,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        fontSize: 18,
        color: '#fafafa',
        fontWeight: 'bold',
    },
    buttonUser: {
        width: 60,
        height: 60,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,

        shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 10,
    },
    centeredView:{
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    modalView:{
      width: '80%',
      height: '60%',
      backgroundColor: '#fafafa',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 60 / 2,
    },
    modalViewContent:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalProfile:{
      fontSize: 20,
      color: '#fafafa',
      fontWeight: 'bold',
    },
    modalText:{
      fontSize: 16,
      color: '#000',
    },
    photoView:{
      width: 80,
        height: 80,
        backgroundColor: '#02B3D4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,

        shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 10,
    },
    button: { 
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      display: 'flex',
      backgroundColor: '#02B3D4',
      borderRadius: 50,
      width: 150,
      height: 50,
      margin: 10,

      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 5,
    },
    buttonText: {
     fontSize: 18,
     color: '#fff'
    }
}) 