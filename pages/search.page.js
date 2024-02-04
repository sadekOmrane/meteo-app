import { SafeAreaView, StyleSheet, View, TextInput, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AddressService } from "../services/address.service";
import React from "react";
import { IconButton } from "react-native-paper";
import SearchListComponent from "../components/search.list.component";

export default function SearchPage({ navigation }) {
  service = new AddressService();

  const [searchKey, setSearchKey] = React.useState("");

  const [address, setAddress] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    service.getAddress(searchKey).then((data) => {
        setAddress(data);
        setLoading(false);
    });
  }, [searchKey]);

  return (
    <LinearGradient
      colors={["#08244F", "#134CB5", "#0B42AB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.navbar}>
            <IconButton
              icon="chevron-left"
              iconColor="white"
              size={24}
              onPress={() => navigation.goBack()}
            />
            <View style={styles.searchInput}>
              <IconButton
                icon="magnify"
                iconColor="black"
                size={20}
                onPress={() => navigation.push("search")}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Ville"
                placeholderTextColor="grey"
                color="black"
                value={searchKey}
                onChangeText={(text) => setSearchKey(text)}
              />
            </View>
          </View>
          <SearchListComponent loading={loading} address={address} navigation={navigation} />
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
