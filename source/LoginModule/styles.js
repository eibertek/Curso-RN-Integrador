import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignSelf: 'stretch',
        justifyContent: 'flex-start',
        marginTop: 50,
        alignItems: 'center',
        width: '100%',
    },
    buttonStyle: {
        width: 60,
        height:60,
        borderRadius:30,
        position:'absolute', zIndex:999,
    },
});