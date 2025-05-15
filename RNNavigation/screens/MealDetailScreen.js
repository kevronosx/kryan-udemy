import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLayoutEffect, useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { MealSpecs } from '../components/MealSpecs';
import { IconButton } from '../components/IconButton';

export const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const favoriteMealCtx = useContext(FavoritesContext);

  const displayedMeal = MEALS.filter(meal => meal.id === mealId)[0];

  const mealIsFav = favoriteMealCtx.ids.includes(mealId);

  const changeFavoritesStatusHandler = () => {
    if (mealIsFav) {
      favoriteMealCtx.removeFavorite(mealId);
    } else {
      favoriteMealCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: displayedMeal.title,
      headerRight: () => (
        <IconButton
          icon={mealIsFav ? 'star' : 'star-outline'}
          color="white"
          onPress={changeFavoritesStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: displayedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{displayedMeal.title}</Text>

        <MealSpecs
          duration={displayedMeal.duration}
          complexity={displayedMeal.complexity}
          affordability={displayedMeal.affordability}
          textStyle={{ color: 'white' }}
        />

        <View style={styles.foodTypeContainer}>
          <Text style={styles.foodType}>
            Gluten Free: <BooleanIcon bool={displayedMeal.isGlutenFree} />
          </Text>
          <Text style={styles.foodType}>
            Vegan: <BooleanIcon bool={displayedMeal.isVegan} />
          </Text>
          <Text style={styles.foodType}>
            Vegetarian: <BooleanIcon bool={displayedMeal.isVegetarian} />
          </Text>
          <Text style={styles.foodType}>
            Lactose Free: <BooleanIcon bool={displayedMeal.isLactoseFree} />
          </Text>
        </View>

        <View style={styles.ingredientsContainer}>
          <SubTitle>Ingredients</SubTitle>
          {displayedMeal.ingredients.map(item => (
            <ListItem key={item}>- {item}</ListItem>
          ))}
        </View>

        <View style={styles.stepsContainer}>
          <SubTitle>Steps</SubTitle>
          {displayedMeal.steps.map((item, index) => {
            const count = index + 1;
            return (
              <ListItem key={item}>
                {count}) {item}
              </ListItem>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItem}>{children}</Text>
    </View>
  );
};

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

const BooleanIcon = ({ bool }) => (
  <Text style={{ marginHorizontal: 4, color: bool ? 'green' : 'red' }}>
    {bool ? '√' : 'X'}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    color: 'white',
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    marginVertical: 10,
    borderRadius: 8,
  },
  foodTypeContainer: {
    marginBottom: 10,
  },
  foodType: {
    color: 'white',
    margin: 2,
  },
  ingredientsContainer: {
    marginVertical: 10,
  },
  stepsContainer: {
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 2,
    textAlign: 'center',
    color: '#e2b497',
  },
  subTitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
    marginBottom: 10,
    margin: 4,
    padding: 6,
  },
  listItemContainer: {
    backgroundColor: '#e2b497',
    marginVertical: 2,
    marginHorizontal: 20,

    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  listItem: {
    color: '#3f2f25',
  },
});
