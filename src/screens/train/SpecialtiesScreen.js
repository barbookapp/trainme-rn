import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {SPECIALTIES} from '../../data/dummy-specialties';

const SpecialtiesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate('Specialty Trainers', {
            specialtyId: itemData.item.id,
            specialtyTitle: itemData.item.title,
          });
        }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    // <View style={styles.container}>
    //   <Text> Discover screen</Text>
    //   <Button
    //     title="Category"
    //     onPress={() => props.navigation.navigate('Trainers')}
    //   />
    // </View>

    <FlatList data={SPECIALTIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default SpecialtiesScreen;
