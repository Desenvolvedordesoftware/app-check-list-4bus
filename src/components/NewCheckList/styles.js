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
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
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
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff'
    },
})