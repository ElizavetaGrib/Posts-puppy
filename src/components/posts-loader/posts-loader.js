import React from 'react';
import {Button, View} from 'react-native';
import {connect} from 'react-redux';

import compose from '../../utils/compose';
import {postsLoaded, loading} from '../../actions';
import withPostsService from '../hoc/with-posts-service';

import styles from './styles';

const PostsLoader = ({show, loadPosts, postsService}) => {
    if (show) {
        return (
            <View style={styles.buttonWrapper}>
                <Button color={styles.buttonColor.color}
                        title='Woof'
                        onPress={() => loadPosts(postsService)}/>
            </View>
        );
    }
    return null;
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (postsService) => {
            dispatch(loading());
            postsService.getPosts().then((data) => dispatch(postsLoaded(data)));
        },
    };
};

export default compose(withPostsService(), connect(null, mapDispatchToProps))(PostsLoader);
