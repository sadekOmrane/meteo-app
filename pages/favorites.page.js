import { StyleSheet, Text, View } from "react-native";

export default function FavoritesPage() {
  return (
    <View style={styles.container}>
      <Text>Favorites Page</Text>
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