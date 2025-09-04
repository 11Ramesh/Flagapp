import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

type CustomLabelProps = {
  text: string;
  fontSize?: number;
  color?: string;
  style?: TextStyle | TextStyle[];
  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
};

const CustomLabel: React.FC<CustomLabelProps> = ({
  text,
  fontSize = 20,
  color = "#000",
  fontWeight = "bold",
  style = {},
}) => {
  return (
    <Text style={[styles.label, { fontSize, color, fontWeight }, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    textAlign: "center",
  },
});

export default CustomLabel;
