import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function HumiditeComponent() {
  return (
    <View style={styles.humContainer}>
      <Text style={styles.humTxt}>Humidité</Text>
      <Text style={styles.humValue}>10 </Text>
      <Icon name="cloud" color="white" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  humContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "rgba(0, 16, 38, 0.4)",
    width: "100%",
  },
  humTxt: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  humValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "normal",
  },
});
