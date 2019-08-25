import {StyleSheet, Platform} from 'react-native';

const colors = {
    transparentWhite: '#fff80',
    white: '#fff',
    lightGreen: '#8C965A',
    darkGreen: '#283C0A',
};

const formColor = Platform.OS === 'ios' ? colors.white : colors.darkGreen;
const textColor = Platform.OS === 'ios' ? colors.darkGreen : colors.white;
const buttonColor = Platform.OS === 'ios' ? colors.darkGreen : colors.lightGreen;

export default StyleSheet.create({
    formWrapper: {
        backgroundColor: colors.transparentWhite,
        flex: 1,
        justifyContent: 'center',
    },
    form: {
        backgroundColor: formColor,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    textStyle: {
        color: textColor,
        marginBottom: 5,
    },
    buttonColor: {
        color: buttonColor,
    },
});
