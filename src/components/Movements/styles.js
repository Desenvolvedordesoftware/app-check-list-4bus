import { StyleSheet } from'react-native';

export const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: '#ecf0f1',
        padding: 10,
        borderRadius: 15,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        fontSize: 22,
        color: '#02b3d4',
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
    pendingButtom: {
        display: 'none',
        alignItems: 'center',
        marginRight: 10,
    },
    areaButtom: {
        height: 50,
        width: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})