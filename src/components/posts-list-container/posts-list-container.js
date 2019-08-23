import React from 'react';
import {connect} from 'react-redux';
import {Text, ActivityIndicator} from 'react-native';

import PostsList from '../posts-list/posts-list';

import styles from './styles';

const PostsListContainer = ({posts, loading}) => {
    if (loading) {
        return <ActivityIndicator color={styles.indicatorColor.color}
                                  animating={loading}
                                  size='large'/>;
    } else {
        if (posts.length) {
            return <PostsList/>
        } else {
            return <Text style={styles.beforeMessage}>Data will be loaded when puppy will say WOOF</Text>;
        }
    }
};

const mapStateToProps = ({posts, loading}) => {
    return {posts, loading};
};

export default connect(mapStateToProps, null)(PostsListContainer);
