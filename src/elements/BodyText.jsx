import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BodyText extends React.Component {
  render() {
    const state = this.props;
    return (
      <View>
        <Text style={styles.text}>
          { state.children }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#ddd',
    backgroundColor: '#000',
  },
});

export default BodyText;
