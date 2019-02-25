import { StyleSheet } from 'react-native';

const itemStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 8,
    borderRadius: 3,
  },
  text: {
    textAlign: 'left',
    marginLeft: 8,
    backgroundColor: 'transparent',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default itemStyles