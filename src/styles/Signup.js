import {brandColor as brandColor} from '../../app.json';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  logoText: {
    fontSize: 35,
    marginVertical: 20,
    fontFamily: 'SourceSansPro',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  LoginLink: {
    marginTop: 0,
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: brandColor,
  },
});

export default styles;
