import React from 'react';
import {Modal, Text, Button, View} from 'react-native';
import {connect} from 'react-redux';

import {modalSwitcher} from '../../actions';

import styles from './styles';

const PopUp = ({modalON, post, closeModal}) => {
    return (
        <Modal transparent visible={modalON} onRequestClose={closeModal}>
            <View style={styles.formWrapper}>
                <View style={styles.form}>
                    <Text
                        style={styles.textStyle}>{post.id}</Text>
                    <Text style={styles.textStyle}>{post.title}</Text>
                    <Button color={styles.buttonColor.color} onPress={closeModal}
                            title={'Close Modal'}/>
                </View>
            </View>
        </Modal>
    );
};

const mapStateToProps = ({modalON, post}) => {
    return {modalON, post,};
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(modalSwitcher({id: '', title: '',})),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
