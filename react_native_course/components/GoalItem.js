import { View, Text, StyleSheet, Pressable } from 'react-native';

export const GoalItem = ({ text, deleteGoalHandler, id }) => (
  <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: '#ddd' }}
      onPress={deleteGoalHandler.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalText}>{text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    borderRadius: 6,
    backgroundColor: 'purple',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#fff',
    padding: 5,
  },
});
