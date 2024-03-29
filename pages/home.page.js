import { StatusBar, Text, StyleSheet, View, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNavbarComponent from "../components/home.navbar.component";
import HumiditeComponent from "../components/humidite.component";
import React from "react";
import { Switch } from "react-native-paper";
import { WeatherService } from "../services/weather.service";
import HomeTempDataComponent from "../components/home.temp.data.component";
import { IconButton } from "react-native-paper";
import { FavoriteService } from "../services/favorite.service";

export default function HomePage({ navigation, route }) {
  weatherService = new WeatherService();
  favoriteService = new FavoriteService();

  const address = route?.params?.address || {
    properties: {
      name: "paris",
      label: "paris",
      id: "75056",
    },
  };

  const [weather, setWeather] = React.useState({});

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const [isFavorite, setIsFavorite] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  React.useEffect(() => {
    favoriteService.isExist(address?.properties?.id).then((data) => {
      setIsFavorite(data);

      console.log(data);
    } );
  }, []);

  React.useEffect(() => {
    setLoading(true);
    weatherService
      .getWeather(address?.properties?.name, isSwitchOn ? "imperial" : "metric")
      .then((data) => {
        setWeather(data);
        setLoading(false);

        console.log(data);
      });
  }, [isSwitchOn, address?.properties?.name]);

  return (
    <LinearGradient
      colors={["#08244F", "#134CB5", "#0B42AB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <HomeNavbarComponent navigation={navigation} address={address} />
          {weather?.main && (
            <>
              <HomeTempDataComponent
                weather={weather}
                isSwitchOn={isSwitchOn}
              />
              <View style={styles.dataActions}>
                <View style={styles.switchContainer}>
                  <Switch
                    color="#08244F"
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                    style={{ marginRight: 10 }}
                  />
                  <Text style={styles.txt}>°C / °F</Text>
                </View>
                <IconButton
                  style={styles.favoriteBtn}
                  icon="heart"
                  iconColor={isFavorite ? "#ff4d4d" : "white"}
                  size={30}
                  onPress={() => {
                    if(isFavorite){
                      favoriteService.removeData(address?.properties?.id);
                      setIsFavorite(false);
                    }else{
                      favoriteService.saveData(address?.properties?.id, address);
                      setIsFavorite(true);
                    }
                  }}
                />
              </View>

              <HumiditeComponent weather={weather} />
            </>
          )}
          {loading ? <Text style={styles.noDataTxt}>Loading...</Text> : null}
          {!weather?.main && !loading ? (
            <Text style={styles.noDataTxt}>
              No data found for : {address?.properties?.name}
            </Text>
          ) : null}
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
    paddingVertical: 20,
    paddingHorizontal: 30,
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
  },
  noDataTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "meduim",
    marginTop: 30,
  },
  dataActions: {
    marginTop: 10,
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  favoriteBtn: {
    backgroundColor: "rgba(0, 16, 38, 0.2)",
  },
});
