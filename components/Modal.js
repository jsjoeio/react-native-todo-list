import * as React from 'react';
import { Text, View, StyleSheet, Modal, Button, TextInput, SafeAreaView } from 'react-native';

export default class Item extends React.Component {
  state = {
    currentValue: '',
  };

  handleChange = value => this.setState({ currentValue: value });

  // handleSubmit = () => {
  //   const updatedItems = [...this.state.items]
  //   updatedItems.push(this.state.value)
  //   this.setState({
  //     items: updatedItems,
  //     value: ''
  //   })
  // }

  render() {
    const { text } = this.props;
    return (
      <Modal visible={this.props.visible} onRequestClose={() => {}}>
        <SafeAreaView>
          <TextInput
            value={this.props.editingValue}
            onChangeText={this.props.handleChange}
            style={styles.textInput}
          />
          <Button title="Update item" onPress={this.props.handleUpdate} />
          <Button title="Close modal" onPress={this.props.toggleModal} />
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
