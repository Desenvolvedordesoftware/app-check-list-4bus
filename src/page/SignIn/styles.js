import { StyleSheet } from'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02B3D4',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerFrom: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        
        color: '#02B3D4',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#02B3D4',
        height: 40,
        marginBottom: 10,
        fontSize: 16,
    },
    button: {
        position: 'relative',
        backgroundColor: '#02B3D4',
        borderRadius: 50,
        paddingVertical: 15,
        width: '70%',
        alignSelf: 'center',
        bottom: '-15%',
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
        color: '#fff'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});