import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CustomInput from "./src/components/CustomInput";
import CustomList from "./src/components/CustomList";
import CustomLabel from "./src/components/CustomLable";
import DetailScreen from "./src/screen/DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// this type use for api ata store. this like a template
type Country = {
  name: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
};

//this use for navigation
const Stack = createNativeStackNavigator();


const HomeScreen = () => {
  const [searchName, setSearchName] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>("");

  //this use for api connection and data get
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,subregion"
      );
      const data = await res.json();
      const countryList: Country[] = data.map((item: any) => ({
        name: item.name.common,
        flag: item.flags.png,
        capital: item.capital ? item.capital[0] : "N/A",
        population: item.population,
        region: item.region,
        subregion: item.subregion,
      }));
      setCountries(countryList);
      setFilteredCountries(countryList);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setError("Unable to fetch countries. Check your connection.");
    }
  };
  // when app.tsx  reder time this use for data get
  useEffect(() => {
    fetchData();
  }, []);


  // this use for data display and search data display. this  run when text input change
  useEffect(() => {
    if (searchName === "") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((c) =>
        c.name.toLowerCase().includes(searchName.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [searchName, countries]);

  //this use for ui
  return (
    <View style={styles.container}>
      <CustomLabel text="Country List" />
      <CustomInput
        placeholder="Search"
        value={searchName}
        onChangeText={setSearchName}
      />
      {error ? (
        <CustomLabel text={error} color="red" />
      ) : (
        <CustomList data={filteredCountries} />
      )}
    </View>
  );
};

// this use for navigation progrees
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
