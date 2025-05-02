import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'ServiceDetail'>;

export default function ServiceDetailScreen({ route, navigation }: Props) {
  const { service } = route.params;

  const handleProceed = () => {
    // Navigate to provider map or request confirmation screen
    // For now, just alert
    alert(`Proceder con el servicio: ${service.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del servicio</Text>
      <Text style={styles.serviceName}>{service.name}</Text>
      <Button title="Continuar" onPress={handleProceed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
  },
  serviceName: {
    fontSize: 18,
    marginBottom: 20,
  },
});
