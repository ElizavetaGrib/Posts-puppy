import {StyleSheet, Platform} from 'react-native';

const backgroundColor = Platform.OS === 'ios' ? 'white' : '#8C965A';

export default StyleSheet.create({
    buttonWrapper: {
        backgroundColor,
    },
    buttonColor: {
        color: '#283C0A',
    },
});
