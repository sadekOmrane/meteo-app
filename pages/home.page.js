import { StatusBar, Text, StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import NavbarComponent from "../components/navbar.component";
import Icon from "react-native-vector-icons/Ionicons";
import HumiditeComponent from "../components/humidite.component";

export default function HomePage() {
  return (
    <LinearGradient
      colors={["#08244F", "#134CB5", "#0B42AB"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <NavbarComponent />
          <Image
            source={require("../assets/sun-cloud-angled-rain.png")}
            style={styles.image}
          />
          <Text style={styles.temp}>18° C <Icon name="chevron-down" size={35}/></Text>
          <Text style={styles.txt}>Precipitations</Text>
          <Text style={styles.rangeTemp}>Max: 31º Min: 25º</Text>
          <HumiditeComponent />
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    marginTop: 100,
  },
  temp: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "medium",
    marginTop: 20,
  },
  txt: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "normal",
    marginTop: 5,
  },
  rangeTemp: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "normal",
    marginTop: 10,
  },
});
