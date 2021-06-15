import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Take a look!</Text>
      </Pressable>
      <ImageBackground
        source={require('/Users/josh/Development/trainme/TrainMe/src/assets/gym.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Train Me</Text>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
