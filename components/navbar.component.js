import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function NavbarComponent() {
  return (
    <View style={styles.navbar}>
      <View style={styles.location}>
        <Icon name="location-outline" color="white" size={24} />
        <Text style={styles.title}>Paris</Text>
      </View>
      <View style={styles.actions}>
        <Icon name="heart-outline" color="white" size={24} />
        <Icon name="search" color="white" size={24} style={styles.searchBtn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBtn: {
    marginLeft: 10,
  },
});
