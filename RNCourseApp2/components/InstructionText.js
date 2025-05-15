import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export const InstructionText = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
