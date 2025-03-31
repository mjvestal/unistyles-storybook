import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 8,
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
}));
