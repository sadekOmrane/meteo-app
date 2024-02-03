import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { IconButton } from 'react-native-paper';

export default function NavbarComponent({ navigation}) {
  


  return (
    <View style={styles.navbar}>
      <View style={styles.location}>
        <Icon name="location-outline" color="white" size={24} />
        <Text style={styles.title}>Paris</Text>
      </View>
      <View style={styles.actions}>
        <IconButton
          icon="heart-outline"
          iconColor="white"
          size={24}
          onPress={() => navigation.push("favorites")}
        />
        <IconButton
          icon="magnify"
          iconColor="white"
          size={24}
          onPress={() => navigation.push("search")}
        />
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
