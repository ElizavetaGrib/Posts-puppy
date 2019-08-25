import React from 'react';
import {Animated} from 'react-native';

const ImageContainer = ({onLoaded, ...props}) => {
    const opacity = new Animated.Value(0);

    const onLoad = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
        }).start(() => onLoaded(true));
    };

    return (
        <Animated.Image style={[props.style, {opacity}]}
                        onLoad={onLoad}
                        {...props}/>
    );
};

export default ImageContainer;
