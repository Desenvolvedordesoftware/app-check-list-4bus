import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02B3D4'
    },
    containerLogo: {
        flex: 1,
        width: '100%',
        backgroundColor: '#02B3D4',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 60,

        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 10,

    },
    Logo: {
        width: '50%',
        height: '20%',
        borderRadius: 60

    },
    button: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 15,
        width: '70%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#02B3D4'
    }
});