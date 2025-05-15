import { View, StyleSheet, FlatList } from 'react-native';

import { MealItem } from '../components/MealItem';

export const MealList = ({ items }) => {
  const renderMealItem = itemData => {
    const { title, imageUrl, duration, complexity, affordability, id } =
      itemData.item;

    const mealItemProps = {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
