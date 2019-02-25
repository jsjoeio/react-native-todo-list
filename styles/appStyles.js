import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    marginHorizontal: 20,
    marginVertical: 45,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 18,
  },
  header: {
    fontSize: 36,
  },
  subHeader: {
    paddingTop: 2,

    fontSize: 20,
  },
  list: {
    backgroundColor: 'transparent',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: 'tomato',
    height: 50,
    fontSize: 10,
    color: 'white'
  }
});

export default appStyles
