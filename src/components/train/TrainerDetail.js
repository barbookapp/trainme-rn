import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const TrainerScreen = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.imageUrl,
        }}
      />
      <Text style={styles.sectionTitle}>Specialties </Text>
      <Text style={styles.specialties}>{props.specialtyIds} </Text>
      <Text style={styles.bio} numberOfLines={3}>
        {props.bio}
      </Text>
      <Text style={styles.sectionTitle}>Availability</Text>
    </View>
  );
};

export default TrainerScreen;
