import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';

const TrainerScreen = props => {
  const {trainerId} = props.route.params;
  const selectedTrainer = useSelector(state =>
    state.trainers.availableTrainers.find(train => train.id === trainerId),
  );
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: selectedTrainer.imageUrl,
        }}
      />
      <Text style={styles.sectionTitle}>Specialties </Text>
      <Text style={styles.specialties}>{selectedTrainer.specialtyIds} </Text>
      <Text style={styles.bio} numberOfLines={3}>
        {selectedTrainer.bio}
      </Text>
      <Text style={styles.sectionTitle}>Availability</Text>
    </View>
  );
};

export default TrainerScreen;
