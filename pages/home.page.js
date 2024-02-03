import { StatusBar, Text, StyleSheet, View, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import NavbarComponent from "../components/navbar.component";
import HumiditeComponent from "../components/humidite.component";
import React from "react";
import { Switch } from "react-native-paper";
import { WeatherService } from "../services/weather.service";

service = new WeatherService();

export default function HomePage({ navigation }) {
  const [weather, setWeather] = React.useState({});

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  React.useEffect(() => {
    service
      .getWeather("paris", isSwitchOn ? "imperial" : "metric")
      .then((data) => setWeather(data));
  }, [isSwitchOn]);

  return (
    <LinearGradient
      colors={["#08244F", "#134CB5", "#0B42AB"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <NavbarComponent navigation={navigation} />
          <Image
            source={require("../assets/sun-cloud-angled-rain.png")}
            style={styles.image}
          />
          <Text style={styles.temp}>
            {weather?.main?.temp}° {isSwitchOn ? "F" : "C"}
          </Text>
          <Text style={styles.txt}>Precipitations</Text>
          <View style={styles.rangeTempContainer}>
            <Text style={styles.rangeTempTxt}>
              Min: {weather?.main?.temp_max}º
            </Text>
            <Text style={[styles.rangeTempTxt, {marginLeft: 10}]} >
              Max: {weather?.main?.temp_min}º
            </Text>
          </View>
          <View style={styles.switchContainer}>
            <Switch
              color="#08244F"
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.txt}>°C / °F</Text>
          </View>

          <HumiditeComponent weather={weather} />
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
  switchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});
