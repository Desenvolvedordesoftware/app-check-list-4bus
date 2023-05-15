import { StyleSheet } from'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02B3D4',
    },
    content:{
        flex: 1,
        width: '90%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 60,
        marginBottom: '15%',
        overflow: 'hidden',
        marginTop: '10%',

        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 10,
    },
    buttonConten:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '1%',
        padding: '5%',
        borderRadius: 60,
        gap: 30,
        backgroundColor: '#02B3D4',
        
    },
    text: {
        fontSize: 18,
        color: '#02B3D4',
        textAlign: 'center',
        margin: '2%',
        justifyContent: 'center',
    }, 
    button: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: '6%',
        width: '50%',
        alignSelf: 'center',
        bottom: '1%',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 10,
    },
    buttonSave: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: '5%',
        alignSelf: 'center',
        bottom: '10%',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 10,
    },
    buttonTextSave: {
        fontSize: 16,
        color: '#02B3D4'
    },
    buttonText: {
        fontSize: 16,
        color: '#02B3D4'
    },
});