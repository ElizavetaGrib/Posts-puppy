import {StyleSheet, Platform} from 'react-native';

const backgroundColor = Platform.OS === 'ios' ? 'white' : '#283C0A';
const textColor = Platform.OS === 'ios' ? '#283C0A' : 'white';
const buttonColor = Platform.OS === 'ios' ? '#283C0A' : '#8C965A';

export default StyleSheet.create({
    formWrapper: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    form: {
        backgroundColor,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 10,
    },
    textStyle: {
        color: textColor,
        marginBottom: 5,
    },
    buttonColor: {
        color: buttonColor,
    },
});
