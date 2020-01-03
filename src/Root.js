import React from 'react';
import {AppRegistry,Text, Image, View} from 'react-360';
import styles from '../css/styles'

/**
 * A root container to wrap it's children and place it early in the stack
 */
class Root extends React.Component {
  render() {
    return (
        <View style={styles.panel}>
            <View style={styles.greetingBox}>
                <Text style={styles.greeting}>
                    Welcome to Ignite!
                </Text>
            </View>
            <View style={styles.wrapper}>
            </View>
        </View>
        
    );
  }
}

module.exports = Root;