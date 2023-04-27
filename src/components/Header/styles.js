

import { StyleSheet, StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 1 : 64;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 30,

        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

        shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 5,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        fontSize: 25,
        color: '#02B3D4',
        fontWeight: 'bold',
    },
    buttonUser: {
        width: 60,
        height: 60,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60 / 2,

        shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 5,
    },
    modal:{
      position: 'absolute',
      
    },
    bottonModal: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#02B3D4',
        borderRadius: 10,
        height: 50,
        width: 100,
        marginTop: '5%',
        marginBottom: '5%',
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        fontSize: 20,
        color: '#fff',
    },
    contentModal:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginTop: '10%',
      marginBottom: '120%',
      marginRight: '10%',
      marginLeft: '10%',
      backgroundColor: '#fff',

      
      borderRadius: 30,
    }, 
    containerLogo: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%',
      gap: 10,
  
    },
    photoMot: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      backgroundColor: '#fafafa',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 90 / 2,
    },
    textModal: {
      fontSize: 18,
      color: '#02b3d4',
      fontWeight: 'bold',
    },
})