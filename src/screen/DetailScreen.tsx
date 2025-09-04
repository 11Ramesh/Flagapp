import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomLabel from "../components/CustomLable";

type DetailProps = {
  route: any;
};

const DetailScreen: React.FC<DetailProps> = ({ route }) => {
  const { country } = route.params;
  console.log(country);

  return (
    <View style={styles.container}>
      <Image source={{ uri: country.flag }} style={styles.flag} />

      <CustomLabel text={`${country.name}`} fontSize={26} />

      <View style={styles.leftallignment} />
      <View style={{ flexDirection: "row" }}>
        <CustomLabel text="Capital : " fontWeight="bold" fontSize={13} />
        <CustomLabel text={country.capital} fontWeight="400" fontSize={13} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <CustomLabel text="Population : " fontWeight="bold" fontSize={13} />
        <CustomLabel text={country.population} fontWeight="400" fontSize={13} />
      </View>

      <View style={{ flexDirection: "row"}}>
        <CustomLabel text="Region : " fontWeight="bold" fontSize={13} />
        <CustomLabel text={country.region} fontWeight="400" fontSize={13} />
      </View>

      <View style={{ flexDirection: "row"}}>
        <CustomLabel text="Subregion : " fontWeight="bold" fontSize={13} />
        <CustomLabel text={country.subregion} fontWeight="400" fontSize={13} />
      </View>
      <View />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  flag: {
    width: 150,
    height: 90,
    marginBottom: 20,
  },
  leftallignment: {
  },

});

export default DetailScreen;
