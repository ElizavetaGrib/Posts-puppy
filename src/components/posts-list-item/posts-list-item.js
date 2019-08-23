import React from 'react';
import {FlatList} from 'react-native';

import ListItem from '../list-item';

import styles from './styles';

const PostsListItem = ({item}) => {
    return (
        <FlatList
            contentContainerStyle={styles.postListItem}
            keyExtractor={(item) => item.id.toString()}
            data={item}
            renderItem={({item}) => <ListItem item={item}/>}/>
    );
};


export default PostsListItem;
