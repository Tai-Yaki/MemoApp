import React from 'react';
import {
  StyleSheet, View, TextInput,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
  }

  render() {
    const { navigation } = this.props;
    const { body } = this.state;

    const handleSubmit = () => {
      const { params } = navigation.state;
      const db = firebase.firestore();

      db.collection(`users/${params.currentUser.user.uid}/memos`).add({
        body,
        createdOn: new Date(),
      })
        .then((docRef) => {
          console.log(docRef.id);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton name="check" onPress={() => { handleSubmit(); }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;
