import * as React from 'react';
import { Text, View, StyleSheet, Modal, Button, TextInput, SafeAreaView } from 'react-native';

export default class Item extends React.Component {
  handleModalClick = () => {
    if (this.props.title === 'Update item') {
      return this.props.handleChange
    }
    return this.props.handleSubmit
  }

  render() {
    const { text } = this.props;

    return (
      <Modal visible={this.props.visible} onRequestClose={() => {}}>
        <SafeAreaView>
          <TextInput
            value={this.props.value}
            onChangeText={this.props.handleChange}
            style={styles.textInput}
          />
          <Button title={this.props.title} onPress={this.props.handleSubmit} />
          <Button title="Close modal" onPress={this.handleModalClick} />
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
