import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const ErrorIndicator = ({error, info}) => {
    return (
        <View style={styles.errorWrapper}>
            <View>
                <Text style={styles.errorHeader}>
                    Something went wrong!
                </Text>
                <Text style={styles.error}>
                    {error}
                </Text>
                <Text style={styles.errorInfo}>
                    {info}
                </Text>
            </View>
        </View>
    );
};

export default ErrorIndicator;
