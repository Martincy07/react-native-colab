import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Greeting({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola, {name}! 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00796b",
  },
});