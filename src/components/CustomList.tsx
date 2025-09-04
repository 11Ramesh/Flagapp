import React from "react";
import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

type Country = {
  name: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
};

type CustomListProps = {
  data: Country[];
};

type RootStackParamList = {
  Home: undefined;
  Detail: { country: Country };
};

const CustomList: React.FC<CustomListProps> = ({ data }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        // when press the item go to detail
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("Detail", { country: item })}
        >
          <Image source={{ uri: item.flag }} style={styles.flag} />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )}
      ListEmptyComponent={() => (
        <View style={styles.item}>
          <Text style={styles.text}>No items found</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  flag: {
    width: 40,
    height: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default CustomList;
