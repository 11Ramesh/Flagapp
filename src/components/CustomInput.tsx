import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

type CustomInputProps = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});

export default CustomInput;
