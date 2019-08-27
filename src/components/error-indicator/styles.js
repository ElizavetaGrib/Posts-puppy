import {StyleSheet} from 'react-native';

const lightGreen = '#8C965A';

export default StyleSheet.create({
    errorWrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: lightGreen
    },
    errorHeader: {
        color: 'red',
        textAlign: 'center',
        fontSize: 30,
        paddingBottom: 10,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
    },
    errorInfo: {
        fontSize: 20,
    },
});
