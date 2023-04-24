import {StyleSheet} from'react-native'; 
 
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: '#ecf0f1',
        padding: 10,
        borderRadius: 15,
    },
    content: {
        marginTop: 2,
        marginBottom: 8,
    },
    description: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    status: {
        fontSize: 18,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 18,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#02b3d4',
        borderRadius: 8,
        
    },
    accomplishedButton: {
        alignItems: 'center',
        marginRight: 10,
    },
    contentCheckBoxNone: {
        display: 'none',
        gap: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    contentCheckBox: {
        gap: 20,
        marginTop: 10,
        marginBottom: 10,

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
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 5,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
})