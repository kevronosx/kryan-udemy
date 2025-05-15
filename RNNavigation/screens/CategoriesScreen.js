import { FlatList, Text } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../components/CategoryGridTile';

export const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = itemData => {
    const presshandler = () =>
      navigation.navigate('MealsOverview', { categoryId: itemData.item.id });

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={presshandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
