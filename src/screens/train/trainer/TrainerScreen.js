import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const TrainerScreen = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.t9okf4PSzozmd5-nC3NmPwHaDs%26pid%3DApi&f=1',
        }}
      />
      <Text style={styles.sectionTitle}>Specialties </Text>
      <Text style={styles.specialties}>Specialty </Text>
      <Text style={styles.bio} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, </Text>
      <Text style={styles.sectionTitle}>Availability</Text>
    </View>
  );
};

export default TrainerScreen;
