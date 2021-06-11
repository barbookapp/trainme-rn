import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import TrainerItem from '../../components/train/TrainerItem';

const TrainersListScreen = props => {
  const trainers = useSelector(state => state.trainers.availableTrainers);
  return (
    <FlatList
      data={trainers}
      renderItem={itemData => (
        <TrainerItem
          image={itemData.item.imageUrl}
          firstName={itemData.item.firstName}
          lastName={itemData.item.lastName}
          onViewDetail={() => {
            props.navigation.navigate('Trainer Detail', {
              trainerId: itemData.item.id,
              trainerName: itemData.item.firstName,
            });
          }}
          onSchedule={() => {
            props.navigation.navigate('Trainer', {
              trainerId: itemData.item.id,
              trainerName: itemData.item.firstName,
            });
          }}
        />
      )}
    />
  );
};

export default TrainersListScreen;
