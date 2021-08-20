import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Image, ScrollView, View, Text, Button} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

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
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
          '2012-05-17': {marked: true},
          '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2012-05-19': {disabled: true, disableTouchEvent: true},
        }}
      />
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
