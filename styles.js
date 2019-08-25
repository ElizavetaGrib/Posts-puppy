import {StyleSheet, Platform, Dimensions, StatusBar} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const statusbarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const lightGreen = '#8C965A';

export default StyleSheet.create({
    statusBar: {
        backgroundColor: lightGreen,
        height: statusbarHeight,
    },
    contentWrapper: {
        backgroundColor: lightGreen,
        flex: 1,
    },
    imageContainer: {
        height: screenHeight * 0.6,
        width: screenWidth,
    },
});
