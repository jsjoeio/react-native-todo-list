import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Item from './Item'

export default class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.items.map((itemText, index) => (
          <Item
            key={index}
            text={itemText}
            toggleModal={() => this.props.toggleModal({
              type: 'update',
              itemText,
              index
            })} />
        ))}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
