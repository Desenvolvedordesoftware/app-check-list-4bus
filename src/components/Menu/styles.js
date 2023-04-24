import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fafafa',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: -24,
      marginStart: 14,
      marginEnd: 14,
      borderRadius: 15,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99,

      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 5,
    },
    actionButtom: {
      alignItems: 'center',
      marginRight: 10,
    },
    areaButtom: {
      backgroundColor: '#02b3d4',
      height: 60,
      width: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 8,
      elevation: 5,
    },
    labelButtom: {
      marginTop: 4,
      width: 70,
      textAlign: 'center',
    }
  })