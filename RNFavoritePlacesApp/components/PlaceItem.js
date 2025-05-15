import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable
      onPress={onSelect}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.detailsCOntainer}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: { opacity: 0.75 },
  image: {},
  detailsCOntainer: {},
  title: {},
  address: {},
});
