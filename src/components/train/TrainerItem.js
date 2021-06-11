import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

const TrainerItem = props => {
  return (
    <View style={styles.trainer}>
      <Image style={styles.image} source={{uri: props.image}} />
      <Text style={styles.name}>
        {props.firstName} {props.lastName}
      </Text>
      <View>
        <Button
          style={styles.action}
          title="View Details"
          onPress={props.onViewDetail}
        />
        <Button title="View Schedule" onPress={props.onSchedule} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  trainer: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  name: {
    fontSize: 18,
    marginVertical: 4,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default TrainerItem;
