import { SafeAreaView, StyleSheet, View, TextInput, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import FavoriteNavbarComponent from "../components/favorite.navbar.component";
import FavoriteListComponent from "../components/favorite.list.component";
import { FavoriteService } from "../services/favorite.service";

export default function FavoritesPage({ navigation }) {
  favoriteService = new FavoriteService();

  const [favorites, setFavorites] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    favoriteService.loadData().then((data) => {
      setFavorites(data);
      setLoading(false);
    });
  }, [0]);
  return (
    <LinearGradient
      colors={["#08244F", "#134CB5", "#0B42AB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <FavoriteNavbarComponent navigation={navigation} />
          <FavoriteListComponent navigation={navigation} favorites={favorites} loading={loading} />
        </View>
      </SafeAreaView>
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
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  searchInput: {
    fontSize: 18,
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "80%",
    display: "flex",
    flexDirection: "row",
  },
  textInput: {
    color: "black",
    width: "100%",
  },
});
