import { StyleSheet, Text, View } from "react-native";

export default function SearchPage() {
  return (
    <View style={styles.container}>
      <Text>Search Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });