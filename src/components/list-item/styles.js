import {Platform, StyleSheet} from 'react-native';

const colors = {
    white: '#fff',
    darkGreen: '#283C0A',
};

const itemColor = Platform.OS === 'ios' ? colors.white : colors.darkGreen;
const textColor = Platform.OS === 'ios' ? colors.darkGreen : colors.white;

export default StyleSheet.create({
    listItem: {
        paddingVertical: 30,
        paddingHorizontal: 3,
        borderRadius: 5,
        marginHorizontal: 2,
        backgroundColor: itemColor,
    },
    listText: {
        color: textColor,
    },
});
