import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.guessText}>#{roundNumber}</Text>
      <Text style={styles.guessText}>{guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    backgroundColor: Colors.accent500,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: 'black',
    shadowOffest: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  guessText: {
    fontFamily: 'open-sans',
  },
});
