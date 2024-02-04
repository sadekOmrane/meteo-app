import { View, StyleSheet, Text } from "react-native";
import { IconButton } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";


export default function FavoriteNavbarComponent({ navigation, address}) {
  return (
    <View style={styles.navbar}>
      <IconButton
          icon="chevron-left"
          iconColor="white"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    textTransform: 'capitalize',
  },
});
