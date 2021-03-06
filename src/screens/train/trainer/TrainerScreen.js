import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';

const TrainerScreen = props => {
  const navigation = useNavigation();
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
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Agenda')}>
        <Text style={styles.searchButtonText}>Take a look!</Text>
      </Pressable>
      <Text style={styles.sectionTitle}>Availability</Text>
      <Calendar
        markingType={'period'}
        markedDates={{
          '2021-07-15': {marked: true, dotColor: '#50cebb'},
          '2021-07-16': {marked: true, dotColor: '#50cebb'},
          '2021-07-21': {
            startingDay: true,
            color: '#50cebb',
            textColor: 'white',
          },
          '2021-07-22': {color: '#70d7c7', textColor: 'white'},
          '2021-07-23': {
            color: '#70d7c7',
            textColor: 'white',
            marked: true,
            dotColor: 'white',
          },
          '2021-07-24': {color: '#70d7c7', textColor: 'white'},
          '2021-07-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
        }}
      />
      {/* <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={{
          '2021-07-22': [{name: 'item 1 - any js object'}],
          '2021-07-23': [{name: 'item 2 - any js object', height: 80}],
          '2021-07-24': [],
          '2021-07-25': [
            {name: 'item 3 - any js object'},
            {name: 'any js object'},
          ],
        }}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={month => {
          console.log('trigger items loading');
        }}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={calendarOpened => {
          console.log(calendarOpened);
        }}
        // Callback that gets called on day press
        onDayPress={day => {
          console.log('day pressed');
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={day => {
          console.log('day changed');
        }}
        // Initially selected day
        selected={'2021-07-16'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2021-07-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2021-07-30'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
          return <View />;
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderDay={(day, item) => {
          return <View />;
        }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />;
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return <View />;
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return <View />;
        }}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        // Hide knob button. Default = false
        hideKnob={true}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        showClosingKnob={false}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        markedDates={{
          '2021-07-16': {selected: true, marked: true},
          '2021-07-17': {marked: true},
          '2021-07-18': {disabled: true},
        }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
        onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
        refreshControl={null}
        // Agenda theme
        theme={{
          // ...calendarTheme,
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue',
        }}
        // Agenda container style
        style={{}}
      /> */}
    </View>
  );
};

export default TrainerScreen;
