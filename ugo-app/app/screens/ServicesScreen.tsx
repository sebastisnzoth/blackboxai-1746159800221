import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';

type Service = {
  id: string;
  name: string;
};

type ServicesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Services'>;

interface Props {
  navigation: ServicesScreenNavigationProp;
}

const services: Service[] = [
  { id: '1', name: 'Pintor' },
  { id: '2', name: 'Plomero' },
  { id: '3', name: 'Jardinero' },
  { id: '4', name: 'Flete' },
  { id: '5', name: 'Cuidado de personas' },
];

export default function ServicesScreen({ navigation }: Props) {
  const handleSelectService = (service: Service) => {
    // Navigate to provider map or request confirmation screen
    navigation.navigate('ServiceDetail', { service });
  };

  const renderItem = ({ item }: { item: Service }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelectService(item)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servicios disponibles</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#0a7ea4',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
});
