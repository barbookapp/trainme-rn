import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Image, ScrollView, View, Text, Button} from 'react-native';

const TrainerDetailScreen = props => {
  const {trainerId} = props.route.params;

  const selectedTrainer = useSelector(state =>
    state.trainers.availableTrainers.find(train => train.id === trainerId),
  );
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedTrainer.imageUrl}} />
      <View style={styles.actions}>
        <Button title="Schedule" onPress={() => {}} />
      </View>
      <Text style={styles.description}>
        {selectedTrainer.firstName} {selectedTrainer.lastName}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default TrainerDetailScreen;
