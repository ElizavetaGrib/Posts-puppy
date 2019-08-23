import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {modalSwitcher} from '../../actions';

import styles from './styles';

const ListItem = ({item, openModal}) => {
    return (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => openModal(item)}>
            <Text style={styles.listText}>{item.id}</Text>
            <Text style={styles.listText}
                  numberOfLines={1}>{item.title}</Text>
        </TouchableOpacity>);
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (post) => dispatch(modalSwitcher(post)),
    };
};

export default connect(null, mapDispatchToProps)(ListItem);
