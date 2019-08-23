import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
    slider: {
        width: screenWidth,
    },
    sliderItem: {
        width: screenWidth / 3,
    },
    dotStyle: {
        marginHorizontal: 0,
        width: screenWidth / 50,
        height: screenWidth / 50,
    },
    dotContainerStyle: {
        marginHorizontal: 0,
    },
    containerStyle: {
        width: screenWidth,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
});
