import { Text, StyleSheet, View } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
