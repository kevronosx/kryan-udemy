import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default App = () => {
  const [showModel, setShowModal] = useState(false);
  const [listOfGoals, setListOfGoals] = useState([]);

  const startAddGoal = () => setShowModal(true);

  const addGoalHandler = enteredGoalText =>
    setListOfGoals(prevState => [
      ...prevState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

  const deleteGoalHandler = id =>
    setListOfGoals(prevState => prevState.filter(goal => goal.id !== id));

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title={'Add New Goal'} color="pink" onPress={startAddGoal} />

        <GoalInput
          addGoalHandler={addGoalHandler}
          showModel={showModel}
          setShowModal={setShowModal}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={listOfGoals}
            keyExtractor={item => item.id}
            renderItem={itemData => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                deleteGoalHandler={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
