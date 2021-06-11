import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

const SearchScreen = props => {
  const [inputText, setInputText] = useState('');
  const trainers = useSelector(state => state.trainers.availableTrainers);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="What are looking for"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={trainers}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.trainerText}>
              {item.firstName} {item.lastName}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
