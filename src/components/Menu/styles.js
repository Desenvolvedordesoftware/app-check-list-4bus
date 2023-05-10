import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#02b3d4',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: 1,
      marginStart: 14,
      marginEnd: 14,
      marginBottom: 8,
      borderRadius: 15,
      paddingTop: 10,
      paddingBottom: 8,
      zIndex: 99,
      borderColor: '#fff',
      borderWidth: 1,

      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 10,
    },
    actionButtom: {
      alignItems: 'center',
      marginRight: 10,
    },
    areaButtom: {
      backgroundColor: '#fff',
      height: 50,
      width: 50,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 10,
    },
    labelButtom: {
      marginTop: 4,
      width: 70,
      textAlign: 'center',
      fontSize: 16,
      color: '#fff',
    }
  })