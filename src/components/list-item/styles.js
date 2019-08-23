import {Platform, StyleSheet} from 'react-native';

const backgroundColor = Platform.OS === 'ios' ? 'white' : '#283C0A';
const color = Platform.OS === 'ios' ? '#283C0A' : 'white';

export default StyleSheet.create({
    listItem: {
        paddingVertical: 30,
        paddingHorizontal: 3,
        marginHorizontal: 2,
        borderRadius: 5,
        backgroundColor,
    },
    listText: {
        color,
    }
});
