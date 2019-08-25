import {StyleSheet, Platform} from 'react-native';

const colors = {
    white: '#fff',
    lightGreen: '#8C965A',
    darkGreen: '#283C0A',
};

const buttonColor = Platform.OS === 'ios' ? colors.white : colors.lightGreen;

export default StyleSheet.create({
    buttonWrapper: {
        backgroundColor: buttonColor,
    },
    buttonColor: {
        color: colors.darkGreen,
    },
});
