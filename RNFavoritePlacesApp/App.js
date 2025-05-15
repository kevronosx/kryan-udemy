import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { AllPlaces } from './screens/AllPlaces';
// import { PlaceDetails } from './screens/PlaceDetails';
// import { Map } from './screens/Map';
// import { AddPlace } from './screens/AddPlace';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AllPlaces />
      {/* <PlaceDetails /> */}
      {/* <Map /> */}
      {/* <AddPlace /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
