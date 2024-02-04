import { Text, StyleSheet, View, Image } from "react-native";

export default function HomeTempDataComponent({ weather, isSwitchOn}) {
  return (
    <>
      <Image
        source={require("../assets/sun-cloud-angled-rain.png")}
        style={styles.image}
      />
      <Text style={styles.temp}>
        {weather?.main?.temp}° {isSwitchOn ? "F" : "C"}
      </Text>
      <Text style={styles.txt}>Precipitations</Text>
      <View style={styles.rangeTempContainer}>
        <Text style={styles.rangeTempTxt}>Min: {weather?.main?.temp_max}º</Text>
        <Text style={[styles.rangeTempTxt, { marginLeft: 10 }]}>
          Max: {weather?.main?.temp_min}º
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  rangeTempContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  rangeTempTxt: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "normal",
  },
});
