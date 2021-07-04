import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height
  },
  text:{
    fontWeight: 'bold',
    color: '#fff',
  },
  video: {
  	position: 'absolute',
  	top: 0,
  	left: 0,
  	bottom: 0,
  	right: 0
  }
});

export default styles;