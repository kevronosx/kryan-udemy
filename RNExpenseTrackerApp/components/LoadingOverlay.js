import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { GlobalStyles } from '../utils/colors';

export const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
