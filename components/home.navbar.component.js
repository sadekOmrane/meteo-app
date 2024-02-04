import { View, StyleSheet, Text } from "react-native";
import { IconButton } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";


export default function HomeNavbarComponent({ navigation, city, label}) {
  return (
    <View style={styles.navbar}>
      <View style={styles.location}>
        <Icon name="location-outline" color="white" size={24} />
        <View>
        <Text style={styles.title}>{city}</Text>
        {label && <Text style={styles.label}>{label}</Text>}
        </View>
        
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
    textTransform: 'capitalize',
  },
  label: {
    color: "grey",
    fontSize: 13,
    fontWeight: "normal",
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
