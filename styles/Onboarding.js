import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginHorizontal: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  selectedDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
});

export default styles;
