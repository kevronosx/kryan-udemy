import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Title } from '../components/Title';
import { NumberContainer } from '../components/NumberContainer';
import { PrimaryButton } from '../components/PrimaryButton';
import { Card } from '../components/Card';
import { InstructionText } from '../components/InstructionText';
import { GuessLogItem } from '../components/GuessLogItem';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, gameIsOverHandler }) => {
  const { width, height } = useWindowDimensions();

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameIsOverHandler(guessRounds.length);
    }
  }, [currentGuess, userNumber, gameIsOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      return Alert.alert("Don't lie!", 'You know that is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setGuessRounds(prevRounds => [newRandomNumber, ...prevRounds]);
    return setCurrentGuess(newRandomNumber);
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={{ marginBottom: 12 }}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      {content}

      <View style={styles.guessListContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={item => item}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guessListContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
