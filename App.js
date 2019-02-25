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
    editingValue: '',
    editingIndex: 0,
    modalVisible: false
  }

  handleChange = key => value => this.setState({[key]: value})

  handleSubmit = () => {
    const updatedItems = [...this.state.items]
    updatedItems.push(this.state.value)
    this.setState({
      items: updatedItems,
      value: ''
    })
  }

  handleUpdate = () => {
    const updatedItems = [...this.state.items]
    updatedItems.splice(this.state.editingIndex, 1, this.state.editingValue)
    this.setState({
      items: updatedItems,
      editingValue: '',
      modalVisible: !this.state.modalVisible
    })
  }

  toggleModal = (itemText, index) => {
    console.log('toggling modal...')
    this.setState({
      modalVisible: !this.state.modalVisible,
      editingValue: itemText,
      editingIndex: index
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
            <TextInput value={this.state.value} onChangeText={this.handleChange('value')} style={appStyles.textInput}/>
          <Button title='Add to list' onPress={this.handleSubmit}/>
          </View>
          <Modal
            visible={this.state.modalVisible}
            toggleModal={this.toggleModal}
            editingValue={this.state.editingValue}
            handleChange={this.handleChange('editingValue')}
            handleUpdate={this.handleUpdate}
            />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
