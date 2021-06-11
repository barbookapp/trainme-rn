import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
  },
  searchButton: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 20,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    zIndex: 50,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
