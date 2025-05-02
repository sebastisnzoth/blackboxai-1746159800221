import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const providers = [
  {
    id: '1',
    name: 'Juan Pérez',
    coordinate: { latitude: 37.78825, longitude: -122.4324 },
  },
  {
    id: '2',
    name: 'María Gómez',
    coordinate: { latitude: 37.78925, longitude: -122.4334 },
  },
];

export default function ProviderMapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {providers.map((provider) => (
          <Marker
            key={provider.id}
            coordinate={provider.coordinate}
            title={provider.name}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
