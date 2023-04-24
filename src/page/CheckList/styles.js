import { StyleSheet } from'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03b3d4',
    },
    contentTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 22,
        margin: 14,
    },
    titleEnd: {
        color: '#03b3d4',
        fontSize: 22,
        margin: 14,
    },
    listCheck: {
        marginStart: 14,
        marginEnd: 14,

    },
    button: { 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 150,
        height: 50,
        margin: 10,

        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5,
    }
});