import React from 'react';
import {Animated} from 'react-native';

const ImageContainer = ({onLoaded, ...props}) => {
    const opacity = new Animated.Value(0);

    const onLoad = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
        }).start(() => onLoaded(true));
    };

    return (
        <Animated.Image
            onLoad={onLoad}
            {...props}
            style={[
                {
                    opacity,
                },
                props.style,
            ]}/>
    )

};

export default ImageContainer;
