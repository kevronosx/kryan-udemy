import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';

import { FavoritesContext } from '../store/context/favorites-context';
import { MealList } from '../components/MealList';
import { MEALS } from '../data/dummy-data';

export const FavoritesScreen = () => {
  const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  if (favoriteMeals?.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>You have no favorite meals yet!</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
});
