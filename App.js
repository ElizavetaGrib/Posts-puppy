import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/store';
import {PostsServiceProvider} from './src/components/posts-service-context';
import PostsService from './src/services/posts-service';
import PopUp from './src/components/pop-up/pop-up';
import ImageContainer from './src/components/image-container';
import PostsLoader from './src/components/posts-loader';
import PostsListContainer from './src/components/posts-list-container';

import styles from './styles';

const postsService = new PostsService();

export default function App() {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <Provider store={store}>
            <PostsServiceProvider value={postsService}>
                <StatusBar barStyle='light-content'
                           backgroundColor={styles.statusBar.backgroundColor}/>
                <View style={styles.statusBar}/>
                <PopUp/>
                <PostsLoader show={imageLoaded}/>
                <View style={styles.contentWrapper}>
                    <ImageContainer style={styles.imageContainer}
                                    source={require('./puppy.jpg')}
                                    resizeMode={'stretch'}
                                    onLoaded={setImageLoaded}/>
                    <PostsListContainer/>
                </View>
            </PostsServiceProvider>
        </Provider>
    );
};
