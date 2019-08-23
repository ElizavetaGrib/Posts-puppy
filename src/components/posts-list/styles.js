import {StyleSheet, Dimensions, Platform} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const backgroundColor = Platform.OS === 'ios' ? 'white' : '#283C0A';

export default StyleSheet.create({
    slider: {
        width: screenWidth,
    },
    sliderItem: {
        width: screenWidth / 3,
    },
    dotStyle: {
        marginHorizontal: 0,
        width: 7,
        height: 7,
        backgroundColor,
    },
    dotContainerStyle: {
        marginHorizontal: 0,
    },
    containerStyle: {
        width: screenWidth,
        paddingHorizontal: 0,
        paddingTop: 0,
        paddingBottom: 10,
    },
});
