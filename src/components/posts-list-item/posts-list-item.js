import React from 'react';
import {FlatList} from 'react-native';

import ListItem from '../list-item';

import styles from './styles';

const PostsListItem = ({item}) => {
    return (
        <FlatList contentContainerStyle={styles.postListItem}
                  data={item}
                  renderItem={({item}) => <ListItem item={item}/>}
                  keyExtractor={(item) => item.id.toString()}/>
    );
};

export default PostsListItem;
