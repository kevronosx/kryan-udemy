import { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import { PrimaryButton } from '../components/PrimaryButton';
import { Colors } from '../constants/colors';
import { Title } from '../components/Title';
import { Card } from '../components/Card';
import { InstructionText } from '../components/InstructionText';

export const StartGameScreen = ({ pickedNumberHandler }) => {
  const { height } = useWindowDimensions();

  const [enteredNumber, setEnteredNumber] = useState('');

  const handleNumberInput = enteredText => setEnteredNumber(enteredText);

  const resetInputHandler = () => setEnteredNumber('');

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredNumber, 10);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      return Alert.alert(
        'Invalid number!',
        'Number has to be a value between 1 and 99',
        [{ text: 'OKay', style: 'destructive', onPress: resetInputHandler }]
      );
    }

    pickedNumberHandler(choseNumber);
  };

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card style={styles.inputContainer}>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              onChangeText={handleNumberInput}
              style={styles.textInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: 'bold',
    padding: 4,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
