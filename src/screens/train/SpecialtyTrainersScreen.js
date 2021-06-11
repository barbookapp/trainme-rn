import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import TrainerItem from '../../components/train/TrainerItem';

const SpecialtyTrainersScreen = props => {
  const {specialtyId} = props.route.params;

  const visibleTrainers = useSelector(state =>
    state.trainers.filteredTrainers.filter(
      trainer => trainer.specialtyIds.indexOf(specialtyId) >= 0,
    ),
  );
  return (
    <FlatList
      data={visibleTrainers}
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
          onSchedule={() => {}}
        />
      )}
    />
  );
};

export default SpecialtyTrainersScreen;
