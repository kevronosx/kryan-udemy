import { Text, StyleSheet, Platform } from 'react-native';

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 5,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
