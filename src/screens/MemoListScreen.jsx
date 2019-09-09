import React from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.contaner}>
        <MemoList navigation={navigation} />
        <CircleButton name="plus" onPress={() => { navigation.navigate('MemoEdit') ;}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;
