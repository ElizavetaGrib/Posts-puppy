import {StyleSheet, Dimensions, Platform} from 'react-native';

const colors = {
    white: '#fff',
    darkGreen: '#283C0A',
};

const screenWidth = Dimensions.get('screen').width;
const backgroundColor = Platform.OS === 'ios' ? colors.white : colors.darkGreen;

export default StyleSheet.create({
    slider: {
        width: screenWidth,
    },
    sliderItem: {
        width: screenWidth / 3,
    },
    dotStyle: {
        backgroundColor,
    },
    dotContainerStyle: {
        marginHorizontal: 0,
    },
    containerStyle: {
        width: screenWidth,
        paddingHorizontal: 0,
        paddingVertical: 5,
    },
});
