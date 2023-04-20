import { StyleSheet } from'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02B3D4',
    },
    text: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        justifyContent: 'center',
    }, button: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 15,
        width: '70%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#02B3D4'
    }
});