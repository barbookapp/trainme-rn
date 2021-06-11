import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  specialties: {
    fontSize: 16,
    color: '#5b5b5b',
    marginBottom: 5,
  },
  bio: {fontSize: 16, lineHeight: 23},
  sectionTitle: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
