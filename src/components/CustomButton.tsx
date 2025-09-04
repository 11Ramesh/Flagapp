import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, backgroundColor ? { backgroundColor } : {}]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007BFF", // default blue
    marginVertical: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
