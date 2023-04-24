

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
    }
})