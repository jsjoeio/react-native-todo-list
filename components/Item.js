import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import itemStyles from '../styles/itemStyles'

export default class Item extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={itemStyles.container}
        onPress={() => {
          this.props.toggleModal()
        }}
      >
        <View>
          <Text style={itemStyles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

