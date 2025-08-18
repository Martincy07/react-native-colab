// components/Counter.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttons}>
        <Button title="➖" onPress={() => setCount(count - 1)} />
        <Button title="➕" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#fff3e0",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  count: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#e65100",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});