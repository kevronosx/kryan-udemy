import { useLayoutEffect } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealList } from '../components/MealList';

export const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  return <MealList items={displayedMeals} />;
};
