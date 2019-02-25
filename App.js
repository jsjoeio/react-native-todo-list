import * as React from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Button, SafeAreaView } from 'react-native';
import List from './components/List'
// You can import from local files
import AssetExample from './components/AssetExample';
import Modal from './components/Modal'
import appStyles from './styles/appStyles'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

/*
  1. Create an Item component ✅
  2. Create a List component ✅
  3. Add Input component to add to list ✅
  4. Add onPress to Item component (wrap it in touchable) ✅
  5. Create the Modal component ✅
  6. Set up state and handlers to edit it
  7. Add save button
*/


export default class App extends React.Component {
  state = {
    items: ['avocados', 'tomatoes', 'bread'],
    value: '',
    editingIndex: 0,
    modalVisible: false,
    modalTitle: 'Add item'
  }

  handleChange = key => value => this.setState({[key]: value})

  handleSubmit = () => {
    const updatedItems = [...this.state.items]
    updatedItems.push(this.state.value)
    this.setState({
      items: updatedItems,
      value: '',
      modalVisible: !this.state.modalVisible
    })
  }

  handleUpdate = () => {
    const updatedItems = [...this.state.items]
    updatedItems.splice(this.state.editingIndex, 1, this.state.value)
    this.setState({
      items: updatedItems,
      value: '',
      modalVisible: !this.state.modalVisible
    })
  }

  toggleModal = ({ type, itemText, index}) => {
    if (type === 'update') {
      this.setState({
        modalTitle: 'Update item'
      })
    }
    this.setState({
      modalVisible: !this.state.modalVisible,
      value: itemText || '',
      editingIndex: index || 0
    })
  }

  render() {
    const totalTasks = this.state.items.length
    return (
      <KeyboardAvoidingView style={appStyles.container} behavior="position" enabled>
        <SafeAreaView>
          <View style={appStyles.headerContainer}>
            <Text style={appStyles.header}>Good day, friend!👋🏼</Text>
            <Text style={appStyles.subHeader}>We have {totalTasks} tasks to accomplish today.</Text>
          </View>
          <View style={appStyles.list}>
            <List items={this.state.items} toggleModal={this.toggleModal}/>
          <Button title='+ Add task' onPress={this.toggleModal}/>
          </View>
          <Modal
            title={this.state.modalTitle}
            visible={this.state.modalVisible}
            toggleModal={this.toggleModal}
            value={this.state.value}
            handleChange={this.handleChange('value')}
            handleUpdate={this.handleUpdate}
            handleSubmit={this.handleSubmit}
            />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
