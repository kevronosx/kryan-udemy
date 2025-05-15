import { useState } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

export const GoalInput = ({ addGoalHandler, showModel, setShowModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = enteredText => setEnteredGoalText(enteredText);

  const handleInput = () => {
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    addGoalHandler(enteredGoalText);
    setEnteredGoalText('');
    return handleModalClose();
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <Modal visible={showModel} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal-image.png')}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal"
          value={enteredGoalText}
        />
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleModalClose} color="#aaa" />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={handleInput} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});
