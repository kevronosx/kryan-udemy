import { View, Text, FlatList } from 'react-native';
import { PlaceItem } from './PlaceItem';

export const PlacesList = ({ places }) => {
  return (
    <View>
      <Text>PlacesList</Text>
      <FlatList
        data={places}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PlaceItem place={item} />}
      />
    </View>
  );
};
